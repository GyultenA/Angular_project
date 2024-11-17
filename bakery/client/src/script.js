function stickyNav(){
    var headerHeigth = document.querySelector("main").offsetHeight /2;
    var navbar = document.querySelector('nav');
    var scrollValue = window.scrollY;

    if(scrollValue > headerHeigth){
        navbar.classList.add("header-sticky")
    } else {
        navbar.classList.remove("header-sticky")
    }
}

window.addEventListener("scroll", stickyNav)