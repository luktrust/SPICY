const stpBtn = document.getElementById("stp-btn")

stpBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    }
       
    )         
})

var counter =1    

setInterval(function() {
    document.getElementById('radio'+ counter).checked=true;
    counter++;

 if (counter>=4){
     counter=1;
 }
    
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




// const tttmony1 = document.querySelector(".tttmony1")
// const tttmony2 = document.querySelector(".tttmony2")
// const tttmony3 = document.querySelector(".tttmony3")
 
let i = 1

setInterval(function() {
    document.querySelector('#radio10').click();
   
    i++

 

    if(i>3){
        document.querySelector('#radio11').click();  
    }

    const buttons = document.querySelectorAll("[data-carousel2-button]")

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const offset = button.dataset.carousel2Button==="prev" ? 1 : -1;
            const slidess = button
            .closest("[data-carousel2]")
            .querySelector('[data-slides]')
    
            const activeSlide = slidess.querySelector("[data-active]")
            let newIndex = [...slidess.children].indexOf(activeSlide) + offset
    
            if(newIndex < 0) newIndex = slidess.children.length-1
            if(newIndex > slidess.children.length) newIndex = 1 
    
            slidess.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        })

  
})
    
}, 4000);

// contain.style.transform = `translateX(${-idx * 310 }px)`;