var isSidebarOpen = false;
var isPaintMenuOpen = false;
var pencilThickness;
var pencilColor;
var targets;
var eraserDown;
var _clipboard;
var currentTool;
var spaceKey;
var contextMenuX;
var contextMenuY;

// Options available in settings sidebar
var snap = 10;
var rotateAngle = 10;
var pasteOffset = 10;
var smallThickness = 4;
var mediumThickness = 8;
var largeThickness = 12;

var canvas = (this.__canvas = new fabric.Canvas("c"));

restoreSettings();
initialize();

var rect = new fabric.Rect({
    left: 600,
    top: 150,
    fill: "#F06292",
    stroke: "#880E4F",
    strokeWidth: 2,
    width: 200,
    height: 200,
});
var rect2 = new fabric.Rect({
    left: 900,
    top: 400,
    fill: "#F06292",
    stroke: "#880E4F",
    strokeWidth: 2,
    width: 200,
    height: 200,
});

canvas.add(rect);
canvas.add(rect2);
