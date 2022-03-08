function initialize() {
    initializeCanvas();
    initializeObject();
    initializeEventListeners();
    initializeCanvasListeners();
    initializeShortcuts();
    activateTool(undefined, "pointer-tool");
}

function initializeCanvas() {
    canvas.allowTouchScrolling = false;
    canvas.altActionKey = null;
    canvas.altSelectionKey = null;
    canvas.backgroundColor = "";
    canvas.backgroundImage = null;
    canvas.backgroundVpt = true;
    canvas.centeredKey = null;
    canvas.centeredRotation = false;
    canvas.centeredScaling = false;
    canvas.clipPath = undefined;
    canvas.containerClass = "canvas-container";
    canvas.controlsAboveOverlay = false;
    canvas.defaultCursor = cursors[0];
    canvas.enablePointerEvents = false;
    canvas.enableRetinaScaling = true;
    canvas.fireMiddleClick = true;
    canvas.fireRightClick = true;
    canvas.freeDrawingCursor = cursors[1];
    canvas.FX_DURATION = 200;
    canvas.hoverCursor = cursors[0];
    canvas.imageSmoothingEnabled = true;
    canvas.includeDefaultValues = true;
    canvas.interactive = true;
    canvas.isDrawingMode = false;
    canvas.moveCursor = cursors[0];
    canvas.notAllowedCursor = "not-allowed";
    canvas.overlayColor = "";
    canvas.overlayImage = null;
    canvas.overlayVpt = true;
    canvas.perPixelTargetFind = false;
    canvas.preserveObjectStacking = true;
    canvas.renderOnAddRemove = true;
    canvas.selection = true;
    canvas.selectionBorderColor = "#18a0fb";
    canvas.selectionColor = "#18a0fb20";
    canvas.selectionDashArray = [];
    canvas.selectionFullyContained = true;
    canvas.selectionKey = "shiftKey";
    canvas.selectionLineWidth = 1;
    canvas.skipOffscreen = true;
    canvas.skipTargetFind = false;
    canvas.snapAngle = 0;
    canvas.snapThreshold = null;
    canvas.stateful = false;
    canvas.stopContextMenu = false;
    canvas.svgViewportTransformation = true;
    canvas.targetFindTolerance = 5;
    canvas.targets = [];
    canvas.uniformScaling = false;
    canvas.uniScaleKey = "shiftKey";
    canvas.viewportTransform = fabric.iMatrix.concat();
    canvas.vptCoords = {};

    canvas.setBackgroundColor({ source: "resources/images/canvas-background.png", repeat: "repeat" }, canvas.renderAll.bind(canvas));
    canvas.setZoom(1);
}

