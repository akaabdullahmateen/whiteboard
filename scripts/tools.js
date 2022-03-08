function activateTool(e, tool = undefined) {
    tools.forEach((item) => {
        const t = document.getElementById(item);
        t.classList.remove("active");
    });

    if (tool === undefined) tool = e.currentTarget.id;
    const t = document.getElementById(tool);
    t.classList.add("active");

    currentTool = tool;

    if (tool !== "pencil-tool") {
        canvas.isDrawingMode = false;
        if (isPaintMenuOpen) togglePaintMenu();
    } else {
        canvas.isDrawingMode = true;
        if (!isPaintMenuOpen) togglePaintMenu();
    }

    // Bug: Selection doesnot get disabled in eraser-tool, therefore, selection is made transparent to temporarily fix it.
    // Setting canvas.selection = false still makes a selection box appear during mouse:up, mouse:move events in eraser-tool.

    if (tool !== "eraser-tool") {
        canvas.off("mouse:down", eraseOnMouseDown);
        canvas.off("mouse:move", eraseOnMouseMove);
        canvas.off("mouse:up", resetEraser);
        canvas.selectionColor = "#18a0fb20";
        canvas.selectionBorderColor = "#18a0fb";
    } else {
        canvas.selectionColor = "transparent";
        canvas.selectionBorderColor = "transparent";
    }

    if (tool === "shape-tool") {
        const id = "shapes-sidebar-id";

        if (!isSidebarOpen) toggleSidebar(undefined, id);
        else {
            setSidebarVisible(id);
        }
    }

    if (tool != null) canvas.defaultCursor = cursors[tools.indexOf(tool)];
    else canvas.defaultCursor = cursors[0];

    switch (tool) {
        case "pointer-tool":
            activatePointerTool();
            break;
        case "pencil-tool":
            activatePencilTool(e);
            break;
        case "eraser-tool":
            activateEraserTool();
            break;
        case "text-tool":
            activateTextTool();
            break;
        case "note-tool":
            activateNoteTool();
            break;
        case "shape-tool":
            activateShapeTool();
            break;
        case "image-tool":
            activateImageTool();
            break;
        case "comment-tool":
            activateCommentTool();
            break;
        default:
            activatePointerTool();
    }
}

function activatePointerTool() {
    canvas.hoverCursor = cursors[0];
    canvas.moveCursor = cursors[0];
}

function activatePencilTool(e) {
    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    setPencilThickness(undefined, pencilThickness);
    setPencilColor(undefined, pencilColor);
    canvas.freeDrawingCursor = cursors[1];
}

function activateEraserTool() {
    canvas.hoverCursor = cursors[2];
    eraserDown = false;
    canvas.on("mouse:down", eraseOnMouseDown);
    canvas.on("mouse:move", eraseOnMouseMove);
    canvas.on("mouse:up", resetEraser);
}

function activateTextTool() {}

function activateNoteTool() {}

function activateShapeTool() {}

function activateImageTool() {}

function activateCommentTool() {}

function setPencilThickness(e, thickness = undefined) {
    const thicknessButtons = ["small-thickness", "medium-thickness", "large-thickness"];

    thicknessButtons.forEach((item) => {
        const t = document.getElementById(item);
        t.classList.remove("active");
    });

    if (thickness === undefined) thickness = e.currentTarget.id;
    const t = document.getElementById(thickness);
    t.classList.add("active");

    switch (thickness) {
        case "small-thickness":
            v = smallThickness;
            break;
        case "medium-thickness":
            v = mediumThickness;
            break;
        case "large-thickness":
            v = largeThickness;
            break;
        default:
            v = smallThickness;
    }

    pencilThickness = thickness;
    canvas.freeDrawingBrush.width = v;
}

function setPencilColor(e, color = undefined) {
    const colorButtons = ["charcoal-color", "red-color", "yellow-color", "green-color", "blue-color", "violet-color", "white-color"];

    colorButtons.forEach((item) => {
        const t = document.getElementById(item);
        t.classList.remove("active");
    });

    if (color === undefined) color = e.currentTarget.id;
    const t = document.getElementById(color);
    t.classList.add("active");

    switch (color) {
        case "charcoal-color":
            c = "#545454";
            break;
        case "red-color":
            c = "#f24e1e";
            break;
        case "yellow-color":
            c = "#ffc700";
            break;
        case "green-color":
            c = "#0fa958";
            break;
        case "blue-color":
            c = "#699bf7";
            break;
        case "violet-color":
            c = "#9747ff";
            break;
        case "white-color":
            c = "#ffffff";
            break;

        default:
            c = "#545454";
    }

    pencilColor = color;
    canvas.freeDrawingBrush.color = c;
}

function eraseOnMouseDown(options) {
    canvas.remove(options.target);
    eraserDown = true;
}

function eraseOnMouseMove(options) {
    if (eraserDown) {
        canvas.remove(options.target);
    }
}

function resetEraser() {
    eraserDown = false;
}

function togglePaintMenu() {
    const openPaintMenuBottom = "70px";
    const closePaintMenuBottom = "20px";
    paintMenu = document.getElementById("paint-menu-id");
    isPaintMenuOpen ? (paintMenu.style.bottom = closePaintMenuBottom) : (paintMenu.style.bottom = openPaintMenuBottom);
    isPaintMenuOpen = !isPaintMenuOpen;
}
