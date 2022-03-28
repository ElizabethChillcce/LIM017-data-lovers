/* eslint-disable no-console */
import {filterData, sortData, computeStats} from './data.js';
import data from './data/athletes/athletes.js';
// import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(filterData(data.athletes, "condition"));
//const arrayPlay= filterData(data.athletes);

function mostrarPagina() {
    document.getElementById("homePage").style.display="none";
    document.getElementById("answer").style.display="block";
}

let buttonUno= document.getElementById("buttonOlympics");
 buttonUno.addEventListener("click",mostrarPagina);

const Datos = document.getElementById("Datos")

const selectSport = document.getElementById("selectSport")
selectSport.addEventListener('change', (e) => {
//console.log(filterData(data.athletes, e.target.value ))
  const resultSport = filterData (data.athletes, e.target.value )
  //const tableBody = document.getElementById("Datos") // esto lo voy a usar p la primera historia

  let htmlrow ="";
  for (let i=0; i<resultSport.length; i++){
 htmlrow +=`
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

let teamWord = document.getElementById('teamWord'); 
teamWord.addEventListener('click', ()=> {
  let dataOrdenada=sortData(data.athletes); //asignando una variable p poder aplicar metodo map
  let dataTeam=dataOrdenada.map(e=>e.team); //metodo map para solo usar una propiedad team
  //console.log(dataTeam);
//eliminando elementos repetidos del array data.team
  let resultTeam = dataTeam.reduce((acc,item)=>{
    if(!acc.includes(item)){
      acc.push(item);
    }
    return acc;
  },[])

  console.log(resultTeam); 
  })

  let genderCalculation = document.getElementById('genderCalculation');
  genderCalculation.addEventListener('click', ()=> {
  

  })





//otra forma de en vez de usar el for clàsico usar el forEach
/*resultSport.forEach( sport => {
  htmlrow +=`
  <th>Nombre</th>
   <th>Pais</th>
   <th>Edad</th>
   <th>Medalla</th>
  <tr>
  <td>${sport.name}</td>
  <td>${sport.team}</td>
  <td>${sport.age}</td>
  <td>${sport.medal}</td>
  </tr>
 `;
});
Datos.innerHTML = htmlrow;
})*/

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



// asignando una variable para data.athletes p asi poder separar los valores masculinos y femeninos
let athleteGender = data.athletes;

let numAtletasMasculinos=computeStats(athleteGender,'M');
let numAtletasFeminos = computeStats(athleteGender,'F');

console.log('male', numAtletasMasculinos, 'female',numAtletasFeminos);