function initializeObject() {
    fabric.Object.prototype.NUM_FRACTION_DIGITS = 2;
    fabric.Object.prototype.angle = 0;
    fabric.Object.prototype.backgroundColor = "";
    fabric.Object.prototype.borderColor = "rgb(24, 160, 251)";
    fabric.Object.prototype.borderDashArray = null;
    fabric.Object.prototype.borderOpacityWhenMoving = 1;
    fabric.Object.prototype.borderScaleFactor = 3;
    fabric.Object.prototype.cacheProperties = (
        "fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform" +
        " strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath"
    ).split(" ");
    fabric.Object.prototype.centeredRotation = true;
    fabric.Object.prototype.centeredScaling = false;
    fabric.Object.prototype.clipPath = undefined;
    fabric.Object.prototype.colorProperties = "fill stroke backgroundColor".split(" ");
    fabric.Object.prototype.cornerColor = "rgb(255, 255, 255)";
    fabric.Object.prototype.cornerDashArray = null;
    fabric.Object.prototype.cornerSize = 12;
    fabric.Object.prototype.cornerStrokeColor = "rgb(24, 160, 251)";
    fabric.Object.prototype.cornerStyle = "circle";
    fabric.Object.prototype.dirty = true;
    fabric.Object.prototype.evented = true;
    fabric.Object.prototype.excludeFromExport = false;
    fabric.Object.prototype.fill = "rgb(0, 0, 0)";
    fabric.Object.prototype.fillRule = "nonzero";
    fabric.Object.prototype.flipX = false;
    fabric.Object.prototype.flipY = false;
    fabric.Object.prototype.globalCompositeOperation = "source-over";
    fabric.Object.prototype.hasBorders = true;
    fabric.Object.prototype.hasControls = true;
    fabric.Object.prototype.height = 0;
    fabric.Object.prototype.includeDefaultValues = true;
    fabric.Object.prototype.inverted = false;
    fabric.Object.prototype.left = 0;
    fabric.Object.prototype.lockMovementX = false;
    fabric.Object.prototype.lockMovementY = false;
    fabric.Object.prototype.lockRotation = false;
    fabric.Object.prototype.lockScalingFlip = true;
    fabric.Object.prototype.lockScalingX = false;
    fabric.Object.prototype.lockScalingY = false;
    fabric.Object.prototype.lockSkewingX = false;
    fabric.Object.prototype.lockSkewingY = false;
    fabric.Object.prototype.minScaleLimit = 0.1;
    fabric.Object.prototype.noScaleCache = false;
    fabric.Object.prototype.objectCaching = true;
    fabric.Object.prototype.opacity = 1;
    fabric.Object.prototype.originX = "left";
    fabric.Object.prototype.originY = "top";
    fabric.Object.prototype.padding = 10;
    fabric.Object.prototype.paintFirst = "fill";
    fabric.Object.prototype.perPixelTargetFind = true;
    fabric.Object.prototype.scaleX = 1;
    fabric.Object.prototype.scaleY = 1;
    fabric.Object.prototype.selectable = true;
    fabric.Object.prototype.selectionBackgroundColor = "";
    fabric.Object.prototype.shadow = null;
    fabric.Object.prototype.skewX = 0;
    fabric.Object.prototype.skewY = 0;
    fabric.Object.prototype.statefullCache = false;
    fabric.Object.prototype.stateProperties = (
        "top left width height scaleX scaleY flipX flipY originX originY transformMatrix " +
        "stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit " +
        "angle opacity fill globalCompositeOperation shadow visible backgroundColor " +
        "skewX skewY fillRule paintFirst clipPath strokeUniform"
    ).split(" ");
    fabric.Object.prototype.stroke = null;
    fabric.Object.prototype.strokeDashArray = [];
    fabric.Object.prototype.strokeDashOffset = 0;
    fabric.Object.prototype.strokeLineCap = "butt";
    fabric.Object.prototype.strokeLineJoin = "round";
    fabric.Object.prototype.strokeMiterLimit = 4;
    fabric.Object.prototype.strokeUniform = true;
    fabric.Object.prototype.strokeWidth = 1;
    fabric.Object.prototype.top = 0;
    fabric.Object.prototype.touchCornerSize = 24;
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.type = "object";
    fabric.Object.prototype.visible = true;
    fabric.Object.prototype.width = 0;

    fabric.Group.prototype.perPixelTargetFind = false;

    fabric.Object.prototype.setControlsVisibility({ mt: false, ml: false, mr: false, mb: false, mtr: false });
}

