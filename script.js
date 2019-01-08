//BURGERMENU
//registrer klik på menu - knap
window.addEventListener("load", sidenVises);
//document.querySelector(".menuknap1").addEventListener("click", toggleMenu)

function sidenVises() {
    console.log("sidenVises");
    document.querySelector(".navtopmobil").classList.add("hidden");
    document.querySelector(".menuknap1").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("Toggle menu");
    document.querySelector(".navtopmobil").classList.toggle("hidden");

    let erSkjult =
        document.querySelector(".navtopmobil").classList.contains("hidden");
    if (erSkjult == true) {
        document.querySelector(".menuknap1").textContent = "☰";
        //menuen er nu skjult - ændre menuknap til tre streger
    } else {
        //menuen er nu vist - ændre menuknap til X
        document.querySelector(".menuknap1").textContent = "✕";
    }
}
