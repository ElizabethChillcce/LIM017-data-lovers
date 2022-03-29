/* eslint-disable no-console */
import {filterData, sortData, computeStats, filterByMedal} from './data.js';
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

// team ordenados pero estan menu hambuerguesa
/*  let teamWord = document.getElementById('teamWord'); 
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
  })   */


//sofi en el selector
 const selectTeam = document.getElementById("selectTeam");
 const dataTeam = document.getElementById("Datos");
selectTeam.addEventListener("change", (event)=>{
  dataTeam.innerHTML= '';
  //console.log(selectTeam.options,selectTeam.selectedIndex)
  // const option = selectTeam.options[selectTeam.selectedIndex].value;
 // console.log(option)
 const onlySilver =filterByMedal(data.athletes, 'Silver')
 //console.log(event.target.value)
  const sortedData = sortData(onlySilver, event.target.value)
  sortedData.forEach(ath=>{
  const row = `<tr>
   <td>${ath.name}</td>
   <td>${ath.team}</td>
   <td>${ath.age}</td>
   <td>${ath.medal}</td>
 </tr>
   `
   dataTeam.innerHTML += row;
  })
 //console.log(sortData(data.athletes, event.target.value))
}) 






  //todavia no se usa esta variable
 /*  let genderCalculation = document.getElementById('genderCalculation');
  genderCalculation.addEventListener('click', ()=> {
  

  }) */

  let athleteGender = data.athletes;

  let numAtletasMasculinos=computeStats(athleteGender,'M');
  let numAtletasFemeninos = computeStats(athleteGender,'F');
  
  console.log('male', numAtletasMasculinos, 'female',numAtletasFemeninos);



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




