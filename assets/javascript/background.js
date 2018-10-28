var bgImg = [
    "./assets/images/alex-knickerbocker-157482.jpg",
    "./assets/images/aniket-deole-296462_nz7ypz.jpg",
    "./assets/images/cristina-gottardi-259243_uz0d12.jpg",
    "./assets/images/david-marcu-114194_d0fqbc.jpg",
    "./assets/images/filip-wessman-59999_frqxfr.jpg",
    "./assets/images/fjord_sim73r.jpg",
    "./assets/images/luca-baggio-61570.jpg"
];

var randomNumber = Math.floor(Math.random() * (bgImg.length));

document.body.style.backgroundImage = `url('${bgImg[randomNumber]}')`;