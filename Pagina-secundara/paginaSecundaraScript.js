/*var slideIndex = 1;
// invocare functie
showSlides(slideIndex);

// next & prev controls
function plusSlides(n){
    // daca apas prev -> slideIndex += -1 -> slideIndex -1
    // daca apas next -> slideIndex += 1 -> slideIndex +1
    showSlides(slideIndex += n)
}

// dots image controls
function currentSlide(n){
    // daca primesc currentSlide(1) => sunt pe slide-ul 1
    // daca primesc currentSlide(2) => sunt pe slide-ul 2
    // daca primesc currentSlide(3) => sunt pe slide-ul 3
    // daca primesc currentSlide(4) => sunt pe slide-ul 4
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    // Se iau toate elementele HTML ce au ca si clasa "slideshow-item"
    var slides = document.getElementsByClassName("slideshow-item")
    
    // Se iau toate elementele HTML ce au ca si clasa "dot"
    var dots = document.getElementsByClassName("dot")

    // primul caz: daca numarul curent este mai mare decat lungimea totala, se reia de la inceput (index = 1)
    // n = numar curent
    // slides.length = lungimea totala
    if(n > slides.length){
        slideIndex = 1;
    }

    // al doilea caz: daca numarul curent este mai mic decat lungimea totala, se reia de la final (index = slides.length)
    // slides.length = lungimea totala = finalul
    if(n < 1){
        slideIndex = slides.length;
    }

    // "anulez" afisarea imaginilor (slideshow-item-urilor)
    for(i=0; i < slides.length; i++){
        // pentru fiecare element din slides, display-ul va fi setat "none" (nu se va afisa)
        slides[i].style.display = "none";
    }

    // "anulez" afisarea punctelor (butoanele de jos) (dot)
    for (i = 0; i < dots.length; i++){
        // pentru fiecare element "dot", acesta nu va fi activat / selectat
        // inlocuiesc clasa de css "active" cu nimic ""
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}*/
/*
const slideshowImages = document.getElementsByClassName("slideImage");

const nextImageDelay = 3000;
let currentImageCounter = 0;

//slideshowImages[currentImageCounter].style.opacity = 1;
slideshowImages[currentImageCounter].style.display = "block";

setInterval(nextImage, nextImageDelay);

function nextImage() {
   //slideshowImages[currentImageCounter].style.opacity = 0;
    slideshowImages[currentImageCounter].style.display = "none";
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    //slideshowImages[currentImageCounter].style.opacity = 1;
    slideshowImages[currentImageCounter].style.display = "block";

}*/
