function scrolltoplay() {
    var skillsSection = document.getElementById("play");
    skillsSection.style.display = "block";
    skillsSection.style.opacity = 1;
    skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
}
window.addEventListener("scroll", function () {
    var mainHeading = document.querySelector('.mainheading');

    mainHeading.style.display = 'block';
    mainHeading.style.animation = 'fadeInDown 0.5s ease-in-out forwards';

    clearTimeout(mainHeading.timeout);

    mainHeading.timeout = setTimeout(function () {
        mainHeading.style.display = 'none';

        if (window.scrollY === 0) {
            mainHeading.style.display = 'block';
        }
    }, 2000); 
});

window.addEventListener("load", function () {
    var mainHeading = document.querySelector('.mainheading');

    setTimeout(function () {
        mainHeading.style.display = 'none';
    }, 2000);

    if (window.scrollY === 0) {
        mainHeading.style.display = 'block';
    }
});

window.addEventListener("resize", function () {
    var mainHeading = document.querySelector('.mainheading');

    mainHeading.style.display = 'block';

    clearTimeout(mainHeading.timeout);

    mainHeading.timeout = setTimeout(function () {
        mainHeading.style.display = 'none';
    }, 2000); 
});
