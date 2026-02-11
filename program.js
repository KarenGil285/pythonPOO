//Crear un objeto JS, a partir de uin objeto del DOM
let miDivision = document.getElementById("div1");
let miDivision2 = document.getElementById("div2");
let miBoton = document.getElementById("myButton");
let miBoton2 = document.getElementById("myButton2");
//funcion callback, función que se pasa como parametro de otra funcion, las funciones callback se simplifican pra no escribir tanto codigo
miBoton.addEventListener("click", () => {
  alert("Siii");
});
miBoton2.addEventListener("mouseenter", () => {
  miBoton2.style.visibility = "hidden";
});

miBoton2.addEventListener("mouseleave", () => {
  miBoton2.style.visibility = "visible";
});
