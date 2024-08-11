
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});


document.addEventListener('mousedown', function(event) {
    if (event.button === 2 || event.button === 1) {
        event.preventDefault();
    }
});


document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && ['KeyA', 'KeyS', 'KeyC', 'KeyX', 'KeyU','keyF12'].includes(event.code)) {
        event.preventDefault();
    }
});


document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.code === 'F12') {
        event.preventDefault();
    }
});