let colors = [
    'rgb(127, 255, 212)', 
    'rgb(0, 0, 255)', 
    'rgb(165, 42, 42)', 
    'rgb(148, 0, 211)',
    'rgb(34, 139, 34)', 
    'rgb(250, 128, 114)'
]

//Variables
let squareColors = document.querySelectorAll('div.square')
let pickedColor = document.querySelector('#colorDisplay')//color que sale en h1
let message = document.querySelector('#message') //Correcto o intentalo nuevamente


//Asignar colores a los cuadrados
for(let i = 0; i < colors.length; i++){
   squareColors[i].style.background = colors[i]
   squareColors[i].addEventListener('click', function(){
       let clickedColor = this.style.backgroundColor //color clickeado
        if(clickedColor == pickedColor){
            message.textContent = 'Correcto!!'
            changeColor(clickedColor)
        }else{
            message.textContent = 'Intentalo Nuevamente'
            this.style.backgroundColor = 'darkgreen'
        }
   })
}

//Cambiar todos los cuadrados con el color elegido
let changeColor = (clickedColor) => {
    // pickedColor.style.backgroundColor = clickedColor
    for(let i = 0; i < squareColors.length; i++){
        squareColors[i].style.backgroundColor = clickedColor

    }
}

//Crear color random para pickedColor (color de H1)
let pickColor = () => {
    let random = Math.round(Math.random() * colors.length);
    return colors[random];
}
pickColor()
pickedColor = pickColor() //1- colors[3]
pickedColor.textContent = pickedColor(colors)