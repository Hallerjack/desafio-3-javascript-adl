let colorKey = "";

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === "A") {
        colorKey = "pink";
        pintar();
    } else if (event.key === 's' || event.key === "S") {
        colorKey = "orange";
        pintar();
    } else if (event.key === 'd' || event.key === "D") {
        colorKey = "skyblue";
        pintar();
    } else if (event.key === 'q' || event.key === "Q") {
        colorKey = "purple";
        pintar ();
        agregarElemento();
    } else if (event.key === 'w' || event.key === "W") {
        colorKey = "grey";
        pintar ();
        agregarElemento();
    } else if (event.key === 'e' || event.key === "E") {
        colorKey = "brown";
        pintar ();
        agregarElemento();
    }
});

function pintar() {
    key = document.getElementById("key");
    key.style.backgroundColor = colorKey;
}

function agregarElemento() {
    contenedor = document.getElementById("contenedor");
    nuevoElemento = document.createElement("div");

    nuevoElemento.style.width = "200px";
    nuevoElemento.style.height = "200px";
    nuevoElemento.style.border = "1px solid black";
    nuevoElemento.style.backgroundColor = colorKey;

    contenedor.appendChild(nuevoElemento);
}

