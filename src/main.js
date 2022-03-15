import {filterData} from './data.js';
import data from './data/athletes/athletes.js';
// import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';

function mostrarPagina() {
    document.getElementById("homePage").style.display="none";
    document.getElementById("answer").style.display="block";
}

let buttonUno= document.getElementById("btnQuestions");
buttonUno.addEventListener("click",mostrarPagina);

const champions = document.getElementById("champions")
let arrayPlay = data.athletes;
 for (let i=0; i<arrayPlay.length; i++) {
    
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode(arrayPlay[i].name);
    newDiv.appendChild(newContent);
    champions.appendChild(newDiv); 
 }
//console.log(filterData(data.athletes));