function initializeEventListeners() {
    document.getElementById("pointer-tool").addEventListener("click", activateTool);
    document.getElementById("pencil-tool").addEventListener("click", activateTool);
    document.getElementById("eraser-tool").addEventListener("click", activateTool);
    document.getElementById("text-tool").addEventListener("click", activateTool);
    document.getElementById("note-tool").addEventListener("click", activateTool);
    document.getElementById("shape-tool").addEventListener("click", activateTool);
    document.getElementById("image-tool").addEventListener("click", activateTool);
    document.getElementById("comment-tool").addEventListener("click", activateTool);

    document.getElementById("small-thickness").addEventListener("click", setPencilThickness);
    document.getElementById("medium-thickness").addEventListener("click", setPencilThickness);
    document.getElementById("large-thickness").addEventListener("click", setPencilThickness);

    document.getElementById("charcoal-color").addEventListener("click", setPencilColor);
    document.getElementById("red-color").addEventListener("click", setPencilColor);
    document.getElementById("yellow-color").addEventListener("click", setPencilColor);
    document.getElementById("green-color").addEventListener("click", setPencilColor);
    document.getElementById("blue-color").addEventListener("click", setPencilColor);
    document.getElementById("violet-color").addEventListener("click", setPencilColor);
    document.getElementById("white-color").addEventListener("click", setPencilColor);

    document.getElementById("rotate-clockwise-context").addEventListener("click", performContext);
    document.getElementById("rotate-anticlockwise-context").addEventListener("click", performContext);
    document.getElementById("copy-context").addEventListener("click", performContext);
    document.getElementById("paste-context").addEventListener("click", performContext);
    document.getElementById("bring-to-front-context").addEventListener("click", performContext);
    document.getElementById("send-to-back-context").addEventListener("click", performContext);
    document.getElementById("lock-unlock-context").addEventListener("click", performContext);
    document.getElementById("flip-horizontal-context").addEventListener("click", performContext);
    document.getElementById("flip-vertical-context").addEventListener("click", performContext);
    document.getElementById("delete-context").addEventListener("click", performContext);
    document.getElementById("properties-context").addEventListener("click", performContext);

    document.getElementById("toggle-sidebar-button").addEventListener("click", toggleSidebar);
    document.getElementById("sidebar-close-button").addEventListener("click", toggleSidebar);
    document.getElementById("reset-settings").addEventListener("click", resetSettings);
    document.getElementById("apply-settings").addEventListener("click", applySettings);
    document.getElementById("settings-button").addEventListener("click", openSettings);
    document.getElementById("zoom-out-button").addEventListener("click", setZoom);
    document.getElementById("zoom-level-text").addEventListener("click", setZoom);
    document.getElementById("zoom-in-button").addEventListener("click", setZoom);

    document.querySelector("body").addEventListener("contextmenu", openContextMenu);
    document.querySelector("body").addEventListener("mousedown", closeContextMenu);

    var settingsInput = document.getElementsByClassName("settings-input");
    for (var i = 0; i < settingsInput.length; i++) settingsInput[i].addEventListener("keypress", validateSettingsInput);
}
function initializeCanvasListeners() {
    resizeCanvas();
    window.onresize = function () {
        resizeCanvas();
    };

    fabric.Object.prototype.on("selected", function (options) {
        options.target.perPixelTargetFind = false;
    });
    canvas.on("selection:cleared", function (options) {
        if (options.deselected != null) {
            options.deselected.forEach((target) => {
                target.perPixelTargetFind = true;
            });
        }
    });

    canvas.on("mouse:wheel", function (options) {
        if (options.e.ctrlKey === false) return;

        var delta = options.e.deltaY;
        var zoom = canvas.getZoom();
        zoom *= 0.999 ** delta;
        if (zoom > 4) zoom = 4;
        if (zoom < 0.1) zoom = 0.1;
        var zoomPercent = Math.round(zoom * 100);

        canvas.zoomToPoint({ x: options.e.offsetX, y: options.e.offsetY }, zoom);
        document.getElementById("zoom-level-text").innerHTML = zoomPercent.toString() + "%";
        options.e.preventDefault();
        options.e.stopPropagation();
    });

    // Bug: Doesnot work correctly for pencil-tool, since drawing mousedown events are disturbed.
    // Therefore, explicitly disabled for pencil-tool. The fix to interchange between pointer-tool also doesnot work.
    // But is left inside for future reference.

    canvas.on("mouse:down", function (options) {
        if (currentTool === "pencil-tool") return;
        if (currentTool === "pencil-tool") {
            this.isPencilTool = true;
            activateTool(undefined, "pointer-tool");
        }
        if (spaceKey) {
            this.isDragging = true;
            canvas.selection = false;
            canvas.isDrawingMode = false;
            this.lastPosX = options.e.clientX;
            this.lastPosY = options.e.clientY;
            canvas.setCursor(cursors[8]);
            canvas.requestRenderAll();
        }
    });

    canvas.on("mouse:move", function (options) {
        if (this.isDragging) {
            var vpt = canvas.viewportTransform;
            vpt[4] += options.e.clientX - this.lastPosX;
            vpt[5] += options.e.clientY - this.lastPosY;
            canvas.requestRenderAll();
            this.lastPosX = options.e.clientX;
            this.lastPosY = options.e.clientY;
        }
    });

    canvas.on("mouse:up", function (options) {
        this.isDragging = false;
        canvas.selection = true;
        if (this.isPencilTool) activateTool(undefined, "pencil-tool");
        if (currentTool === "pencil-tool") canvas.isDrawingMode = true;
        canvas.defaultCursor = cursors[tools.indexOf(currentTool)];
        canvas.hoverCursor = cursors[tools.indexOf(currentTool)];
        this.setViewportTransform(this.viewportTransform);
    });

    canvas.on("object:moving", function (options) {
        options.target.set({
            left: Math.round(options.target.left / snap) * snap,
            top: Math.round(options.target.top / snap) * snap,
        });
    });
}

