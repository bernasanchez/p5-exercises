let body = document.querySelector('#fondoMouse')
let img = document.querySelector('#mouseImg');

body.addEventListener('mousemove', function(e){
    let x = e.clientX;
    let y = e.clientY; 
    img.style.top = y + 'py'
    img.style.left = x + 'px'; 
    // console.log('me muevo por x', x)
    // console.log('me muevo por y', y)
})

// body.addEventListener('mousedown', function(e){
//     let x = e.clientX;
//     let y = e.clientY; 
//     img.style.top = y + 'py'
//     img.style.left = x + 'px'; 
//     console.log('me muevo por x', x)
//     console.log('me muevo por y', y)
// })