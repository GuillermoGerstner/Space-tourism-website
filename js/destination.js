
const selectMoon = document.querySelector('.destination__content__data__selector__moon');
const selectMars = document.querySelector('.destination__content__data__selector__mars');
const selectEuropa = document.querySelector('.destination__content__data__selector__europa');
const selectTitan = document.querySelector('.destination__content__data__selector__titan');

const indicadorM = document.querySelector('.destination__content__data__selector__indicatorM');
const indicadorT = document.querySelector('.destination__content__data__selector__indicatorT');

var auxMoon = 1;
var auxMars = 0;
var auxEuropa = 0;
var auxTitan = 0;

const planetMoon = document.querySelector('.destination__content__planet__moon');
const planetMars = document.querySelector('.destination__content__planet__mars');
const planetEuropa = document.querySelector('.destination__content__planet__europa');
const planetTitan = document.querySelector('.destination__content__planet__titan');

const titleMoon = document.querySelector('.destination__content__data__title__moon');
const titleMars = document.querySelector('.destination__content__data__title__mars');
const titleEuropa = document.querySelector('.destination__content__data__title__europa');
const titleTitan = document.querySelector('.destination__content__data__title__titan');

const descriptionContainer = document.querySelector('.destination__content__data__description');

const descriptionMoon = document.querySelector('.destination__content__data__description__moon');
const descriptionMars = document.querySelector('.destination__content__data__description__mars');
const descriptionEuropa = document.querySelector('.destination__content__data__description__europa');
const descriptionTitan = document.querySelector('.destination__content__data__description__titan');

const infoMoon = document.querySelector('.destination__content__data__info__moon');
const infoMars = document.querySelector('.destination__content__data__info__mars');
const infoEuropa = document.querySelector('.destination__content__data__info__europa');
const infoTitan = document.querySelector('.destination__content__data__info__titan');

selectMoon.addEventListener('click', ()=>{
    auxMoon = 1;
    auxMars = 0;
    auxEuropa = 0;
    auxTitan = 0;

    indicadorM.style.width = '36px';
    indicadorM.style.left = '0';

    indicadorT.style.width = '41px';
    indicadorT.style.left = '0';

    planetMoon.style.left = '0';
    planetMars.style.left = '100vw';
    planetEuropa.style.left = '100vw';
    planetTitan.style.left = '100vw';

    var viewport_width = window.innerWidth;

    if (viewport_width < 768) {
        titleMoon.style.left = '70.5px';
    } else if (viewport_width >= 768 && viewport_width < 1440) {
        titleMoon.style.left = '154.5px';
    } else {
        titleMoon.style.left = '0';
    }
    titleMars.style.left = '100vw';
    titleEuropa.style.left = '100vw';
    titleTitan.style.left = '100vw';

    if (viewport_width < 768) {
        descriptionContainer.style.height = '125px';
    } else if (viewport_width >= 768 && viewport_width < 1440) {
        descriptionContainer.style.height = '84px';
    } else {
        descriptionContainer.style.height = '128px';
    }

    descriptionMoon.style.left = '0';
    descriptionMars.style.left = '100vw';
    descriptionEuropa.style.left = '100vw';
    descriptionTitan.style.left = '100vw';

    infoMoon.style.left = '0';
    infoMars.style.left = '100vw';
    infoEuropa.style.left = '100vw';
    infoTitan.style.left = '100vw';
});

selectMars.addEventListener('click', ()=>{
    auxMoon = 0;
    auxMars = 1;
    auxEuropa = 0;
    auxTitan = 0;

    indicadorM.style.width = '34px';
    indicadorM.style.left = '61px';

    indicadorT.style.width = '38px';
    indicadorT.style.left = '74px';

    planetMoon.style.left = '-100vw';
    planetMars.style.left = '0';
    planetEuropa.style.left = '100vw';
    planetTitan.style.left = '100vw';

    var viewport_width = window.innerWidth;

    titleMoon.style.left = '-100vw';
    if (viewport_width < 768) {
        titleMars.style.left = '87.5px';
    } else if (viewport_width >= 768 && viewport_width < 1440) {
        titleMars.style.left = '178.5px';
    } else {
        titleMars.style.left = '0';
    };
    titleEuropa.style.left = '100vw';
    titleTitan.style.left = '100vw';

    if (viewport_width < 768) {
        descriptionContainer.style.height = '100px';
    } else if (viewport_width >= 768 && viewport_width < 1440) {
        descriptionContainer.style.height = '84px';
    } else {
        descriptionContainer.style.height = '128px';
    }

    descriptionMoon.style.left = '-100vw';
    descriptionMars.style.left = '0';
    descriptionEuropa.style.left = '100vw';
    descriptionTitan.style.left = '100vw';

    infoMoon.style.left = '-100vw';
    infoMars.style.left = '0';
    infoEuropa.style.left = '100vw';
    infoTitan.style.left = '100vw';
});

