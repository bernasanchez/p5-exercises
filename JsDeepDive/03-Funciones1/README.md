## Functions

### Callable Objects

Las funciones son una parte muy importante de todo lenguaje de programacion y sobre todo en JavaScript. Son tipos particulares de Objetos, llamados `callable objects` o objetos invocables, por lo que tienen las mismas propiedades que cualquier objeto.

Prueben esto en la consola.

```javascript
function funcionObjeto() {
  console.log('soy un objeto');
}

funcionObjeto.nombre = 'facu';

funcionObjeto() // 'soy un objeto'

funcionObjeto.nombre // 'facu'

funcionObjeto.name // 'funcionObjeto'
```

> La propiedad `name` es propia de cada función y tiene el nombre (quien lo diria) de ella.

### Ejecución y Parámetros

Como dijimos recién, las funciones son objetos invocables, y podemos hacerlo pasándoles argumentos que varíen el comportamiento de estas.

```javascript
function log(str) {
  console.log(str)
}

log('hola!') // 'hola!'
```

Si sabemos las variables a tomar podemos darle nombre a este parámetro como en el ejemplo `str`, si no hay una propiedad _**arguments**_ de todas las funciones que contiene los parámetros pasados como argumentos

```javascript
function args() {
  console.log(arguments)
}

args('hola!', 'otro parametro', 3) 
// ["hola!", "otro parametro", 3, callee: 'function', Symbol(Symbol.iterator): 'function']
```

_arguments_ nos da acceso a **n** cantidad de parámetros pero tengamos en cuenta que **no es un Arreglo**.

```javascript
function args() {
  return Array.isArray(arguments)
}

args([1,2,3]) // false
```

Si queremos saber cuantos parámetros puede recibir una función podemos usar la propiedad `length`.

```javascript
args.length // 0
// porque en la función `args` definimos 0 parámetros
```

### First Class Functions

Algo muy importante de JavaScript es que las funciones son de tipo `first class`, esto quiere decir que las funciones pueden ser tratadas igual que cualquier otro tipo de valor. Es decir, que podemos pasar una función como argumento, podemos asignar una función a una variable, podemos guardarla en un arreglo, o hasta 'retornarla' como resultado de una función.

Pasandola como arreglo:

```javascript
function firstClass (someValue) {
  console.log(someValue)
}

// exec toma una funcion y la ejecuta con su valor
function exec(fn, value) {
  fn(value)
}

exec(firstClass, 'Hola!') // Hola!
```

O siendo retornada:

```javascript
// veamos este caso mas complicado
// primero tomo una función que retorna otra funcion distinta
function loggerMaker(greetings) {
  return function (name) {
   // y en la segunda funcion tomo un nuevo valor para completar el log
    console.log(greetings + ' ' + name)
  }
}

// decir hola va a ser una función tambien
var decirHola = loggerMaker('Hola')

decirHola('Facu') // Hola Facu
```

### Expression vs Stament

##### Expression

Una _Expresión_ es una unidad de código que se evaluá a un valor. Por ejemplo, `a = 3`, es una expresión que devuelve el número `3` ó la expresión `1 + 2` que se evalua al mismo resultado. Las expresiones pueden ser escritas en cualquier lugar donde se espera un valor, por ejemplo: `console.log( 1 + 2 );`.

##### Statement

Los Statements, no producen un valor directamente, si no que _realizan una acción_, generalmente tienen adentro expresiones. Según el statement que usemos vamos a tener un comportamiento distinto, ejemplos de statements son `if`, `while`, `for`, etc...

En javascript, en términos de funciones podemos tener ambos `functions statements` y `functions expressions`, veamos la diferencia de ambos.

```javascript
function saludo(){
  console.log('hola');
}
```

El de arriba es un `function statement`, cuando esto es ejecutado por el intérprete no retorna nada, pero sí hace algo: reserva un espacio en memoria para la función que definimos (hoisting).

```javascript
var saludo = function(){
  console.log('Hola!');
}
```

En este segundo caso, estamos usando una `function expression`, en la cual estamos creando un objeto de tipo función (anónima) y además la estamos guardando en una variable llamada `saludo`. Justamente, la variable saludo va a apuntar a una dirección de memoria que contiene el objeto de tipo función que creamos anónimamente en una expresión (esa expresión retornó el objeto que se _guardó_ en la variable). Cuando declaramos una función anónima y la pasamos como argumento, también estamos haciendo una `function expression`.

### This

Habíamos dicho que cuando se crea el `execution context`, el interprete reserva el espacio de memoria para las variables (hoisting), guarda la referencia al `outer enviroment` y además 'setea' la variable `this`. Pero que función cumple?

##### Que es `this`?

`this` es una variable vinculada a las funciones que hace referencia al contexto en que se invoca dicha función, entonces nos permite obtener información sobre "quien" ejecutó la función o hasta modificarlo.

