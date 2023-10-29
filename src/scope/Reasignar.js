 var FirstName ; // undifined DECLARAMOS
 FirstName = 'Camilo'; // ASIGNAMOS

 var lastName = "David"; //asignamos y declaramos
 lastName= "ana"; // volvimos a asignar
 console.log(lastName)

 // se puede redeclar y reasignacion 

 var secondName= "David";
 var secondName = "ana"; // reasignar 
 console.log(secondName);

 //----------- USO LET ------------------------------

 // se puede  reasignar pero no redeclarar
 let fruit = 'Apple' // declarar y asignat 
 fruit = "kiwi" ; // con let e puede reasignar 

  //  let fruit = "banana" // da error devido a que no puedes redeclarar la variable 

//----------- USO const ------------------------------
// inmutabilidad  es decir no se puede ni reasignar ni redeclarar 
const animal = 'dog'; // declara y se asigna 

animal ='cat' // reasignando  x no se puede por que es una constante 

console.log(animal);// el resultado seria un error  dog debido a que es una constante y se va a mantener el valor de una constante 

 const  vehiculos = [];
 vehiculos.push("carro"); // se esta ingresando o eliminando elementos del array.... por ende no es tan imutable 
 console.log(vehiculos);
 // lo que hace es que no se esta reasignando o redeclarando, sino se esta trbajando sobre el array mas no la variable 
 