selectEuropa.addEventListener('click', ()=>{
    auxMoon = 0;
    auxMars = 0;
    auxEuropa = 1;
    auxTitan = 0;

    indicadorM.style.width = '50px';
    indicadorM.style.left = '121px';

    indicadorT.style.width = '57px';
    indicadorT.style.left = '147px';

    planetMoon.style.left = '-100vw';
    planetMars.style.left = '-100vw';
    planetEuropa.style.left = '0';
    planetTitan.style.left = '100vw';

    var viewport_width = window.innerWidth;

    titleMoon.style.left = '-100vw';
    titleMars.style.left = '-100vw';
    if (viewport_width < 768) {
        titleEuropa.style.left = '56px';
    } else if (viewport_width >= 768 && viewport_width < 1440) {
        titleEuropa.style.left = '132.5px';
    } else {
        titleEuropa.style.left = '0';
    };
    titleTitan.style.left = '100vw';

    if (viewport_width < 768) {
        descriptionContainer.style.height = '125px';
    } else if (viewport_width >= 768 && viewport_width < 1440) {
        descriptionContainer.style.height = '84px';
    } else {
        descriptionContainer.style.height = '128px';
    }

    descriptionMoon.style.left = '-100vw';
    descriptionMars.style.left = '-100vw';
    descriptionEuropa.style.left = '0';
    descriptionTitan.style.left = '100vw';

    infoMoon.style.left = '-100vw';
    infoMars.style.left = '-100vw';
    infoEuropa.style.left = '0';
    infoTitan.style.left = '100vw';
});

selectTitan.addEventListener('click', ()=>{
    auxMoon = 0;
    auxMars = 0;
    auxEuropa = 0;
    auxTitan = 1;

    indicadorM.style.width = '38px';
    indicadorM.style.left = '197px';

    indicadorT.style.width = '43px';
    indicadorT.style.left = '239px';

    planetMoon.style.left = '-100vw';
    planetMars.style.left = '-100vw';
    planetEuropa.style.left = '-100vw';
    planetTitan.style.left = '0';

    var viewport_width = window.innerWidth;

    titleMoon.style.left = '-100vw';
    titleMars.style.left = '-100vw';
    titleEuropa.style.left = '-100vw';
    if (viewport_width < 768) {
        titleTitan.style.left = '83.5px';
    } else if (viewport_width >= 768 && viewport_width < 1440) {
        titleTitan.style.left = '172px';
    } else {
        titleTitan.style.left = '0';
    };

    if (viewport_width < 768) {
        descriptionContainer.style.height = '100px';
    } else if (viewport_width >= 768 && viewport_width < 1440) {
        descriptionContainer.style.height = '84px';
    } else {
        descriptionContainer.style.height = '128px';
    }

    descriptionMoon.style.left = '-100vw';
    descriptionMars.style.left = '-100vw';
    descriptionEuropa.style.left = '-100vw';
    descriptionTitan.style.left = '0';

    infoMoon.style.left = '-100vw';
    infoMars.style.left = '-100vw';
    infoEuropa.style.left = '-100vw';
    infoTitan.style.left = '0';
});

window.addEventListener('resize', function() {
    var viewport_width = window.innerWidth;

    if (auxMoon == 1) {
        if (viewport_width < 768) {
            titleMoon.style.left = '70.5px';
        } else if (viewport_width >= 768 && viewport_width < 1440) {
            titleMoon.style.left = '154.5px';
        } else {
            titleMoon.style.left = '0';
        }

        if (viewport_width < 768) {
            descriptionContainer.style.height = '125px';
        } else if (viewport_width >= 768 && viewport_width < 1440) {
            descriptionContainer.style.height = '84px';
        } else {
            descriptionContainer.style.height = '128px';
        }
    }
    if (auxMars == 1) {
        if (viewport_width < 768) {
            titleMars.style.left = '87.5px';
        } else if (viewport_width >= 768 && viewport_width < 1440) {
            titleMars.style.left = '178.5px';
        } else {
            titleMars.style.left = '0';
        };

        if (viewport_width < 768) {
            descriptionContainer.style.height = '100px';
        } else if (viewport_width >= 768 && viewport_width < 1440) {
            descriptionContainer.style.height = '84px';
        } else {
            descriptionContainer.style.height = '128px';
        }
    }
    if (auxEuropa == 1) {
        if (viewport_width < 768) {
            titleEuropa.style.left = '56px';
        } else if (viewport_width >= 768 && viewport_width < 1440) {
            titleEuropa.style.left = '132.5px';
        } else {
            titleEuropa.style.left = '0';
        };

        if (viewport_width < 768) {
            descriptionContainer.style.height = '125px';
        } else if (viewport_width >= 768 && viewport_width < 1440) {
            descriptionContainer.style.height = '84px';
        } else {
            descriptionContainer.style.height = '128px';
        }
    }
    if (auxTitan == 1) {
        if (viewport_width < 768) {
            titleTitan.style.left = '83.5px';
        } else if (viewport_width >= 768 && viewport_width < 1440) {
            titleTitan.style.left = '172px';
        } else {
            titleTitan.style.left = '0';
        };

        if (viewport_width < 768) {
            descriptionContainer.style.height = '100px';
        } else if (viewport_width >= 768 && viewport_width < 1440) {
            descriptionContainer.style.height = '84px';
        } else {
            descriptionContainer.style.height = '128px';
        }
    }
});