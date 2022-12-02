let slideIndexM = 0;
showSlidesM();

function showSlidesM() {
  let i;
  let slides = document.getElementsByClassName("mySlidesM");
  let dots = document.getElementsByClassName("dotM");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndexM++;
  if (slideIndexM > slides.length) {slideIndexM = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexM-1].style.display = "block";  
  dots[slideIndexM-1].className += " active";
  setTimeout(showSlidesM, 3000); // Change image every 2 seconds
}