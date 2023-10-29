// un clouser permite acceder al ambito de una funcion exterior desde una funcion interior 
//los clousurs no siempre son utilizados 

// clouser es una funcion aacede a una variable de fuera de su cntexto 

//alcance de las variables 
const myGlobal = 0;

function miFincion ( ){
    const myNumber  =1 ;
    console.log(myGlobal); 
    function parent(){ // funcion interna = esto ya es un clouser 
        const inner = 2;
        console.log(myNumber, myGlobal);


        function mifuncion3(){ //funcion interna de interna
            console.log(inner,myNumber,myGlobal);
            
        }
        return mifuncion3();
    }
    return parent();
}

miFincion();


// ejercicio de que el se puede  retornar una funcion a otra 

/*. 
Sí sí, muy lindo el ejercicio pero en la clase pasada de clousure ni 
siquiera se explicó que las funciones podrían tener un segundo parametro 
que iría a una función interna, tuve que ver los ejercicios de los demás 
para comprender. Definitivamente no creo ser el único que piense que NO 
está suficientemente explicado y que lo que llevamos hasta este punto no 
tiene la relación necesaria para que nosotros entendamos como solucionar 
el ejercicio satisfactoriamente.

*/
export function sumWithClosure(firstNum = 0) {
    return function (secondNum = 0) {
      return firstNum + secondNum
    }
  }
