//¡Bienvenida para N!
// Crear un programa para una fiesta de números. El programa deberá presentar a cada nuevo número, con los otros.
//⚠️ Importante: Vendrán hasta 5 números.

// Tu programa deberá mostrar por consola los siguientes mensajes:
// "¡Bienvenido, 1!"
// "¡Bienvenido, 2! Te presento a 1."
// "¡Bienvenido, 3! Te presento a 1 y a 2."
// "¡Bienvenido, 4! Te presento a 1, a 2 y a 3."
// "¡Bienvenido, 5! Te presento a 1, a 2, a 3 y a 4."

// let num = 1;
// let invitados = 1;
// let finalInvitados = 5; 

// while(num <= finalInvitados){
//     console.log('Bienvenido 1, ' + num);
//     while(invitados <= finalInvitados){
//         console.log('invitado ' + invitados);
//         invitados++
//     }
    
//     num++

// }

//SOLUCION PLEDU (NO LO ENTIENDO)
let n = 1;
let m = 1;
let stringOut = "";
while(n<6){
    if (n == 1) {
        stringOut +=`¡Bienvenido, ${n}!`;
    }
    else{
        stringOut +=`¡Bienvenido, ${n}! Te presento`;
        while(m<n && n>1){
            if (n==2) {
                stringOut +=` a ${m}.`
            }
            else if(n==3) {
                if(m==(n-1)){
                    stringOut +=` y a ${m}.`
                }
                else{
                    stringOut +=` a ${m}`
                }
            }
            else{
                if (m == (n-2)){
                    stringOut +=` a ${m}`
                }
                else if(m == (n-1)){
                    stringOut +=` y a ${m}.`
                }
                else{
                    stringOut +=` a ${m},`
                }
            }
            m ++;
        }
    }
    console.log(stringOut);
    stringOut = "";
    n++;
    m=1;
}