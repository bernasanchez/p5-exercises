let mostrar = () => {
    let img = document.querySelector('#magiaImg');
    img.style.visibility = 'visible'; 
}

let ocultar = () => {
    let img = document.querySelector('#magiaImg');
    img.style.visibility = 'hidden'; 
}

let div = document.querySelector('#magiaPadre');
div.onmouseout = mostrar; 
div.onmouseover = ocultar; 