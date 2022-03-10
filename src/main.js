import { example,  } from './data.js';
import athletes from './data/athletes/athletes.js';
// import data from './data/lol/lol.js';
console.log(athletes[0]);
import data from './data/athletes/athletes.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(athletes, data);

function mostrarPagina() {
    document.getElementById("homePage").style.display="none";
    document.getElementById("answer").style.display="block";
}

let buttonUno= document.getElementById("btnQuestions");
buttonUno.addEventListener("click",mostrarPagina);

let arrayPlay = data. athletes;
let array = [];
for (let i=0; i<arrayPlay.length; i++) {
    
    array.push( arrayPlay[i]. name);
     
 }
 console.log(array);
