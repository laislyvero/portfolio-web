var menuBtn = document.querySelector('.menu-btn');
var navlist = document.querySelector('.navlist');

menuBtn.onclick = function() {
    navlist.classList.toggle('active')
}