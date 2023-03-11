
const select1 = document.querySelector('.crew__content__data__selector__option1');
const select2 = document.querySelector('.crew__content__data__selector__option2');
const select3 = document.querySelector('.crew__content__data__selector__option3');
const select4 = document.querySelector('.crew__content__data__selector__option4');

const indicatorSelect = document.querySelector('.crew__content__data__selector__indicator');

var auxDouglas = 1;
var auxMark = 0;
var auxVictor = 0;
var auxAnousheh = 0;

const personContainer = document.querySelector('.crew__content__person');
const dataContainer = document.querySelector('.crew__content__data');

const personDouglas = document.querySelector('.crew__content__person__douglas');
const personMark = document.querySelector('.crew__content__person__mark');
const personVictor = document.querySelector('.crew__content__person__victor');
const personAnousheh = document.querySelector('.crew__content__person__anousheh');

const dataDouglas = document.querySelector('.crew__content__data__douglas');
const dataMark = document.querySelector('.crew__content__data__mark');
const dataVictor = document.querySelector('.crew__content__data__victor');
const dataAnousheh = document.querySelector('.crew__content__data__anousheh');

select1.addEventListener('click', ()=>{
    auxDouglas = 1;
    auxMark = 0;
    auxVictor = 0;
    auxAnousheh = 0;

    var viewport_width = window.innerWidth;

    personDouglas.style.left = '0';
    personMark.style.left = '100vw';
    personVictor.style.left = '100vw';
    personAnousheh.style.left = '100vw';

    dataDouglas.style.left = '0';
    dataMark.style.left = '100vw';
    dataVictor.style.left = '100vw';
    dataAnousheh.style.left = '100vw';

    if (viewport_width < 768) {
        
        indicatorSelect.style.left = '0';
        personContainer.style.height = '223px';
        personContainer.style.width = 'auto';
        personContainer.style.right = '0';
        dataContainer.style.height = '212px';

    } else if (viewport_width >= 768 && viewport_width < 1440) {
        
        indicatorSelect.style.left = '0';
        personContainer.style.height = '572px';
        personContainer.style.width = 'auto';
        personContainer.style.right = '0'; 
        dataContainer.style.height = '232px';   

    } else {

        indicatorSelect.style.left = '0';
        personContainer.style.height = '712px';
        personContainer.style.width = '522.797px';
        personContainer.style.right = '0';    
        dataContainer.style.height = '406px';

    }
});

select2.addEventListener('click', ()=>{
    auxDouglas = 0;
    auxMark = 1;
    auxVictor = 0;
    auxAnousheh = 0;

    var viewport_width = window.innerWidth;

    personDouglas.style.left = '-200vw';
    personMark.style.left = '0';
    personVictor.style.left = '100vw';
    personAnousheh.style.left = '100vw';

    dataDouglas.style.left = '-100vw';
    dataMark.style.left = '0';
    dataVictor.style.left = '100vw';
    dataAnousheh.style.left = '100vw';

    if (viewport_width < 768) {
        
        indicatorSelect.style.left = '26px';
        personContainer.style.height = '223px';
        personContainer.style.width = 'auto';
        personContainer.style.right = '0';  
        dataContainer.style.height = '237px';

    } else if (viewport_width >= 768 && viewport_width < 1440) {
        
        indicatorSelect.style.left = '26px';
        personContainer.style.height = '532px';
        personContainer.style.width = 'auto';
        personContainer.style.right = '0';
        dataContainer.style.height = '232px';

    } else {

        indicatorSelect.style.left = '39px';
        personContainer.style.height = '654px';
        personContainer.style.width = '442.469px';
        personContainer.style.right = '49.56px';
        dataContainer.style.height = '406px';
    }
});

select3.addEventListener('click', ()=>{
    auxDouglas = 0;
    auxMark = 0;
    auxVictor = 1;
    auxAnousheh = 0;

    var viewport_width = window.innerWidth;

    personDouglas.style.left = '-200vw';
    personMark.style.left = '-200vw';
    personVictor.style.left = '0';
    personAnousheh.style.left = '100vw';

    dataDouglas.style.left = '-100vw';
    dataMark.style.left = '-100vw';
    dataVictor.style.left = '0';
    dataAnousheh.style.left = '100vw';

    if (viewport_width < 768) {
        
        indicatorSelect.style.left = '52px';
        personContainer.style.height = '223px';
        personContainer.style.width = 'auto';
        personContainer.style.right = '0';  
        dataContainer.style.height = '262px';

    } else if (viewport_width >= 768 && viewport_width < 1440) {
        
        indicatorSelect.style.left = '52px';
        personContainer.style.height = '532px';
        personContainer.style.width = 'auto';
        personContainer.style.right = '0';
        dataContainer.style.height = '232px';

    } else {

        indicatorSelect.style.left = '78px';
        personContainer.style.height = '681px';
        personContainer.style.width = '579.641px';
        personContainer.style.right = '5.61px';
        dataContainer.style.height = '406px';
    }
});

