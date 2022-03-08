function toggleSidebar(event, id = undefined) {
    const sidebarWidth = "340px";
    const sidebar = document.getElementById("sidebar-id");

    isSidebarOpen ? (sidebar.style.width = "0px") : (sidebar.style.width = sidebarWidth);
    isSidebarOpen = !isSidebarOpen;

    var sidebarContainer = document.getElementById("sidebar-container-id");

    if (isSidebarOpen) {
        setTimeout(function () {
            sidebarContainer.style.visibility = "visible";
        }, 200);
    } else {
        sidebarContainer.style.visibility = "hidden";
    }

    if (id === undefined) id = "primary-sidebar-id";
    setSidebarVisible(id);
}

function setSidebarVisible(id) {
    const sidebars = ["primary-sidebar-id", "shapes-sidebar-id", "properties-sidebar-id", "settings-sidebar-id"];

    sidebars.forEach((item) => {
        document.getElementById(item).style.display = "none";
    });

    document.getElementById(id).style.display = "flex";
}

function openSettings() {
    const id = "settings-sidebar-id";

    if (!isSidebarOpen) toggleSidebar(undefined, id);
    else {
        setSidebarVisible(id);
    }

    document.getElementById("grid-snap").value = snap;
    document.getElementById("rotate-snap").value = rotateAngle;
    document.getElementById("paste-offset").value = pasteOffset;
    document.getElementById("small-thickness-input").value = smallThickness;
    document.getElementById("medium-thickness-input").value = mediumThickness;
    document.getElementById("large-thickness-input").value = largeThickness;
}

function resetSettings() {
    document.getElementById("grid-snap").value = 10;
    document.getElementById("rotate-snap").value = 10;
    document.getElementById("paste-offset").value = 10;
    document.getElementById("small-thickness-input").value = 4;
    document.getElementById("medium-thickness-input").value = 8;
    document.getElementById("large-thickness-input").value = 12;

    applySettings();
}

function applySettings() {
    snap = parseInt(document.getElementById("grid-snap").value);
    rotateAngle = parseInt(document.getElementById("rotate-snap").value);
    pasteOffset = parseInt(document.getElementById("paste-offset").value);
    smallThickness = parseInt(document.getElementById("small-thickness-input").value);
    mediumThickness = parseInt(document.getElementById("medium-thickness-input").value);
    largeThickness = parseInt(document.getElementById("large-thickness-input").value);
}

function validateSettingsInput(event) {
    var isError = false;
    var target = document.getElementById(event.target.id);

    if (event.which < 48 || event.which > 57) isError = true;
    if (target.value * 10 + event.which - 48 > 100) isError = true;
    if (event.key === "Return") isError = false;

    if (isError) {
        errorizeSettingsInput(target);
        event.preventDefault();
    }
}

function errorizeSettingsInput(target) {
    target.classList.add("error");
    setTimeout(function () {
        target.classList.remove("error");
    }, 150);
    setTimeout(function () {
        target.classList.add("error");
    }, 250);
    setTimeout(function () {
        target.classList.remove("error");
    }, 350);
}
