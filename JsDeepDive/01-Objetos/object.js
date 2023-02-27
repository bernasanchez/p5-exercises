// FUNCIONES CON OBJETOS **
var obj = {}
setPropsOnObj = (obj) => {
    obj.p = 5,
    obj['plataforma'] = 5,
    obj.proximo = sumarSiguiente = (num) => {
        suma = num + 1;
        return suma
    }
    obj.la = {
        clave: {
            secreta: {
                es: 404
    
            }
        }
    }  
}
setPropsOnObj(obj)

//FUNCIONES CON ARRAYS **
var array = []
setPropsOnArr = (array) => {
    array.hola = () => 'Hola!'
    array.river = 'plate'
    array[0] = 5
    array.doble = (num) => num * 2
}
setPropsOnArr(array);

//FUNCIONES CON FUNCIONES **
setPropsOnFunc = (functionObject) => {

    functionObject.year = new Date().getFullYear();
    functionObject.mitad = (num) => num / 2 ;
    functionObject.prototype.helloWorld = () => 'Hello World'
}
setPropsOnFunc(functionObject)