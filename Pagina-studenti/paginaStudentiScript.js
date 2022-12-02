function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function toggleFunction() {
    var x = document.getElementById("toggleDIV");
    if (x.style.display == "none") {
        // daca elementul nu este vizibil -> se afiseaza
        x.style.display = "block";
    } else {
        // daca elementul este vizibil -> se ascunde
        x.style.display = "none";
    }
}

// functie pentru carusel 

