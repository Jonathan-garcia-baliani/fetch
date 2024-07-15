// frontend/js/changeImage.js

document.addEventListener('DOMContentLoaded', () => {
    const imageElement = document.querySelector('.colage');
    const images = [
        './Frontend/img/amsterdam.jpg',
        './Frontend/img/colage.avif',
        './Frontend/img/Designer.jpeg',
        './Frontend/img/fondoweb.jpg',
        './Frontend/img/grecia.jpg',
        './Frontend/img/holanda.jpg',
        './Frontend/img/roma.jpg',
        './Frontend/img/viajados2.jpg',
        './Frontend/img/viajados3.jpg'
    ];

    function changeImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        imageElement.src = images[randomIndex];
    }

    // Cambiar la imagen al cargar la página
    changeImage();
});