Esta variable es dinámica, va a apuntar a distintos objetos dependiendo en cómo fue usada en el programa, a veces causando confusiones.

### `this` y el Execution Context

##### Contexto global inicial

Este es el caso cuando ejecutamos código en el contexto global (afuera de cualquier función). En este caso `this` hace referencia al objeto `global`, en el caso del browser hace referencia a `window`.

En caso de estar en [strict mode](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Modo_estricto) el `this` queda como `undefined` si se lo ivoca desde el contexto global

```javascript
// En el browser esto es verdad:
console.log(this === window); // true

this.a = 37;

console.log(window.a); // 37
```

##### En el contexto de una función

Cuando estamos dentro de una función, el valor de `this` va a depender de _cómo sea invocada la función_.

```javascript
function f1(){
  return this;
}

// invoco a f1, y su resultado es el this de su contexto (window)
f1() === window; // true

window.fi() === window;  // true
```

En este ejemplo la función es invocada por el objeto global por lo tanto this hará referencia a `window`.

> Si usamos el modo `strict` de Javascript, el ejemplo de arriba va a devolver `undefined`, ya que no le deja al interprete _asumir_ que `this` es el objeto global.

##### Como método de un objeto

Cuando usamos el _keyword_ `this` dentro de una función que es un método de un objeto, `this` hace referencia al objeto sobre el cual se llamó el método, o mas tecnicamente el contexto de ejecución de la función es el objeto de quien es metodo.

```javascript
var obj = {
  prop: 37,
  fn: function() {
    return this.prop;
  }
};

console.log(obj.fn()); // 37
// this hace referencia a `obj`
```

En este caso, _no depende_ donde hayamos definido la función, lo único que importa es que la función haya sido invocada como método de un objeto. Por ejemplo, si definimos la función afuera:

```javascript
var obj = {prop: 37};

// declaramos la función
function loguea() {
  return this.prop;
}

//agregamos la función como método del objeto `o`
o.f = loguea;

console.log(o.f());
37
// el resultado es le mismo!
```

De todos modos, hay que tener cuidado con el keyword `this`, ya que pueden aparecer casos donde es contra intuitivo ( Como varias cosas de JavaScript ). Veamos el siguiente ejemplo:

```javascript
var obj = {
  nombre: 'Objeto',
  log: function(){
    this.nombre = 'Cambiado'; // this se refiere a este objeto, a `obj`
    console.log(this)  // obj

    var cambia = function( str ){
      this.nombre = str;  // Uno esperaria que this sea `obj`
    }

    cambia('Otra vez!');
    console.log(this);
  }
}
```

Si ejecutamos el código de arriba, vamos a notar que después de ejecutar el código, la propiedad `nombre` de `obj` contiene el valor `Cambiado` y no `Otra vez!`. Esto se debe a que el keyword `this` dentro de la función cambia **NO hace referencia a `obj`**, si no que hace referencia al objeto global. No podemos considerar al `this` como obj porque la función no es método de este Objeto, fíjense que no podemos hacer obj.cambia.
De hecho, si buscamos dentro del objeto global la variable `nombre`, vamos a encontrar con el valor `Otra vez!` que seteamos con la función `cambia`.

```javascript
window.nombre // Otra vez!
```

Esto quiere decir que no importa en donde estuvo declarada la función, si no **cómo la invocamos**.

> Prácticamente, no podemos saber a ciencia cierta que valor va a tomar el keyword hasta el momento de ejecución de una función. Porque depende fuertemente de cómo haya sido ejecutada.

Una de las formas de resolver este tipo de problemas es con patrón muy común que se basa en guardar la referencia al objeto que está en `this` antes de entrar a una función, donde no sé a ciencia cierta que valor puede tomar `this`. Mas adelante vamos a ver formas mas prolijas pero esta es una buena solucion con los conocimientos que tenemos.

```javascript
var obj = {
  nombre: 'Objeto',
  log   : function(){
    this.nombre = 'Cambiado'; // this se refiere a este objeto, a `obj`
    console.log(this); // obj

    var that = this; // Guardo la referencia a this

    var cambia = function( str ){
      that.nombre = str;  // Uso la referencia dentro de esta funcion
    }

    cambia('Otra vez!');
    console.log(this);
  }
}
```

De esta forma, `that` (puede tener cualquier nombre) va a apuntar al objeto `obj` (`this` apuntaba a ese objeto cuando hicimos la asignación). Ahora si, podemos usar `that` en vez de `this` y estar seguros qué es lo que va a tener adentro.

### Ejercicios

Como venimos haciendo, una vez que terminan la teoria de un modulo vamos a los ejericios del repo!

La carpeta `03-Funciones1` vuelve a la metodologia de leer los test y hacer la función en consecuencia.