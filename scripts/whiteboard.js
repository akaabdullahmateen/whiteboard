const cursors = [
    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADU0lEQVRYR+1WX0hTURy+m23ZKtqiMMcg3xIf9KFXwQn+wyXYBoIzH6qnQaGGa4tE1mNhU1HRQiIRkkz0wURww2STIMhoKM6QQS50rtpyZa255fp+4xprbOOaM33wwMe999zD+X3n+32/cw6P2ePG2+P4zL4kQKTC/0uZaAXoPW1tbe3ixMSEtaqqyovvELC5m2SiCfARKN3j8RhEItG1paWlW9nZ2Y/Q95MlsiuqRBNIQ6Djo6OjioKCgsc+n4/h8/nv7Hb79aKiolf4FwB+pVqNWAXEZWVl58bHx1/yeDzGYDAwjY2NQbfbPTgwMHC7qalpFQSCqUxLrAdOYHKZ1+u1KpVK8dTUFJOVlcV0dHQEoUJoN9ISW4bHQEC6uLj4pKur63xbW9sfxeVyOdPf3x8UCAT2ubm5+lSlJZbAEUTMmJycvLm8vHyltrb2cGzOkZZNrVYbcrlcD4aGhlr0er0bYzb+tXRjCQgw0enu7m4ljHg3JydHFM90lJbOzs5Afn7+utPp1Obm5j5jq4VMuq1qiSVAlSABzobD4dcSiYTBvpDQ+JWVlQxSFRAKhfNms/lqdXX1AqsG52qJtxVHjIgUmGtqas6QEZM18sbIyAgjFosZ7CH3ZmZm7peWln7iqkQ8AkfJiDDaQ+RYTqUY3Uh+pIdBlQQLCwt5gUDAv7Ky8hbBX/T19Q0C7zHez7VU4xFIZ42o8/v9lxUKBX1HWl1dXRiVwbPZbAsOh+ONyWSy9fT0zOOXD/AAn4GvAG1anLwQjwAZ8RSMqKqoqGiRyWSRSqCVz87OBhsaGu709vba2KDf8fzBrpieBApOZwinFo8AnQkngb+MOD09vQFFnhcXF7fjH+WYVk3BqARpd6SgO66CLdYRIyK3JrVanZmXlxfW6XSrUqlUjf4PrNSU5x2flokuJGTETDjaCNkvqFSqUHNz843W1lYz+l3AOrtaTjInG5SIAOU9Y2xsTFNeXq63WCxP4fwW9DmBL6zkOw5OEyQicIh8YDQa5RqNpr2kpOSS1Wp1oO8jQNJzcjgXhokIkBHpYBIPDw/LUfMWvNOW+C1V0m+RS3YppTQQhAA5nW5G9ExpS0aAVNgC3Qu3XWJcmO7LazkX4ikbc6DAgQJ7rsBv/uZLMKK2l1sAAAAASUVORK5CYII=") 5 6, auto',
    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAWFJREFUOBHFkb9Og1AUxgsxTTpQHXwBmZrUB0AGxj6EA4tDYSAEGR2gOrgQjAOLgyaGWKOP4OgCjEajz2AT0hlC8DsN14C1tE6e5Mv9c77z45xLp/OHKMuyC+1D/XoZXz+07VG4jfxJHMd6nucuzntt/qUcCgRoYhjGPZKlJEnPWZZdbAyCsQ9ZYRheEYCpAvmUX/pq/QKGRQe+71+naRqMRqMnBqE1SZIAnmG9prGvAK5pmosRRFF8q4NoNHgcqNsoZIcK4FiWNcXd9wgMRKPBM4F+H2UVgME8z7uB53gtwLbtO1ZUX3Vdf0DxKUS/ezmQoEd0/g9APaGDI9d1b2n7U5qmtY9QAbaKorgUBGHWAtgh78pAF8MoigIYGl2Mx+NH5M6gdgCRYTqkV2eQXq83p8fdGIBCDuZzRVEOBoPBTFXVT1mWC57n35Gbchw3x7o2CGLDtQu9Qi/QB4pzrBvHF5WKOd6JupulAAAAAElFTkSuQmCC") 1 16, auto',
    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAYAAAAyhueAAAAAAXNSR0IArs4c6QAAAShJREFUOBGl1D9vgkAYBnBJ2gm+AIO68wUYCKsLgx+FmaWDH4CpXZw7dHVzbBPXrmwd3DUhYSMm+Dy2r96h6Hvpmxx3cHc/7h+MRoroum7Stm2ZpuknmndMvu/vq6p6Rd1cQdhNboH/ggGOkRZ5nn8I1M+dRgxsyikXRfFe1/VbFEXffVDuVbCAsoZxHG8c4BleZkcfRO1pYzRwGIY/6F9a4hCohbMsW8N4OaOPwEdwkiRf3AM4kxOqBYdgA5wKeHWwpfO9XNaYx+1vhL8gVa4B1+IeMFTH44b+i/OUCTLwoOSuseiSjCmP6VgBdMZvmAcYFSrYAC9TtlRK+CloYRUoL9DATmAfDoLgailcwCcBmXuet8KID03T8PaZFyN2KC/RZms8u1k8AtI5oxbYHqdGAAAAAElFTkSuQmCC") 8 16, auto',
    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAHNJREFUKBVjZMAB/v//nwOU0gXiy4yMjFOwKWPCJggV0wVqSgOyQQZgBfg0Y9WALDhENbMghSqyd1DYQDUzUQQgnMsMUIn/QD5JGKSPBajpMpAxC4vJDKCowiUH0odND1gM5iIojVXdEI0qmjkbFgs4QxUAKIs4pK0BP5EAAAAASUVORK5CYII=") 8 8, auto',
    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAYAAACzK0UYAAAAAXNSR0IArs4c6QAAAnZJREFUSA2dVb+PEkEYZWFPXDGQkJMCEnNHrIzG2FLSEHOxorMyFtZUNiR2Jv4D9tYkgh6BhsqSEKWgkBASjqyEsHdKyOEBHsf63h5zt7c/zmO/5DEz33zfe/PNzA6S79LKl11PvRfIOnbKlNdOCa2+Wq32JEnyOwVe5/P7/fu6rs/dYgRhAAHLxWLhGuhGQD8EmE84GkVYBQNOJ5PJiWPUf5yBgMEvdsUWLSrhxGQ8HjvuqS3L4ggGgyu4FIv7YmgWORwMBp5EotHoKRi3L1gtHYroa2i9Xs+TSCKRIEcM4NbbTFTCoMNOp/PHFnEDRyqVCiLsvluoWURrNpueblc6nWYVj91EhJ/X41E8Hud939jm8/kJDv8TOKKC0NyaK/k5HA4Ds9ls42sMASWbzXLLn5vJrX0e2B3gQ6VSaW5cChJGo5EWCoUK4HhoJReV0M+73ioWi0Nr0E3GsVjsXrVa3VEU5S3iXwI7gM224HkSDoereMOWXqphjqqqB5FIhBXtA68B4zlAaxgHYeBjqVT6tokInqPjQqHQyGQyn2VZ/gKON8AuYJj542GfT0MmmUy+6na7z/AiX1nFeYrPp2na73q9rpbL5VGtVjvr9/syFtXF/HfgK8AtnwFngO0LvQUfq3mfz+d3c7ncU4gdtVqtX/iGpo1G42+73d6aTqdLxKhAD/gBUGCxBsn5UXPMc7aJ8CLwlj0A3gHGS4D2CNAArvAA4JirpBjfLSdQgPk2EW4ZL8BdgBWxMhoTSCqISS4gfCKGxAY5WsPMZyJ8rIbktwH+RzBBEJhb9gXQvUpMhzAnEc5RiIfOebEyEtLEKkV77r3m9x+Jx6X1b5kpfgAAAABJRU5ErkJggg==") 11 10, auto',
    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAHNJREFUKBVjZMAB/v//nwOU0gXiy4yMjFOwKWPCJggV0wVqSgOyQQZgBfg0Y9WALDhENbMghSqyd1DYQDUzUQQgnMsMUIn/QD5JGKSPBajpMpAxC4vJDKCowiUH0odND1gM5iIojVXdEI0qmjkbFgs4QxUAKIs4pK0BP5EAAAAASUVORK5CYII=") 8 8, auto',
    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAHNJREFUKBVjZMAB/v//nwOU0gXiy4yMjFOwKWPCJggV0wVqSgOyQQZgBfg0Y9WALDhENbMghSqyd1DYQDUzUQQgnMsMUIn/QD5JGKSPBajpMpAxC4vJDKCowiUH0odND1gM5iIojVXdEI0qmjkbFgs4QxUAKIs4pK0BP5EAAAAASUVORK5CYII=") 8 8, auto',
    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAAAXNSR0IArs4c6QAAAUpJREFUOBHtlL1KA0EURrP+oXaCKNjYqb3gG/g2Nun0BcQujQ+QLl2axWaxEWz1NUSRlCr+JJ6zzMxuAgGzphIvnJ1v7sz99s6yu1mrikPkCWxWqZnUM7sv4W6yqlsUxe2oYViLYXfSdJHEVUPPVKYH6NVagCxMyoTJX4QekmlsOEZdJhpekk80s+t5RekVjedlmnz+jf/IoxjkeX6fzjKjCLWDepnv3SocQx9u6rTb7ev0zQZhrr4naGv10Ct9F8tMNmAX9mAfDuAIenXzYNoLa+5xrzXW6qFXcvZ9XgHvthTy3lXtb/QUwy3GVqfTeWK4AH+TnzAKqN/gHYapZSaaR5Dp57SG3oEzk8Q5PMArfIHGxrBG6rhcmbh4U/Fo67ANxiO8wAfEbpHjUe94fKWaeQofSfnsGDX02HY4NX5ibHHsXj21SxdjfAP3G9UrnSAAFAAAAABJRU5ErkJggg==") 11 17, auto',
    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACfElEQVRYR+2WzYtSURjGvc2tLAyrYaQIISIKrEBnVrMWURf6BzSlSBBB0B/QIle29C+YQN26E/FjEBezmsWABBVEEZGOlGD5VVLdsueJcyFivB/eATf3wI/jOOe+73Oe95z3KjmWPKQl53fYAmwHbAdsBxZ1YAUNTBZN7DfmX4Cz6WFGwDFEZ+ITwANKwAuegDz4Dn4KMYaFGBXA5Ex8DzwFY6/XO8zlcq5gMHhe7P4l5i3QAz+MumJUwHEEdIN3zWZzkEgkpoFAQCmVSj5JkhyNRuMglUoN2+0215wBj8EzIUSzNEYFnBK2v5/NZo5YLPYas1Qul69RAL+Lx+OvWq2WnM/nnXDlHNZfAUNRlrklMSKAa7izS+AFk8GBt4xYKBSuyrI8VBTFnUwm3+CrGQT8FYVxWZRjqnUg9ASotb+NIA/BOgXoDSHgOtZ1wcSKAB68G2A3m812YLGEXTOw5hACfFjUAWMrAk7jYT/YwRiFQqGLesn5/6MWsIaYD8CjWq02CYfD7AFzBxzq4DzwEG6Ag6MowVkE4QFMgvvVanUSiUQo6tDBG4Lb8UGI/oj5m5US8BDyCrLZ0P4t2HsHIpTDnKjX6z2Ic2HdXbAH+oAdcu7QuwV8kO2XImjrBbAJEeloNNrPZDIev9/vRkfsFovFr5VKhU6lQRlw9zyAfE9YEqCKcOIDy0H7bwG25ZtgFdDmfbANnoNPYAA0d8/ARhxQ1bMcJwFbLUtCR/iZbVoRu/2C+TMYieS6b0gzAlTB7A10g1eUM0tEm7lbOsHOx7eibnKzDqhOcFZ/D3DmJtgeKYJOaNb83yBWBPwfZ+G/zZZg4UTzHrQFLN2BPzCCtiGLvnHpAAAAAElFTkSuQmCC")15 15,auto',
];

