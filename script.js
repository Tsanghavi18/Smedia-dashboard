var slidebarOpen = false;
var slidebar = document.getElementById("slidebar");

// FOR CREATE RESPONSIVE WEB PAGE

function openSlidebar(){
    if (!slidebarOpen) {
        slidebar.classList.add("slidebar-responsive");
        slidebarOpen = true;
    }
}

function crossSlidebar(){
    if (slidebarOpen) {
        slidebar.classList.remove("slidebar-responsive");
        slidebarOpen = false;
    }
}