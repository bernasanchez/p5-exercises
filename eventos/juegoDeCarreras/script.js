let autoRojo = document.querySelector('#autoRojo'); 
let autoAzul = document.querySelector('#autoAzul'); 

let accRojo = 0;
let accAzul = 0;

window.addEventListener('keyup', function(e){
    if(e.key == 'd'){
        autoRojo.setAttribute('marginLeft', accRojo + 'px')
        accRojo++; 
       
        
    }
})

