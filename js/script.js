   /*QUESTIONS ACCORDION*/
   document.querySelectorAll('.question').forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const arrow = question.querySelector('.arrow');
        
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
          
        if (answer.style.display === 'block') {
            arrow.src = 'assets/images/up.svg';
            arrow.style.width = '30px';  
            arrow.style.height = '30px'; 
        } else {
            arrow.src = 'assets/images/down.svg';
            arrow.style.width = '30px';  
            arrow.style.height = '30px'; 
        }
    });
});

 /*SLIDER*/
 let currentSlide = 0;

 function moveSlide(direction) {
     const slides = document.querySelectorAll('.carousel .slide');
     const totalSlides = slides.length;
     currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
     document.querySelector('.carousel-slides').style.transform = `translateX(-${currentSlide * 100}%)`;
 }

  /*TOGGLED MENU ICON*/
  document.getElementById("navbarNav").addEventListener("click", function() {
    const stickyCard = document.getElementById("stickyCard");
    if (stickyCard.style.visibility === "hidden") {
      stickyCard.style.visibility = "visible";
    } else {
      stickyCard.style.visibility = "hidden";
    }
    console.log("Sticky card visibility:", stickyCard.style.visibility);
  });