import {filterData} from './data.js';
import data from './data/athletes/athletes.js';
// import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(filterData(data.athletes, "condition"));
function mostrarPagina() {
    document.getElementById("homePage").style.display="none";
    document.getElementById("answer").style.display="block";
}

let buttonUno= document.getElementById("buttonOlympics");
 buttonUno.addEventListener("click",mostrarPagina);

const champions = document.getElementById("champions")
const selectSports = document.getElementById("selectSport")
selectSport.addEventListener('change', (e) => {
    console.log(filterData(data.athletes, e.target.value ))
})
// let arrayPlay = filterData(data.athletes,'Rowing' );
// for (let i=0; i<arrayPlay.length; i++) {
    
   // let newDiv = document.createElement("div");
    // let newContent = document.createTextNode(filterData[i].name.team.age.medal);
    // newDiv.appendChild(newContent);
    // champions.appendChild(newDiv); 
 // }
//console.log(filterData(data.athletes));






