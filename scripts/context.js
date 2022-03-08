function openContextMenu(event) {
    const contextMenu = document.getElementById("context-menu-id");
    targets = canvas.findTarget(event, false);
    if (targets !== undefined) canvas.setActiveObject(targets);
    canvas.renderAll();

    document.getElementById("rotate-clockwise-context").disabled = targets === undefined ? true : false;
    document.getElementById("rotate-anticlockwise-context").disabled = targets === undefined ? true : false;
    document.getElementById("copy-context").disabled = targets === undefined ? true : false;
    document.getElementById("paste-context").disabled = _clipboard === undefined ? true : false;
    document.getElementById("bring-to-front-context").disabled = targets === undefined ? true : false;
    document.getElementById("send-to-back-context").disabled = targets === undefined ? true : false;
    document.getElementById("lock-unlock-context").disabled = targets === undefined ? true : false;
    document.getElementById("flip-horizontal-context").disabled = targets === undefined ? true : false;
    document.getElementById("flip-vertical-context").disabled = targets === undefined ? true : false;
    document.getElementById("delete-context").disabled = targets === undefined ? true : false;

    var x = (contextMenuX = isSidebarOpen ? event.clientX - 340 : event.clientX);
    var y = (contextMenuY = event.clientY);

    if (canvas.height < y + 300) y = canvas.height - 300;
    if (canvas.width < x + 250) x = canvas.width - 250;

    contextMenu.style.top = y + "px";
    contextMenu.style.left = x + "px";
    contextMenu.style.visibility = "visible";

    event.preventDefault();
    event.stopPropagation();
}

function closeContextMenu(event) {
    const contextMenu = document.getElementById("context-menu-id");

    if (!contextMenu.contains(event.target)) {
        contextMenu.style.visibility = "hidden";
    }
}

function performContext(e, context = undefined) {
    if (context === undefined) context = e.currentTarget.id;
    switch (context) {
        case "rotate-clockwise-context":
            if (canvas.getActiveObject() == null) break;
            canvas.getActiveObject().rotate(canvas.getActiveObject().angle + rotateAngle);
            break;
        case "rotate-anticlockwise-context":
            if (canvas.getActiveObject() == null) break;
            canvas.getActiveObject().rotate(canvas.getActiveObject().angle - rotateAngle);
            break;
        case "copy-context":
            if (canvas.getActiveObject() == null) break;
            canvas.getActiveObject().clone(function (cloned) {
                _clipboard = cloned;
            });
            break;
        case "paste-context":
            if (_clipboard === undefined) break;
            _clipboard.clone(function (cloned) {
                canvas.discardActiveObject();
                var x;
                var y;
                if (e === undefined) {
                    x = cloned.left + pasteOffset;
                    y = cloned.top + pasteOffset;
                } else {
                    x = contextMenuX;
                    y = contextMenuY - 50;
                }
                cloned.set({
                    left: x,
                    top: y,
                    evented: true,
                });
                if (cloned.type === "activeSelection") {
                    cloned.canvas = canvas;
                    cloned.forEachObject(function (obj) {
                        canvas.add(obj);
                    });
                    cloned.setCoords();
                } else {
                    canvas.add(cloned);
                }
                _clipboard.top += pasteOffset;
                _clipboard.left += pasteOffset;
                canvas.setActiveObject(cloned);
                canvas.requestRenderAll();
            });
            break;
        case "bring-to-front-context":
            if (canvas.getActiveObject() == null) break;
            canvas.getActiveObject().bringToFront();
            break;
        case "send-to-back-context":
            if (canvas.getActiveObject() == null) break;
            canvas.getActiveObject().sendToBack();
            break;
        case "lock-unlock-context":
            if (canvas.getActiveObject() == null) break;
            canvas.getActiveObject().toggle("lockMovementX");
            canvas.getActiveObject().toggle("lockMovementY");
            canvas.getActiveObject().toggle("lockRotation");
            canvas.getActiveObject().toggle("lockScalingX");
            canvas.getActiveObject().toggle("lockScalingY");
            canvas.getActiveObject().toggle("lockSkewingX");
            canvas.getActiveObject().toggle("lockSkewingY");
        case "flip-horizontal-context":
            if (canvas.getActiveObject() == null) break;
            canvas.getActiveObject().toggle("flipX");
            break;
        case "flip-vertical-context":
            if (canvas.getActiveObject() == null) break;
            canvas.getActiveObject().toggle("flipY");
            break;
        case "delete-context":
            if (canvas.getActiveObject() == null) break;
            var activeObject = canvas.getActiveObject();
            if (activeObject.type === "activeSelection") {
                activeObject.canvas = canvas;
                activeObject.forEachObject(function (obj) {
                    canvas.remove(obj);
                });
            } else {
                canvas.remove(activeObject);
            }
            canvas.discardActiveObject();
    }

    canvas.requestRenderAll();
    document.getElementById("context-menu-id").style.visibility = "hidden";
}
