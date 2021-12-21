// Carousel Function
const carousel = document.querySelector("#carousel");
const images = document.querySelectorAll(".carousel img");
const btn1 = document.querySelector("#button1");
const btn2 = document.querySelector("#button2");
var About = document.querySelector("#About");
let counter = 0;

btn1.addEventListener('click', function(){
    if(counter <= 0) return;
    carousel.style.transition = "transform 1s ease-in-out";
    counter--;
    carousel.style.transform = 'translateX(' + (-1440 * counter) + 'px)';
});
btn2.addEventListener('click', function(){
    if(counter >= images.length - 1) return;
    carousel.style.transition = "transform 1s ease-in-out";
    counter++;
    carousel.style.transform = 'translateX(' + (-1440 * counter) + 'px)';
});

// Sidebar Function

const sidebar = document.querySelector("#sidebar-container");
const menu = document.querySelector("#menu");
var toggleMenu = true;

menu.addEventListener('click', function(){
    if(toggleMenu == true)
    {
        sidebar.style.left = "0px";
    }
    else
    {
        sidebar.style.left = "-350px";
    }
    toggleMenu = !toggleMenu;
})

// Navbar Scrolldown Function

const navbar = document.querySelector(".navigation-container");

window.addEventListener('scroll', function(){
    if(window.scrollY > 1000)
    {
        navbar.style.backgroundColor = "#f85d83";
        navbar.style.transition = ".75s";
        
    }
    else if(window.scrollY < 1000)
    {
        navbar.style.backgroundColor = "#fd709367";
        navbar.style.transition = ".75s";
    }
})

// Featured Products

const featuredTitle = document.querySelector(".featured-title")

window.addEventListener('scroll', function(){
    if(window.scrollY > 2000){
        featuredTitle.style.textShadow = "0px 0px 50px #FFFFFF, 0px 0px 50px #FFFFFF"
    }
    else if(window.scrollY < 2000)
    {
        featuredTitle.style.textShadow = "none"
    }
})

// About
const about = document.querySelector(".about")

window.addEventListener('scroll', function(){
    if(window.scrollY > 1000){
        about.style.marginTop = "10rem"
    }
    else if(window.scrollY < 1000)
    {
        about.style.marginTop = "5rem"
    }
})