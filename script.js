//alert('hello world!');


// STICKY NAV BAR

//
//// When the user scrolls the page, execute myFunction
//window.onscroll = function () {
//    myFunction()
//};
//
//// Get the navbar
//var navbar = document.getElementById("navbar");
//
//// Get the offset position of the navbar
//var sticky = navbar.offsetTop;
//
//// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
//function myFunction() {
//    if (window.pageYOffset >= sticky) {
//        navbar.classList.add("sticky")
//    } else {
//        navbar.classList.remove("sticky");
//    }
//}


// BURGERMENU
// registrer klik på menu-knap
document.querySelector("#menuknap").addEventListener("click", toggleMenu)

function toggleMenu() {
    console.log("Toggle menu");
    document.querySelector("#navbar_mobil").classList.toggle("hidden");

    let erSkjult =
        document.querySelector("#navbar_mobil").classList.contains("hidden");
    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
        //menuen er nu skjult - ændre menuknap til tre streger
    } else {
        //menuen er nu vist - ændre menuknap til X
        document.querySelector("#menuknap").textContent = "✕";
    }



}