select4.addEventListener('click', ()=>{
    auxDouglas = 0;
    auxMark = 0;
    auxVictor = 0;
    auxAnousheh = 1;

    var viewport_width = window.innerWidth;

    personDouglas.style.left = '-200vw';
    personMark.style.left = '-200vw';
    personVictor.style.left = '-200vw';
    personAnousheh.style.left = '0';

    dataDouglas.style.left = '-100vw';
    dataMark.style.left = '-100vw';
    dataVictor.style.left = '-100vw';
    dataAnousheh.style.left = '0';

    if (viewport_width < 768) {
        
        indicatorSelect.style.left = '78px';
        personContainer.style.height = '223px';
        personContainer.style.width = 'auto';
        personContainer.style.right = '0';  
        dataContainer.style.height = '237px';

    } else if (viewport_width >= 768 && viewport_width < 1440) {
        
        indicatorSelect.style.left = '78px';
        personContainer.style.height = '532px';
        personContainer.style.width = 'auto';
        personContainer.style.right = '0';
        dataContainer.style.height = '232px';

    } else {

        indicatorSelect.style.left = '117px';
        personContainer.style.height = '607px';
        personContainer.style.width = '579.766px';
        personContainer.style.right = '-20px';
        dataContainer.style.height = '406px';
    }
});

window.addEventListener('resize', function() {
    var viewport_width = window.innerWidth;

    if (auxDouglas == 1) {
        if (viewport_width < 768) {
        
            indicatorSelect.style.left = '0';
            personContainer.style.height = '223px';
            personContainer.style.width = 'auto';
            personContainer.style.right = '0';
            dataContainer.style.height = '212px';
    
        } else if (viewport_width >= 768 && viewport_width < 1440) {
            
            indicatorSelect.style.left = '0';
            personContainer.style.height = '572px';
            personContainer.style.width = 'auto';
            personContainer.style.right = '0'; 
            dataContainer.style.height = '232px';   
    
        } else {
    
            indicatorSelect.style.left = '0';
            personContainer.style.height = '712px';
            personContainer.style.width = '522.797px';
            personContainer.style.right = '0';    
            dataContainer.style.height = '406px';
    
        }
    }
    if (auxMark == 1) {
        if (viewport_width < 768) {
        
            indicatorSelect.style.left = '26px';
            personContainer.style.height = '223px';
            personContainer.style.width = 'auto';
            personContainer.style.right = '0';  
            dataContainer.style.height = '237px';
    
        } else if (viewport_width >= 768 && viewport_width < 1440) {
            
            indicatorSelect.style.left = '26px';
            personContainer.style.height = '532px';
            personContainer.style.width = 'auto';
            personContainer.style.right = '0';
            dataContainer.style.height = '232px';
    
        } else {
    
            indicatorSelect.style.left = '39px';
            personContainer.style.height = '654px';
            personContainer.style.width = '442.469px';
            personContainer.style.right = '49.56px';
            dataContainer.style.height = '406px';
        }
    }
    if (auxVictor == 1) {
        if (viewport_width < 768) {
        
            indicatorSelect.style.left = '52px';
            personContainer.style.height = '223px';
            personContainer.style.width = 'auto';
            personContainer.style.right = '0';  
            dataContainer.style.height = '262px';
    
        } else if (viewport_width >= 768 && viewport_width < 1440) {
            
            indicatorSelect.style.left = '52px';
            personContainer.style.height = '532px';
            personContainer.style.width = 'auto';
            personContainer.style.right = '0';
            dataContainer.style.height = '232px';
    
        } else {
    
            indicatorSelect.style.left = '78px';
            personContainer.style.height = '681px';
            personContainer.style.width = '579.641px';
            personContainer.style.right = '5.61px';
            dataContainer.style.height = '406px';
        }
    }
    if (auxAnousheh == 1) {
        if (viewport_width < 768) {
        
            indicatorSelect.style.left = '78px';
            personContainer.style.height = '223px';
            personContainer.style.width = 'auto';
            personContainer.style.right = '0';  
            dataContainer.style.height = '237px';
    
        } else if (viewport_width >= 768 && viewport_width < 1440) {
            
            indicatorSelect.style.left = '78px';
            personContainer.style.height = '532px';
            personContainer.style.width = 'auto';
            personContainer.style.right = '0';
            dataContainer.style.height = '232px';
    
        } else {
    
            indicatorSelect.style.left = '117px';
            personContainer.style.height = '607px';
            personContainer.style.width = '579.766px';
            personContainer.style.right = '-20px';
            dataContainer.style.height = '406px';
        }
    }
});