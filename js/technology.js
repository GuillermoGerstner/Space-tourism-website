
const btn1 = document.querySelector('.technology__content__data__selector__option1');
const btn2 = document.querySelector('.technology__content__data__selector__option2');
const btn3 = document.querySelector('.technology__content__data__selector__option3');

var auxBtn1 = 1;
var auxBtn2 = 0;
var auxBtn3 = 0;

const btnSelection = document.querySelector('.technology__content__data__selector__selection');

const infoLaunch = document.querySelector('.technology__content__data__info__launch');
const infoSpaceport = document.querySelector('.technology__content__data__info__spaceport');
const infoCapsule = document.querySelector('.technology__content__data__info__capsule');

infoLaunch.classList.add('appearInfo');

const imageLaunch = document.querySelector('.technology__content__image__launch');
const imageSpaceport = document.querySelector('.technology__content__image__spaceport');
const imageCapsule = document.querySelector('.technology__content__image__capsule');

imageLaunch.classList.add('appearInfo');

btn1.addEventListener('click', ()=>{
    auxBtn1 = 1;
    auxBtn2 = 0;
    auxBtn3 = 0;

    var viewport_width = window.innerWidth;

    btnSelection.style.left = '0'
    btnSelection.style.top = '0'

    btnSelection.innerHTML = '1';

    infoSpaceport.classList.remove('appearInfo');
    infoCapsule.classList.remove('appearInfo');

    imageSpaceport.classList.remove('appearInfo');
    imageCapsule.classList.remove('appearInfo');

    setTimeout(() => {
        infoLaunch.classList.add('appearInfo');

        imageLaunch.classList.add('appearInfo');
      }, 500);
});

btn2.addEventListener('click', ()=>{
    auxBtn1 = 0;
    auxBtn2 = 1;
    auxBtn3 = 0;

    var viewport_width = window.innerWidth;

    if (viewport_width < 768) {
        btnSelection.style.left = '56px'
        btnSelection.style.top = '0'
    } else if (viewport_width >= 768 && viewport_width < 1440) {
        btnSelection.style.left = '76px'
        btnSelection.style.top = '0'
    } else {
        btnSelection.style.left = '0'
        btnSelection.style.top = '112px'
    }

    btnSelection.innerHTML = '2';

    infoLaunch.classList.remove('appearInfo');
    infoCapsule.classList.remove('appearInfo');
    
    imageLaunch.classList.remove('appearInfo');
    imageCapsule.classList.remove('appearInfo');
    
    setTimeout(() => {
        infoSpaceport.classList.add('appearInfo');
        
        imageSpaceport.classList.add('appearInfo');
      }, 500);
});

btn3.addEventListener('click', ()=>{
    auxBtn1 = 0;
    auxBtn2 = 0;
    auxBtn3 = 1;

    var viewport_width = window.innerWidth;

    if (viewport_width < 768) {
        btnSelection.style.left = '112px'
        btnSelection.style.top = '0'

    } else if (viewport_width >= 768 && viewport_width < 1440) {
        btnSelection.style.left = '150px'
        btnSelection.style.top = '0'

    } else {
        btnSelection.style.left = '0'
        btnSelection.style.top = '224px'
    }

    btnSelection.innerHTML = '3';

    infoLaunch.classList.remove('appearInfo');
    infoSpaceport.classList.remove('appearInfo');
    
    imageLaunch.classList.remove('appearInfo');
    imageSpaceport.classList.remove('appearInfo');
    
    setTimeout(() => {
        infoCapsule.classList.add('appearInfo');
        
        imageCapsule.classList.add('appearInfo');
      }, 500);
});

window.addEventListener('resize', function() {
    var viewport_width = window.innerWidth;

    if (auxBtn1 == 1) {
        btnSelection.style.left = '0'
        btnSelection.style.top = '0'
    
        btnSelection.innerHTML = '1';
    }
    if (auxBtn2 == 1) {
        if (viewport_width < 768) {
            btnSelection.style.left = '56px'
            btnSelection.style.top = '0'
        } else if (viewport_width >= 768 && viewport_width < 1440) {
            btnSelection.style.left = '76px'
            btnSelection.style.top = '0'
        } else {
            btnSelection.style.left = '0'
            btnSelection.style.top = '112px'
        }
    
        btnSelection.innerHTML = '2';
    }
    if (auxBtn3 == 1) {
        if (viewport_width < 768) {
            btnSelection.style.left = '112px'
            btnSelection.style.top = '0'
    
        } else if (viewport_width >= 768 && viewport_width < 1440) {
            btnSelection.style.left = '150px'
            btnSelection.style.top = '0'
    
        } else {
            btnSelection.style.left = '0'
            btnSelection.style.top = '224px'
        }
    
        btnSelection.innerHTML = '3';
    }
});