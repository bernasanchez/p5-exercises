//DEBUGGING PRACTICA 

let x;
let y;
if((x > y) && (y < 55)) {
    console.log ("Hola Mundo!");
}


var coder = {
    name: "Pedro",
    age: 17,
    hablar: function speak(){
        console.log(this.name)
    }
    
}
coder['hablar']();

let n = 10;
function addFive(n) {
    var add = 5;
    n + add;
    return n;
}
console.log(addFive(n));


class testFunction {
    constructor() {
        this.clearLocalStorage();
        this.timer = setTimeout(function () {
            this.clearBoard();
        }, 0);
    }
};  


var testArray = ["Test"];  
class testFunction2 {
    constructor(testArray) {
        for (var i = 0; i < testArray.length; i++) {
            console.log(testArray[i]);
        }
    }
}  
new testFunction2('Test'); 
