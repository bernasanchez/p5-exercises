## Constructores

### Herencia y la cadena de prototipos

En programación la herencia es la capacidad de ciertos elementos de adquirir propiedades o metodos de otros elementos que podrian englobarlos. Asi como una persona hereda caracterizticas de sus padres, un modelo informatico puede heredar, osea copiar estructuras, de otro modelo que se defina mas generico.

Cuando trabajamos en _JavaScript_ los conceptos de herencia son distintos a los lenguajes típicos de Programación Orientada a Objetos. Esto se debe a que utilice `Prototype Inheritance` como método de herencia.

#### Prototype Chain

En lo que a herencia se refiere, JavaScript sólo tiene una estructura: objetos. Cada objeto tiene un enlace interno a otro objeto: su __*prototype*__. Ese objeto _prototype_ tiene su propio _prototype_, y así sucesivamente hasta que se alcanza un objeto cuyo _prototype_ es `null`. Por definición, `null` no tiene _prototype_, y actúa como el final de esta cadena de prototipos (_Prototype Chain_).

Si queremos ver estos _prototypes_ podemos encontrarlos en la propiedad `__proto__`. Prueben el siguiente codigo en la consola.

```javascript
var a = [1,2,3]

a.__proto__
```

> Podemos ver que en la respuesta están todas los métodos de los Arreglos que conocemos.

### La Propiedad 'proto' y la Prototype Chain

