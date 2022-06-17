// const first = document.querySelectorAll(".slide")

var counter =1    

setInterval(function() {
    document.getElementById('radio'+ counter).checked=true;
    counter++;

 if (counter>=4){
     counter=1;
 }
    
}, 3000);   

setTimeout(() => {
    
}, 3000);



    "use strict";

    const contain = document.querySelector('.contain');
    var section = document.querySelectorAll('section');
    const currentIndex = document.querySelector('.currentIndex');
    const totalIndex = document.querySelector('.totalIndex');
    const carousel = document.querySelector('.carousel')

    let idx = 1;
    let interval = setInterval(run, 2000);
    totalIndex.textContent = `${section.length}`

    function run() {
        idx++;
        changeImage();   
        interval
    }


function changeImage() {

    if (idx > section.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = section.length -1;
    } 

    contain.style.transform = `translateX(${-idx * 310 }px)`;
    currentIndex.textContent = `${idx+ 1 }`

}