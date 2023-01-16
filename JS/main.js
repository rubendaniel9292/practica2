"use strict";
const btn = document.querySelector(".navbar-toggler");
function addClass() {
    const element = document.querySelector(".boton-menu");
    element.classList.add("icono-cerrar");
    if (element) {
        btn.addEventListener("click", () => {
            removeClass();
        });
    }
}
function removeClass() {
    const element = document.querySelector(".boton-menu");
    element.classList.remove("icono-cerrar");
    if (element) {
        btn.addEventListener("click", () => {
            addClass();
        });
    }
}
btn.addEventListener("click", () => {
    addClass();
});
