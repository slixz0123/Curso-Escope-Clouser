// var let const

function fruits(){
    // variales definidas solo en este bloque  se usa let y const 
    if(true){ // definiendo una validacion 
    // definir unas variables 
    var fruit = 'apple'; // function scope
    let fruit2 = 'straw'; // block scope
    const fruit3 = 'banana'; // block dscope
    console.log(fruit2); // let se queda en el bloque del if debido a que pertenece solo a un bloqie
    console.log(fruit3);
    }
    console.log(fruit); // si hay como acceder debido a que tiene var  de manera global
    
}
fruits()
// var = varible global 


