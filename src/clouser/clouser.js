
// los clouser pueden acceder a otras variables 

function greet( ){
    let userName = "Camilo";

    function displaUsername(){
        return `hola ${userName}`;

    }
    return displaUsername();
}

const g = greet();
console.log(g());