function greeting(){
let username = 'gato';

console.log(username);

if (username === 'gato'){
    console.log(`hola ${username}!`);
}
}
greeting()
//console.log(username);  <----- error por que no se accede a esta variable debido a que solo se encuentra en esta funcion de manera local no global 
