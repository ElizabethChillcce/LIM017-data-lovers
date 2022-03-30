/* eslint-disable no-console */
import {filterData, sortData, computeStats, filterByMedal} from './data.js';
import data from './data/athletes/athletes.js';
// import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(filterData(data.athletes, "condition"));
//const arrayPlay= filterData(data.athletes);

function mostrarPagina() {
    document.getElementById("homePage").style.display="none";
    document.getElementById("secondPage").style.display="block";
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

//Aqui hay variables de 2 funciones filter por medalla y sort p q ordene A-Z y Z-A los equipos
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


  //Tercera historia de usuario calculo de gènero
    let athleteGender = data.athletes;

    let numAtletasMasculinos=computeStats(athleteGender,'M');
    let numAtletasFemeninos = computeStats(athleteGender,'F');
    console.log('male', numAtletasMasculinos, 'female',numAtletasFemeninos);
  

function showPage(){
  document.getElementById("secondPage").style.display="none";
  document.getElementById("threePage").style.display="block";
}
let buttonGenderCalculation= document.getElementById("genderCalculation");
buttonGenderCalculation.addEventListener("click",showPage);




google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart); 
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['data.athletes', 'athleteGender'],
    ['male',     52],
    ['female',   48]
    
  ]);
var options = {
    title: 'Porcentaje de hombres y mujeres medallistas',
    pieHole: 0.4,
  };

var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}


let toReturn = document.getElementById('toReturn')
toReturn.addEventListener('click',()=>{
  document.getElementById("threePage").style.display="none";
  document.getElementById("homePage").style.display="block";
});
