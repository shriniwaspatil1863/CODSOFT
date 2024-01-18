function scrollToAchievements() {
    var achievementsSection = document.getElementById("Achievement");
    achievementsSection.style.display = "block";
    achievementsSection.style.opacity = 1;
    achievementsSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
}
function scrollToSkills() {
    var skillsSection = document.getElementById("Skillsinfo");
    skillsSection.style.display = "block";
    skillsSection.style.opacity = 1;
    skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
}
function scrollToother() {
    var skillsSection = document.getElementById("other");
    skillsSection.style.display = "block";
    skillsSection.style.opacity = 1;
    skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
}
function scrollToconnect() {
    var skillsSection = document.getElementById("connect");
    skillsSection.style.display = "block";
    skillsSection.style.opacity = 1;
    skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
}
window.addEventListener("scroll", function () {
    var mainbox = document.querySelector('.mainbox');

    mainbox.style.display = 'block';
    mainbox.style.animation = 'fadeInDown 0.5s ease-in-out forwards';

    clearTimeout(mainbox.timeout);

    mainbox.timeout = setTimeout(function () {
        mainbox.style.display = 'none';

        if (window.scrollY === 0) {
            mainbox.style.display = 'block';
        }
    }, 1000); 
});

window.addEventListener("scroll", function () {
    var mainbox = document.querySelector('.mainbox');

    mainbox.style.display = 'block';
    mainbox.style.animation = 'fadeInDown 0.5s ease-in-out forwards';

    clearTimeout(mainbox.timeout);

    mainbox.timeout = setTimeout(function () {
        mainbox.style.display = 'none';

        if (window.scrollY === 0) {
            mainbox.style.display = 'block';
        }
    }, 1000); 
});

window.addEventListener("load", function () {
    var mainbox = document.querySelector('.mainbox');

    setTimeout(function () {
        mainbox.style.display = 'none';
    }, 500);

    if (window.scrollY === 0) {
        mainbox.style.display = 'block';
    }
});

window.addEventListener("resize", function () {
    var mainbox = document.querySelector('.mainbox');

    mainbox.style.display = 'block';

    clearTimeout(mainbox.timeout);

    mainbox.timeout = setTimeout(function () {
        mainbox.style.display = 'none';
    }, 500); 
});
