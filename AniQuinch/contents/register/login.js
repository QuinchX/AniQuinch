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

// Login Function
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("login-button");

function register()
{
	x.style.left = "-400px";
	y.style.left = "50px";
	z.style.left = "110px";
}
function login()
{
	x.style.left = "50px";
	y.style.left = "450px";
	z.style.left = "0";
}