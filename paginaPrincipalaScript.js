//functie pentru formular

function showForm() {
  document.getElementById("myForm").style.display = "block";
}

function hideForm() {
  document.getElementById("myForm").style.display = "none";
  alert("Formular trimis. Va vom raspunde in cel mai scurt timp")
}


//functie pentru colectiv

function showColectiv() {
    var x = document.getElementById("ourColectiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

