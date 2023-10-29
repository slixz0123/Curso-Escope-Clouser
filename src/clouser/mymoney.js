
//alcancia  con clousers 

function moneyBox(){
 let saveConins = 0;
 
 
  function countcoins(coins){
    saveConins +=coins;
    console.log(` mi dinero total es : ${saveConins}`)
 }
 return countcoins;
}

const mimoneybox = moneyBox();

mimoneybox(5)
mimoneybox(7)