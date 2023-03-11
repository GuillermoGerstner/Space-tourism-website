
window.addEventListener('resize', function() {

    var viewport_width = window.innerWidth;
    var viewport_height = window.innerHeight;

    if (viewport_width >= 768) {

        modalContainer.classList.remove('appearModalContainer');
        modal.classList.remove('appearModal');


    }
});

function delay (URL) {
    setTimeout( function() { window.location = URL }, 250 );
}

const logo = document.querySelector('.header__logo');

logo.addEventListener('click', ()=>{
    location.reload();
});

const menu = document.querySelector('.header__menu');
const modalContainer = document.querySelector('.modal__container');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

menu.addEventListener('click', ()=>{
    modalContainer.classList.toggle('appearModalContainer');
    modal.classList.toggle('appearModal');
});

modalClose.addEventListener('click', ()=>{
    modalContainer.classList.toggle('appearModalContainer');
    modal.classList.toggle('appearModal');
});

const link0M = document.querySelector('.modal__link0');
const link1M = document.querySelector('.modal__link1');
const link2M = document.querySelector('.modal__link2');
const link3M = document.querySelector('.modal__link3');
const linkIndicatorM = document.querySelector('.modal__indicator');

const link0T = document.querySelector('.header__navigation__link0');
const link1T = document.querySelector('.header__navigation__link1');
const link2T = document.querySelector('.header__navigation__link2');
const link3T = document.querySelector('.header__navigation__link3');
const linkIndicatorT = document.querySelector('.header__navigation__indicatorT');
const linkIndicatorD = document.querySelector('.header__navigation__indicatorD');


link0M.addEventListener('click', ()=>{
    modalContainer.classList.toggle('appearModalContainer');
    modal.classList.toggle('appearModal');

    linkIndicatorM.style.top = '113px';

    linkIndicatorT.style.width = '36px';
    linkIndicatorT.style.left = '48px';

    linkIndicatorD.style.width = '70px';
    linkIndicatorD.style.left = '123px';
});
link1M.addEventListener('click', ()=>{
    modalContainer.classList.toggle('appearModalContainer');
    modal.classList.toggle('appearModal');
    
    linkIndicatorM.style.top = '164px';

    linkIndicatorT.style.width = '87px';
    linkIndicatorT.style.left = '119px';

    linkIndicatorD.style.width = '127px';
    linkIndicatorD.style.left = '244px';
});
link2M.addEventListener('click', ()=>{
    modalContainer.classList.toggle('appearModalContainer');
    modal.classList.toggle('appearModal');

    linkIndicatorM.style.top = '215px';

    linkIndicatorT.style.width = '36px';
    linkIndicatorT.style.left = '246px';

    linkIndicatorD.style.width = '71px';
    linkIndicatorD.style.left = '419px';
});
link3M.addEventListener('click', ()=>{
    modalContainer.classList.toggle('appearModalContainer');
    modal.classList.toggle('appearModal');

    linkIndicatorM.style.top = '266px';

    linkIndicatorT.style.width = '86px';
    linkIndicatorT.style.left = '318px';

    linkIndicatorD.style.width = '127px';
    linkIndicatorD.style.left = '538px';
});

link0T.addEventListener('click', ()=>{

    linkIndicatorM.style.top = '113px';

    linkIndicatorT.style.width = '36px';
    linkIndicatorT.style.left = '48px';

    linkIndicatorD.style.width = '70px';
    linkIndicatorD.style.left = '123px';
});
link1T.addEventListener('click', ()=>{

    linkIndicatorM.style.top = '164px';

    linkIndicatorT.style.width = '87px';
    linkIndicatorT.style.left = '119px';

    linkIndicatorD.style.width = '130px';
    linkIndicatorD.style.left = '241px';
});
link2T.addEventListener('click', ()=>{

    linkIndicatorM.style.top = '215px';

    linkIndicatorT.style.width = '36px';
    linkIndicatorT.style.left = '246px';

    linkIndicatorD.style.width = '71px';
    linkIndicatorD.style.left = '419px';
});
link3T.addEventListener('click', ()=>{

    linkIndicatorM.style.top = '266px';

    linkIndicatorT.style.width = '86px';
    linkIndicatorT.style.left = '318px';

    linkIndicatorD.style.width = '127px';
    linkIndicatorD.style.left = '538px';
});

