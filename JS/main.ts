const btn: any = document.querySelector(".navbar-toggler");
function addClass() {
  const element: any = document.querySelector(".boton-menu");
  element.classList.add("icono-cerrar");
  if (element) {
    btn.addEventListener("click", () => {
      removeClass();
    });
  }
}

function removeClass() {
  const element: any = document.querySelector(".boton-menu");
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
