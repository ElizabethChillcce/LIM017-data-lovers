import {filterData} from './data.js';
import data from './data/athletes/athletes.js';
// import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(filterData(data.athletes, "condition"));
const arrayPlay = filterData(data.athletes);

function mostrarPagina() {
    document.getElementById("homePage").style.display="none";
    document.getElementById("answer").style.display="block";
}

let buttonUno= document.getElementById("buttonOlympics");
 buttonUno.addEventListener("click",mostrarPagina);

const Datos = document.getElementById("Datos")

const selectSports = document.getElementById("selectSport")
selectSport.addEventListener('change', (e) => {
//console.log(filterData(data.athletes, e.target.value ))
  const resultSport = filterData (data.athletes, e.target.value )
  const tableBody = document.getElementById("Datos")
  let htmlrow ="";
  for (let i=0; i<resultSport.length; i++){

 htmlrow +=
 `
  <tr>
    <td>${resultSport[i].name}</td>
    <td>${resultSport[i].team}</td>
    <td>${resultSport[i].age}</td>
    <td>${resultSport[i].medal}</td>
    </tr>
   `; 
  console.log(htmlrow);
}
Datos.innerHTML = htmlrow;
})
//let tableSport = (mostrar) => {
/* Datos.innerHTML = ``;
 mostrar.forEach ((z)=> {
   Datos.innerHTML += resultSport(z);
  return(resultSport);
 });
 }
 tableSport(resultSport)

//return (resultSport);*/

 //const arrayPlay = filterData(data.athletes);
//for (let i=0; i<arrayPlay.length; i++) {
    
 //let newDiv = document.createElement("div");
 // let newContent = document.createTextNode(arrayPlay[i].name);
 //   newDiv.appendChild(newContent);
 //    champions.appendChild(newDiv);
 // }
//console.log(filterData(data.athletes));

//tabla








