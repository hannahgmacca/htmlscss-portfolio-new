function myFunction() {

    var x = document.getElementById("links");

    if (x.classList.contains("mobile-visible")){
        x.classList.remove("mobile-visible");
    } else {
        x.classList.add("mobile-visible");
    }
}