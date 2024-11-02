const imagenes = [
    "frutas.jpg",
    "vegetales.jpg",
    "granos-enteros.jpg",
    "frutos-secos.jpg"
];

let indiceActual = 0;

function cambiarImagen(direccion) {
    indiceActual += direccion;
    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    } else if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    document.getElementById('imagen-carrusel').src = imagenes[indiceActual];
}

window.onscroll = function() {
    const irArriba = document.getElementById("irArriba");
    if (document.documentElement.scrollTop > 300) {
        irArriba.style.display = "block";
    } else {
        irArriba.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    console.log("Botón 'Ir Arriba' clickeado");
}

