const stpBtn = document.getElementById("stp-btn")

stpBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    }
       
    )         
})


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