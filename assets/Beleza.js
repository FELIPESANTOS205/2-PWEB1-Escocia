function toggleInfo(infoId) {
    const infoElement = document.getElementById(infoId);
    if (infoElement.style.display === "none") {
        infoElement.style.display = "block";
    } else {
        infoElement.style.display = "none";
    }
}
