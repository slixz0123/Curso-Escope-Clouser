/*   
Sí sí, muy lindo el ejercicio pero en la clase pasada de clousure ni siquiera se explicó que las funciones podrían 
tener un segundo parametro que iría a una función interna, tuve que ver los 
ejercicios de los demás para comprender. Definitivamente no creo ser el único que piense 
que NO está suficientemente explicado y que lo que llevamos hasta este punto no tiene la relación 
necesaria para que nosotros entendamos como solucionar el ejercicio satisfactoriamente.
*/

export function sumWithClosure(firstNum = 0) {
    return function (secondNum = 0) {
      return firstNum + secondNum
    }
  }

  // otro ejemplo 

  /*.  
  Los "closures" (cierres) en JavaScript son funciones que tienen acceso a las variables de su
   ámbito exterior, incluso después de que la función externa haya finalizado su ejecución.
    Esto significa que un closure recuerda y accede a las variables de la función que lo contiene, 
    incluso cuando esa función ya no está en ejecución.

Aquí tienes un ejemplo sencillo que ilustra cómo funciona un closure:

  */

function saludarConPrefijo(prefijo) {
    return function(nombre) {
      console.log(prefijo + ' ' + nombre);
    };
  }
  
  // Creamos una función usando la función "saludarConPrefijo"
  var saludarComoDr = saludarConPrefijo('Dr.');
  
  // Llamamos a la función creada y esta todavía recuerda el "prefijo"
  saludarComoDr('Smith'); // Imprime: Dr. Smith
  saludarComoDr('Johnson'); // Imprime: Dr. Johnson


  /*. 
  En este ejemplo, la función saludarConPrefijo devuelve otra función.
    Cuando se invoca saludarConPrefijo('Dr.'), se crea una función que
    concatena el prefijo 'Dr.' con el nombre que se le pase como argumento.
    A pesar de que la función saludarConPrefijo ya finalizó su ejecución,
    la función retornada (saludarComoDr) retiene el acceso al valor de prefijo.
    Esto es un ejemplo de closure, ya que la función interna saludarComoDr 
    recuerda y utiliza la variable prefijo del ámbito exterior en el que fue creada.
  
  */
  