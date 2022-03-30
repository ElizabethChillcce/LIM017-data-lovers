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


  //variable p los porcentajes de hombres y mujeres
  let genderCalculation = document.getElementById('genderCalculation');
  genderCalculation.addEventListener('click', ()=> {

    let athleteGender = data.athletes;

    let numAtletasMasculinos=computeStats(athleteGender,'M');
    let numAtletasFemeninos = computeStats(athleteGender,'F');
    console.log('male', numAtletasMasculinos, 'female',numAtletasFemeninos);
 
  }) // Este parentesis y corchete es importante p el addEventListener de aqui arriba

    //calculo correcto
  /* let athleteGender = data.athletes;

  let numAtletasMasculinos=computeStats(athleteGender,'M');
  let numAtletasFemeninos = computeStats(athleteGender,'F');
  console.log('male', numAtletasMasculinos, 'female',numAtletasFemeninos);

})  */





 google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart); 
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ]);
var options = {
    title: 'My Daily Activities',
    pieHole: 0.4,
  };

var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}