const tools = ["pointer-tool", "pencil-tool", "eraser-tool", "text-tool", "note-tool", "shape-tool", "image-tool", "comment-tool"];

function restoreSettings() {
    const _pencilThickness = "small-thickness";
    const _pencilColor = "charcoal-color";

    if (_pencilThickness) pencilThickness = _pencilThickness;
    else pencilThickness = "small-thickness";
    if (_pencilColor) pencilColor = _pencilColor;
    else pencilColor = "charcoal-color";
}

function setZoom(e) {
    var zoom;
    switch (e.currentTarget.id) {
        case "zoom-level-text":
            zoom = 1;
            break;
        case "zoom-out-button":
            zoom = canvas.getZoom() - 0.1;
            break;
        case "zoom-in-button":
            zoom = canvas.getZoom() + 0.1;
            break;
        default:
            zoom = 1;
    }
    canvas.setZoom(zoom);

    var zoomPercent = Math.round(zoom * 100);
    document.getElementById("zoom-level-text").innerHTML = zoomPercent.toString() + "%";
}

function resizeCanvas() {
    const headerHeight = 50;
    canvas.setDimensions({ width: window.innerWidth, height: window.innerHeight - headerHeight });

    const contextMenu = document.getElementById("context-menu-id");
    contextMenu.style.visibility = "hidden";
}
