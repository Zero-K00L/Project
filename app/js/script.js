const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const overlayAnim = document.querySelector('#overlay'); 
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
    console.log('open hamburger');

    if(btnHamburger.classList.contains('header__open')){   /* close hamburger menu */
        btnHamburger.classList.remove('header__open');  
        body.classList.remove('noscroll');   
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');          
            element.classList.add('fade-out');  
        });      
    }                                                      
    else {                                                 /* open hamburger menu */
        body.classList.add('noscroll');                                           
        btnHamburger.classList.add('header__open');        
        overlayAnim.classList.add('overlay');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        }); 
    }   
});
