// Carousel Function
const carousel = document.querySelector("#carousel");
const images = document.querySelectorAll(".carousel img");
const btn1 = document.querySelector("#button1");
const btn2 = document.querySelector("#button2");
var About = document.querySelector("#About");
const size = images[0].clientWidth;
let counter = 0;

btn1.addEventListener('click', function(){
    if(counter <= 0) return;
    carousel.style.transition = "transform 1s ease-in-out";
    counter--;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
btn2.addEventListener('click', function(){
    if(counter >= images.length - 1) return;
    carousel.style.transition = "transform 1s ease-in-out";
    counter++;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});