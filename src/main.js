import {filterData} from './data.js';
import data from './data/athletes/athletes.js';
// import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(filterData(data.athletes, "condition"));
function mostrarPagina() {
    document.getElementById("homePage").style.display="none";
    document.getElementById("answer").style.display="block";
}

let buttonUno= document.getElementById("btnQuestions");
buttonUno.addEventListener("click",mostrarPagina);

const champions = document.getElementById("champions")
let arrayPlay = filterData(data.athletes, "condition");
 for (let i=0; i<arrayPlay.length; i++) {
    
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode(arrayPlay[i].age);
    newDiv.appendChild(newContent);
    champions.appendChild(newDiv); 
 }
//console.log(filterData(data.athletes));






