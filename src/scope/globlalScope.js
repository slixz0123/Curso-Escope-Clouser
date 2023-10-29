// global scope

// palabra reservada var,

var a; // vamos a declarar la variable a
var b = 'b'; // vamos a declarar la variable b
b= 'bb' // reasignamos el valor de la variable b
var a = 'aaa' //. redelcaracion 

//global scope 

// acceder a las variables  donde queramos
 var fruit ='Apple';

 function bestfruit(){
    console.log(fruit);
 }
 bestfruit();

 // ejemplo


function coutries(){
    country = 'Ecuador'; // si asigno de esta manera la variable es globla para evitar eso se utiliza var let o const
    console.log(country);
}

coutries();
console.log(country);





