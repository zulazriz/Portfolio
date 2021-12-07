function toggle() {
    var navButton = document.querySelector('.menu');
    navButton.classList.toggle('active')
}

$(document).mouseup(function (e) {
    var container = $("header");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        document.querySelector('.menu').classList.remove('active');

    }
});