function initializeShortcuts() {
    document.onkeydown = function (event) {
        if (!isSidebarOpen) {
            if ((event.ctrlKey && event.key === "k") || (event.ctrlKey && event.key === "K")) {
                performContext(undefined, "rotate-clockwise-context");
            } else if ((event.ctrlKey && event.key === "l") || (event.ctrlKey && event.key === "L")) {
                performContext(undefined, "rotate-anticlockwise-context");
            } else if ((event.ctrlKey && event.key === "c") || (event.ctrlKey && event.key === "C")) {
                performContext(undefined, "copy-context");
            } else if ((event.ctrlKey && event.key === "v") || (event.ctrlKey && event.key === "V")) {
                performContext(undefined, "paste-context");
            } else if (event.key === "]") {
                performContext(undefined, "bring-to-front-context");
            } else if (event.key === "[") {
                performContext(undefined, "send-to-back-context");
            } else if ((event.ctrlKey && event.key === "m") || (event.ctrlKey && event.key === "M")) {
                performContext(undefined, "lock-unlock-context");
            } else if ((event.ctrlKey && event.key === "h") || (event.ctrlKey && event.key === "H")) {
                performContext(undefined, "flip-horizontal-context");
            } else if ((event.ctrlKey && event.key === "j") || (event.ctrlKey && event.key === "J")) {
                performContext(undefined, "flip-vertical-context");
            } else if (event.key === "Delete") {
                performContext(undefined, "delete-context");
            } else if (event.key === "F1") {
                performContext(undefined, "properties-context");
            } else if (event.key === "1") {
                activateTool(undefined, "pointer-tool");
            } else if (event.key === "2") {
                activateTool(undefined, "pencil-tool");
            } else if (event.key === "3") {
                activateTool(undefined, "eraser-tool");
            } else if (event.key === "4") {
                activateTool(undefined, "text-tool");
            } else if (event.key === "5") {
                activateTool(undefined, "note-tool");
            } else if (event.key === "6") {
                activateTool(undefined, "shape-tool");
            } else if (event.key === "7") {
                activateTool(undefined, "image-tool");
            } else if (event.key === "8") {
                activateTool(undefined, "comment-tool");
            } else if (event.key === " ") {
                spaceKey = true;
            }
            event.preventDefault();
            event.stopPropagation();
        } else if (isSidebarOpen) {
            if (event.key === "Escape") document.activeElement.blur();
            if (document.activeElement.parentNode.className === "settings-row") return;

            if (event.key === "g" || event.key === "G") {
                document.getElementById("grid-snap").focus();
            } else if (event.key === "r" || event.key === "R") {
                document.getElementById("rotate-snap").focus();
            } else if (event.key === "p" || event.key === "P") {
                document.getElementById("paste-offset").focus();
            } else if (event.key === "s" || event.key === "S") {
                document.getElementById("small-thickness").focus();
            } else if (event.key === "m" || event.key === "M") {
                document.getElementById("medium-thickness").focus();
            } else if (event.key === "l" || event.key === "L") {
                document.getElementById("large-thickness").focus();
            }
            event.preventDefault();
            event.stopPropagation();
        }
    };

    document.onkeyup = function (_event) {
        spaceKey = false;
    };
}
