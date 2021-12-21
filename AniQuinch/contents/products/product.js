const sidebr = document.querySelector("#sidebar-container");
const men = document.querySelector("#menu");
var toggleMenu = true;

men.addEventListener('click', function(){
    if(toggleMenu == true)
    {
        sidebr.style.left = "0px";
    }
    else
    {
        sidebr.style.left = "-350px";
    }
    toggleMenu = !toggleMenu;
})