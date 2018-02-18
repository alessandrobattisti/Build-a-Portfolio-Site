
//////////////////////////// NAVBAR ///////////////////////////

const menu = document.querySelector('#menu');
const main = document.querySelector('main');
const drawer = document.querySelector('.nav');
menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
});
main.addEventListener('click', function() {
    drawer.classList.remove('open');
});

//////////////////////////// HERO SLIDER ///////////////////////////
//Code inspired by https://www.w3schools.com/w3css/w3css_slideshow.asp

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const heroes = document.getElementsByClassName("hero");
let slide = 0;
function show_heroes(n){
    slide += n;
    if ( slide >= heroes.length ) { slide = 0; }
    else if ( slide < 0 ) { slide = heroes.length-1; }
    for ( let x = 0; x < heroes.length; x++ ){
        if ( x == slide ){
            heroes[x].style.display = 'block';
            window.setTimeout(function(){
                heroes[x].style.opacity = 1;
            },100);
        }else{
            heroes[x].style.display = 'none';
            heroes[x].style.opacity = 0;
        }
    }
}
leftArrow.addEventListener('click', function(){
    show_heroes(-1);
});
rightArrow.addEventListener('click', function(){
    show_heroes(1);
});
show_heroes(0);
