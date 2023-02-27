## Tipos de Datos

### Static Typing vs Dynamic Typing

Todos los lenguajes de programación tienen características distintas que los caracterizan. Una de ellas es la forma con la que trabajan con variables y tipos de datos. JavaScript en particular tiene lo que se conoce como `tipado dinámico` o `dynamic typing`.

Esto quiere decir que no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por si mismo. En otros lenguajes, al declarar una variable tenemos que avisarle qué tipos de datos vamos a guardar en ella (`static typing` o `tipado estático`).

Otra cosa importante, es que JavaScript nos permite __cambiar__ el tipo de datos que guardamos en una variable, por ejemplo, podemos tener una variable con un número y luego guardar una string en la misma variable, en otros lenguajes hacer esto nos resultaría en un error.

> Recuerden que cuando queremos convertir algo de un tipo de datos a otro, usamos el termino _castear_.

### Dato Nativos y Datos Complejos

JavaScript tiene 6 tipos de datos nativos, son tipos de datos básicos que vienen previamente definidos con el lenguaje: 

* _String_: Una secuencia de caractéres.
* _Number_: Representa un numero real.
* _Undefined_: Valor no definido.
* _Null_: Valor nulo, tiene mas peso que `undefined`.
* _Boolean_: `true` o `false`.
* _Symbol_: Tipo de dato nuevo (ECMAScript 6), no lo vamos a usar.

Y un único tipo de dato complejo, los _Objetos_. Todos los otros elementos son casos particulares de los Objetos (Arreglos, Funciones, Dates, etc)

### Mutabilidad e inmutabilidad

De acuerdo con que tipo de dato estemos trabajando van a tener comportamientos distintos, analicemos la inmutabilidad de ellos.

*__Inmutable__* se refiere a que no puede ser modificado una vez definido, puede ser remplazado por un valor totalmente distinto, pero no modificado.

###### Los valores inmutables son todos los datos nativos de JavaScript

Probemoslo en la consola del browser.

```javascript
// guardo un string en la variable `str`
var str = 'hola'

// miro la posición 2 del string
str[2] // 'l'

// le asigno una 'r' a esa posición
str[2] = 'r' // 'r'

// finalmente el string no cambio
str // 'hola'
```

> Si quisiera cambiar el valor en str podría haberle asignado un nuevo string que remplace al anterior `str = 'chau'` pero esto no modifica al anterior, solo lo pisa con uno nuevo.

Un valor __*mutable*__, se imaginaran, se refiere a los elementos que pueden ser modificados sin tener que cambiar el elemento en sí.

#### Los valores mutable son todos los tipos de datos complejos de JS.

```javascript
// creo un objeto en la variable `obj`
var obj = { nombre: 'facu' }

// muestro la propiedad del objeto
obj.nombre // 'facu'

// defino una función que cambie ese objeto
function cambiarPropiedad(objeto) {
  objeto.nombre = 'toni'
}

// invoco a la función
cambiarPropiedad(obj);

// veo la propiedad ya modificada
obj.nombre // 'toni'
```

### Object literal
  
Los objetos son el tipo de datos mas usados en JavaScript, son estructuras no ordenadas de propiedades y valores.
Cuando declaramos uno con su estructura completa los llamamos object literals.

```javascript
var obj = {
  nombre: 'facu',
  edad: 25,
  ciudad: 'buenos aires',
}
```

### Keys & Values

Un Objeto se estructura por una dupla de `keys` y `values` que almacenan información.

El `key`, llamado **propiedad** en JavaScript es un string con algunas restricciones que nos da información acerca del valor asociado que guarda.

```javascript
var obj = {
  nombre: 'facu', // nombre es la propiedad, facu es el value
  edad: 26,
  ciudad: 'buenos aires',
}
```

Esta propiedad tiene que ser un **string**, dicho string puede no necesitar comillas como pueden ver en el ejemplo, pero esto solo si JS puede convertirlo a string, siempre y cuando no usemos caracteres especiales como por ejemplo `-`.

```javascript
var obj = {
  // los espacios pueden agregarlos si ponen comillas, traten de evitarlos.
  'prop con espacios': 'hola',
  // la estructura `camelCase` nos permite usar varias palabras en una sola propiedad de forma sencilla,
  // usa mayúscula para cada inicio de palabra luego de la primera.
  propSinEspacios: 'chau',
}
```

El _value_ de la propiedad puede ser cualquier tipo de dato, por eso si van a escribir un _string_ no se olviden de las comillas.

### Dot & Bracket notation

Hay dos formas de acceder a las propiedades de un objeto

**Dot notatio**: la propiedad del objeto se accede a partir de su nombre luego del objeto al que hacemos referencia con un punto (`.`) entre medio.

```javascript
// a partir del ejemplo anterior
obj.nombre // 'facu'

obj.ciudad // 'buenos aires'
```

No se puede acceder a la propiedad si el nombre esta guardado en una variable, ya que buscara la propiedad literal de lo que buscamos

```javascript
// guardo una variable con el valor 'nombre'
var prop = 'nombre'

// ahora busco la propiedad nombre usando la variable prop
obj.prop // undefined
// nos devuelve `undefined` porque esta buscando literalmente la propiedad prop
```


**Bracket notation**: la propiedad del objeto se accede mediante corchetes y el nombre de la propiedad pasado como string.

```javascript
obj['nombre'] // 'facu'

obj['ciudad'] // 'buenos aires'
```

Este método puede ser usado para buscar propiedades a partir de variables

```javascript
// guardo una variable con el valor 'nombre'
var prop = 'nombre'

// ahora busco la propiedad nombre usando la variable prop
obj[prop] // 'facu'
// busca a partir del valor de la variable y no la variable en si, por lo que consigue el valor que buscábamos
```

Ahora ya pueden pasar a la carpeta `01-Objetos` del repositorio y trabajar con los test!