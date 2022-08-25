const burger = document.getElementById("burger");
const menu = document.getElementById("menuMobile");
const close = document.getElementById("close")

burger.addEventListener("click", () => {
     menu.style.display = "block";
     burger.style.display = "none";
     close.style.display = "block";
})

close.addEventListener("click", () => {
    menu.style.display = "none";
    burger.style.display = "block";
    close.style.display = "none";
})