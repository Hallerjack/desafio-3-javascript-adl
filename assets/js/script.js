/* --- PROBLEMA 2.1 --------------
Separación de archivos .html & .js 
----------------------------------
*/



/* --- PROBLEMA 2.2 --- */
/* (quitar comentario para activar) */

/*
const ele = document.getElementById("ele1")

function pintar(ele) {
    ele.style.backgroundColor = 'yellow';
}

ele.addEventListener("click", function() {
    pintar(ele);
});
*/


/* --- PROBLEMA 2.3 --- */
/* (comentar para desactivar) */

let numClicks = 0;

const ele = document.getElementById("ele1");
ele.style.backgroundColor = 'yellow';

function pintar(ele) {
    numClicks = numClicks + 1;
    
    if (numClicks % 2 === 0) {
        ele.style.backgroundColor = 'yellow';
    } else {
        ele.style.backgroundColor = 'green';
    };
};

ele.addEventListener("click", function() {
    pintar(ele);
});