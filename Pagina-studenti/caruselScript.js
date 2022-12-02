const slideShowImages = document.querySelectorAll(".imgSlide");

const nextImageDelay = 3000;
let currentImageCounter = 0;
slideShowImages[currentImageCounter].style.display = "block";

setInterval(nextImage,nextImageDelay);
function nextImage(){
  slideShowImages[currentImageCounter].style.display = "none";
  currentImageCounter = (currentImageCounter + 1) % slideShowImages.length;
}