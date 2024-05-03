const on = document.querySelector('#res');
const off = document.querySelector('#ser');
on.addEventListener("click", function() {
    const sidebar = document.querySelector('#sidebar')
    sidebar.style.display = 'flex';
});
off.addEventListener("click", function() {
    const sidebar = document.querySelector('#sidebar')
    sidebar.style.display = 'none';
});


// To stop everyone to steal code
window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
document.onkeydown = function(e) {
    if (e.keyCode == 123) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}