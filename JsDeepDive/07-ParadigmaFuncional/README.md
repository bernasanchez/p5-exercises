## Programación Funcional

### Puntos claves

La programación funcional es otros de los paradigmas con los que nos vamos a encontrar en JavaScript, y posiblemente el mas importante junto con Programación Orientada a Objetos(OOP).

Cuanto trabajábamos con OOP se fortalecía el uso de objetos y la relación entre ellos, ahora con _Functional Programming_ nuestra principal herramienta van a se las funciones (que sorpresa), y sobre todo en JavaScript que estas se comportan como __*High Order Functions*__.

Lo que vamos a ver a continuación no son metodos que nos da JavaScript para usar el paradigma si no más bien una estilo de código, una forma de escribir que nos permite trabajar de una forma mas *pura*.

Veamos los puntos claves del paradigma.

### High Order Functions

Hay dos caracteristicas que marcan una función como High Order Function:

 * Aquellas que pueden recibir otras funciones por parámetros para ejecutarlas o transformarlas. 

```javascript
function invocador(fn,arg) {
  //recibo una función como parámetro y la invoco
  fn(arg);
}
 
invocador(console.log, 'hola') // hola
```

 * Funciones que tienen como resultado una nueva función.

```javascript
function sayResult() {
  return function (value) {
    return 'El resultado es: ' + value
  }
}
```

Para que esto suceda las funciones tienen que ser tomadas como un valor, un tipo de dato, justo como ocurre en JavaScript donde las funciones son Objetos.

### Funciones Puras

Una función pura es aquella que solo trabaja en base a los argumentos que reciba como parámetro y en vez de cambiarlos, devuelve una nueva versión de ellos. Este método no genere efectos secundarios, osea que no modifica nada fuera de su _scope_.

**Función Inpura**

```javascript
var a = 3;

function sumarle(num) {
  // modifica variables exteriores
  a += num;
}

sumarle(2);

a // 5
```

**Función Pura**

```javascript
var a = 3;

function sumarle(num, suma) {
  // en vez de modificar `a` retorna un nuevo valor
  return num + suma;
}

// siempre que trabajamos con funciones puras hay que guardar
// ese nuevo valor.
a = sumarle(a,2);

a // 5
```

El comportamiento de estas funciones es muy predecible porque siempre que se ejecuten bajo los mismos parámetros deberían dar el **mismo** resultado (solo trabajan con sus argumentos).

```javascript
sumarle(3,6) // 9

sumarle(3,6) // 9

sumarle(3,6) // 9

// no importa cuantas veces lo corra el valor va a ser el mismo
```

### Datos Inmutables

Como mostramos recién un tema clave es el hecho de no modificar los elementos que pasamos, en casos en que los argumentos pasados sean tipos de dato mutables, se puede generar uno nuevo solo para no modificarlo, y así la función no modifica elementos ajenos salvo que sea llamada para eso.

```javascript
// creo un objeto (mutable)
var alumno = {
  nombre: 'juan',
  apellido: 'perez',
}

function cambiarNombre(obj,nombre) {
  // Le asigno a un objeto vacío las propiedades de `obj`
  // pero con la propiedad nombre cambiada
  return Object.assign({}, obj, { nombre: nombre })
}

// lo ejecuto sin guardar el resultado
cambiarNombre(alumno, 'enzo')
// y el nombre se mantiene
alumno.nombre // 'juan'

// ahora guardo el resultado
alumno = cambiarNombre(alumno, 'enzo')
// y el nombre cambia
alumno.nombre // 'enzo'

```

Como se podrán imaginar la programación funcional promueve la modularización, osea el encapsulamiento de problemas en funciones que cumplan una tarea especifica, si mantenemos la pureza de estas funciones y evitamos los efectos secundarios seguramente podamos hacer crecer nuestro programa sin conflictos, ya que si cada cosa se encarga de una pequeña tarea, es muy fácil identificar que paso del flujo de nuestro programa tiene un error en el caso de que falle.

### Concatenación de funciones

Uno de los métodos más usados que nos permite la programación funcional es la concatenación de funciones. ¿Que significa esto? que podemos hacer que funciones interactúen entre ellas para volverse mas genéricas y poder cubrir mas casos.

```javascript
function duplicar(n) {
  return n*2
}

function operar(fn, a, b) {
  return fn(a) + fn(b)
}

operar(duplicar,3,4) // 14
```

```javascript
function union(fn1, fn2) {
  return function(arg){
    return fn1(arg) && fn2(arg);
  }
}

function esPositivo(num) {
  return num >= 0;
}

function esPar(num){
  return num%2 === 0;
}

var esParYesPositivo = union(esPar, esPositivo)

esParYesPositivo(4) // true

esParYesPositivo(3) // false 

esParYesPositivo(-2) // false
```

Hay muchos métodos creados por javascript que siguen estos conceptos, habrán escuchado hablar de `forEach`, `map` o `filter` por dar unos ejemplos. Vamos a tratar de implementarlos nosotros mismos en los ejercicios.