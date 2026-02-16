let boxes = document.querySelectorAll("div");

boxes.forEach(box => {
    box.addEventListener("click", () => {
        box.style.backgroundColor = 'black';
    });
});