let btn = document.querySelectorAll('button')
let img = document.querySelectorAll('img')

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
        img[i].classList.toggle('oculto')
        
    })
}

for(let i = 0; i < img.length; i++){
    img[i].addEventListener('click', function(){
        this.classList.toggle('oculto')
    })
}

