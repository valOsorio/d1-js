const precio = 400000;
const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let cantidad = document.querySelector(".cantidad");
let totalAPagar = document.querySelector(".valor-total");
const btnAgregar = document.querySelector("#agregar");
const btnDisminuir = document.querySelector("#disminuir");

let unidades = Number(0);

btnAgregar.addEventListener("click", () => {
  cantidad.innerHTML = unidades = unidades + 1;
  totalAPagar.innerHTML = precio * unidades;
});

btnDisminuir.addEventListener("click", () => {
  if (unidades > 0) {
    cantidad.innerHTML = unidades = unidades - 1;
    totalAPagar.innerHTML = precio * unidades;
  } else {
    unidades = 0;
    alert("La cantidad debe ser mayor a 0");
  }
});
