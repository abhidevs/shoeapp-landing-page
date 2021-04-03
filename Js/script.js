function showNav() {

    var x = document.querySelector('.responsive-nav');
    x.classList.toggle('unfold');

    var y = document.querySelector('.change-bg');
    y.classList.toggle('bg-changed');

    var a = document.querySelector('.logo');
    a.classList.toggle('changed');

    var b = document.querySelector('.navbar-toggler');
    b.classList.toggle('changed');

}

window.sr = ScrollReveal();
sr.reveal('#header .phone', {
    duration: 300,
    origin: 'bottom',
    distance: '200px'
});

sr.reveal('#features div.car-icon', {
    delay: 200,
    duration: 300,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('#features div.shoe-icon', {
    delay: 400,
    duration: 300,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('#features div.phone-icon', {
    delay: 600,
    duration: 300,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('#discount .twoPhones', {
    delay: 200,
    duration: 300,
    origin: 'left',
    distance: '200px'
});

sr.reveal('#discount .offer', {
    delay: 200,
    duration: 300,
    origin: 'right',
    distance: '200px'
});