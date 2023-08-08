// selction des variables************************
const step = document.querySelector ('.section-1')
const step2 = document.querySelector('.section-2')
const step3 = document.querySelector('.section-3')
// ------------------------------------------------
const but = document.querySelector('.forward')
const but1 = document.querySelector('.forward-1')
const but2 = document.querySelector('.backward')
const but3 = document.querySelector('.backward-1')
const but4 = document.querySelector('submit')
// --------------------------------------------------
const icon = document.querySelector ('.fill-1')
const icon1 = document.querySelector ('.lg-2')
const icon2 = document.querySelector ('.fill-2')
const icon3 = document.querySelector ('.lg-3')
const icon4 = document.querySelector ('.fill-3')

// definir les fonction************************
but.addEventListener('click', () => {
 step.style.display ='none';
 step2.style.display ='block';
 step3.style.display ='none';
});

but1.addEventListener('click', () => {
 step.style.display ='none';
 step2.style.display ='none';
 step3.style.display ='block';
});

but2.addEventListener('click', () => {
 step2.style.display ='none';
 step3.style.display ='none';
 step.style.display ='block';
});

but3.addEventListener('click', () => {
 step3.style.display ='none';
 step2.style.display ='block';
 step3.style.display ='none';
});
// --------------------------------------

icon.addEventListener('click', () => {
 step.style.display ='block';
 step3.style.display ='none';
 step2.style.display ='none';
});
// -------------------------------------------
icon1.addEventListener('click', () => {
 step2.style.display ='block';
 step.style.display ='none';
 step3.style.display ='none';
});

icon2.addEventListener('click', () => {
 step.style.display ='none';
 step2.style.display ='block';
 step3.style.display ='none';
});
// -------------------------------------
icon3.addEventListener('click', () => {
 step.style.display ='none';
 step2.style.display ='none';
 step3.style.display ='block';
});

// ----------------------------------
icon4.addEventListener('click', () => {
 step.style.display ='none';
 step2.style.display ='none';
 step3.style.display ='block';
});
// ----------------------------------------------
// validation du formulaire****************************
let formul = document.getElementById('form');
but.addEventListener('click', function (e) {
    
     alert('remplir tout le formulaire')
          e.preventDefault();
});