![protoypeInheritance](https://pledu-plataforma5.s3.amazonaws.com/3a0e391b-2b89-4ae9-9bca-4544cb391a94/protoypeInheritance.png)

En el ejemplo de arriba tenemos al objeto `Objeto`, que contiene dos propiedades `propiedad1` y `propiedad2`. Por lo tanto si quisiera acceder a cualquiera de esas propiedades podría usar la `dot notation`: `Objeto.propiedad1`. Ahora, como se ve en la imagen `Objeto` tiene una referencia a otro objeto llamado `proto`, y a su vez este objeto tiene una propiedad llamada `propiedad3`. Ahora lo interesante, es que si nosotros queremos acceder a la `propiedad3` del objeto `Objeto`, lo vamos a poder hacer! Cuando escribimos `Objeto.propiedad3` lo que ocurre es que el intérprete busca en el objeto por esa propiedad, y si no la encuentra antes de lanzar un error, busca en el objeto `proto` (que lo tienen _todos_ los objetos) a ver si no encuentra esa propiedad, si la encuentra la devuelve.

![protochain](https://pledu-plataforma5.s3.amazonaws.com/3a0e391b-2b89-4ae9-9bca-4544cb391a94/protochain.png)

De hecho, el objeto al que hace referencia `proto` también podría tener una referencia a otro `proto`. Digamos el objeto al que hace referencia el segundo `proto` contiene la propiedad `propiedad4`. Si nosotros intentáramos acceder a `propiedad4` desde `Objeto` usando `Objeto.propiedad4`, el interprete primero buscaría en `Objeto`, como no está esa propiedad ahí entonces va a buscar en el objeto al que hace referencia `proto`, como tampoco está ahí se fija si ese objeto tiene una referencia en `proto`, como la tiene, va a buscar la propiedad en ese objeto al que hace referencia. En nuestro ejemplo, finalmente encuentra la `propiedad4` en este último y por lo tanto la accede. Esto es gracias al __Prototype Chain__.

> Las propiedades _parecen_ que están en el Objeto que intentamos acceder, pero en realidad están en _otro_ objeto y son accedidas a traves del __prototype chain__.

Lo más importante de esto, es que si tuviéramos un segundo objeto: `Objeto 2`, cuya propiedad `proto` hace referencia al _mismo objeto_ al que hacia referencia el `proto` de `Objeto`, entonces ambos objetos __compartirían__ un subset de propiedades. En este caso, si quisiéramos acceder a `Objeto2.propiedad3` (que no existe en el objeto 2), la encontraríamos siguiendo el prototype chain, y accederíamos a la misma propiedad que si hiciéramos `Objeto1.propiedad3`.

![protoypeInheritance3](https://pledu-plataforma5.s3.amazonaws.com/3a0e391b-2b89-4ae9-9bca-4544cb391a94/protoypeInheritance3.png)

Veamos algunos ejemplos:

```javascript
var persona = {
  getNombre: function() {
    return this.nombre + ' ' + this.apellido;
  }
}

var facu = {
  nombre: 'Facundo',
  apellido: 'Velasco'
}

// esta no es una buena forma de asignar protoypes
// es solo de demostracion
juan.__proto__ = persona;

// Ahora podemos usar los métodos de `persona`
juan.getNombre();
'Facundo Velasco'
```

#### Todo elemento es un Objeto

Como ya sabíamos, todo tipo de dato complejo en JavaScript son Objetos, sin embargo hay un objeto especial, que no tiene un prototipo. Este objeto se llama `base object`. Se encuentra siempre al final del prototype chain, y termina ahí porque `base object` no tiene un prototype.

De hecho, `base object` tiene definido una serie de propiedades y métodos. Y como todos los demás objetos lo tiene en su cadena de prototipos, entonces, estos métodos y propiedades son accesibles por todos los objetos de JavaScript. Por ejemplo, el método `toString` está definido en el `base object`. 

En el caso de cualquier función, su prototipo por defecto es un objeto llamado `Empty`, que es a su vez una función. Cualquier función que creemos va a tener este proto y por ende van a tener acceso a todas las propiedades y métodos de `Empty`. Por ejemplo, la funciones `apply`, `bind` y `call` están definidas en este Objeto.

Con los arreglos pasa algo similar, todos los arreglos tiene como proto a un `arreglo base`. En este último se encuntran definido todos los métodos que usamos en los arreglos, como `push`, `shift`, `lenght`, etc...

Veamos un ejemplo:

```javascript
var a = {}; // un objeto vacío
var b = function(){ };
var c = [];

a.__proto__ // veamos que tiene en su proto
// tiene Object {} que es el `base object`

a.__proto__.toString // contiene este método

// función b
b.__proto__ // función Empty()
b.__proto__.bind // función bind!

// Arreglo
c.__proto__ // [] arreglo vacío base
c.__proto__.push // función push!

// y el proto del proto?
a.__proto__.__proto__ // null
b.__proto__.__proto__ // Object {}
c.__proto__.__proto__ // Object {}
```

Esta es la razón por la que tenemos acceso a todos esas propiedades y métodos que vienen `por defecto` y que usamos a menudo.

##### hasOwnProperty

El metodo `hasOwnProperty` nos permite saber si la propiedad es del objeto o si la hereda por su `proto`.

```javascript
// siguiendo con el ejemplo del topico anterior
facu.hasOwnProperty('getNombre');
false

facu.saludo = function() { console.log('hola!') }

facu.hasOwnProperty('saludo');
true
```

### Constructor Functions

Vimos como funciona la propiedad _proto_ y que contiene un vinculo que los relaciona al siguiente elemento del `prototype chain`, pero si analizamos una función podemos ver que hay una variable `prototype` ademas de `__proto__`.

![prototype](https://pledu-plataforma5.s3.amazonaws.com/3a0e391b-2b89-4ae9-9bca-4544cb391a94/prototype.png)

#### `__proto__` !== `prototype`

Esta variable `prototype` no es otra manera de llamar a _proto_ es un objeto totalmente distinto que aparece **solo** en las funciones, tiene un método inicial llamado `constructor` y se utiliza solo cuando una función esta siendo usadas como __*constructor*__.

### Que es un constructor?

Un `constructor` es una función que tiene como finalidad crear un nuevo objeto. Para entender como funciona vamos a tener que verlo funcionando.

Veamos la estructura de un constructor

```javascript
function Persona(name, surname) {
  this.nombre = name;
  this.apellido = surname;
}

var facu = new Persona('Facundo', 'Velasco')

facu // Persona {nombre:'Facundo', apellido:'Velasco'}
```

> Los nombre de las funciones constructoras se ponen con la primer letra en mayúscula por convención, así poder reconocer cuando una función es un constructor.

Qué ven de raro en la función `Persona()`? por empezar no retorna nada, y además no está claro a qué hace referencia el keyword `this`. Pero si nos fijamos, cuando la usamos con `new`, vemos que nos creó un objeto con las propiedades definidas en esa función.

##### `new`

Para empezar a entender, primero tenemos que saber el `new` es en realidad un operador en JavaScript. Lo que hace es operador es, primero, crear un objeto vacío. Luego invoca la función que le pasamos como argumento, con la particularidad de que la invoca con el contexto de ejecución ligado a dicho objeto (call), de tal forma en esa función el keyword `this` hace referencia a este objeto nuevo. Una vez que la función pasada por parametro ya corrio retorna ese objeto que había creado (y que deberia haber sido modificado por la función ejecutada) como el objeto creado.

```javascript
// una version simplificada de las funcionalidades de new se veria de esta forma
function new (constructor){
  var a = {};
  constructor.call(a);
  return a;
}
```

Y asi podemos crear muchas _**instancias**_ distintas a partir de esta función constructora.

```javascript
var toni = new Persona('Toni', 'Tralice');
var santi = new Persona('Santi', 'Scanlan');
var guille = new Persona('Guille', 'Aszyn');
```

> No te olvides que estamos invocando una función, asi que podemos utilizar adentro __todo__ los que sabemos de funciones.

Si queremos saber si un objeto es una instancia de cierto constructor podemos usar el metodo `instanceof`

```javascript
toni instanceof Persona
true
```

### Methods in `.prototype`

Se habrán preguntado que tiene que ver el objeto `prototype` que comentamos antes, con los constructores que hasta ahora vimos.

Cuando el constructor crea su instancia y la retorna le asigna una propiedad `__proto__` ya que esta instancia va a ser un objeto. Esta propiedad _proto_ va a apuntar a nada menos que la propiedad `prototype` de la función constructora.

Entonces que significa todo eso? Que inicialmente `prototype` solo va a tener el objeto `constructor` dentro, pero que si agregáramos nuevos métodos al `prototype`, la instancia creada también los podrá acceder mediante el `prototype chain`.

Veamos un ejemplo.

```javascript
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// agrego al objeto prototype del constructor el método hablar
Persona.prototype.hablar = function(){ 
  return this.nombre+' tiene '+this.edad+' años.'
}

// en el momento de la invocación con 'new' se le asigna a 'facu' el prototype
// de la función, entonces la instancia va a tendrá acceso al método
var facu = new Persona('facu', 26);

facu.hablar() // 'facu tiene 26 años.'

facu.__proto__.hablar
```

Mediante el objeto `prototype` puedo asignarle métodos a las instancias, y como estas hacen referencia a `prototype` los métodos no tienen que ser agregados antes de las instancias.

```javascript
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

var facu = new Persona('facu', 26);

Persona.prototype.hablar = function(){ 
  return this.nombre + ' tiene ' + this.edad + ' años.'
}

facu.hablar() // 'facu tiene 26 años.'
```

Y conociendo el `prototype chain` podemos agregar elementos a cualquier tipo de dato que podamos apuntar.

```javascript
// Puedo seleccionar el constructor de "strings" por ejemplo
String.prototype.saludar = function() {
  return 'Hola soy un string, digo: ' + this;
}

'como estas?'.saludar() // 'Hola soy un string, digo: como estas?'
```

Si quisieramos saber a que prototype corresponde, podriamos usar el metodos `getPrototypeOf()`.

```javascript
// siguiendo el ejemplo de más arriba
Object.getPrototypeOf(facu) // Object {hablar: 'function', constructor: 'function'}

// lo que hace es mostrar el `prototype` del objeto pasado
Object.getPrototypeOf(facu) === Persona.prototype // true
```