
function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "flex";  // Usar 'flex' para centrar a imagem
    modalImg.src = img.src;
}


function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
