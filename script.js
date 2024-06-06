var mobilenav = document.getElementById('mobilenav');
var mobilemenu = document.getElementById('mobile-menu');

mobilenav.onclick = function(){
    if(mobilemenu.style.right == "-800px"){
        mobilemenu.style.right = "0";
        mobilenav.src = "images/icon-close.svg";
    }
    else{
        mobilemenu.style.right = "-800px";
        mobilenav.src = "images/icon-hamburger.svg";
    }
}