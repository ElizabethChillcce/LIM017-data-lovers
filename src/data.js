/* eslint-disable no-undef */
export function filterData(data, sport) {
  // console.log(data.filter(arrayPlay));
 return data.filter((ath) => {
    if (ath.sport === sport) {
      return true;
    }
    return false;
  }); 
}

export const filterByMedal = (data, medal) => {
  let filteredData = [];
  data.forEach((ath) => {
    if (ath.medal === medal) {
      filteredData.push(ath)
    }
  })
  return filteredData;
}

export function sortData(data, sortOrder) {

 data.sort((a, b)=> {
   if (a.team > b.team) {
    return 1;
  }
  else if (a.team < b.team) {
    return -1;
  }
  return 0;
});
if(sortOrder=== "ascendente"){
  return data;
}
else if(sortOrder==="descendente"){
  return data.reverse();
 }      //esto es importante si comentamos el if y descomentamos este retur nos da solo los paises a-z
}

export function computeStats(dataAtletas, generoMF) {
 let arrGender= dataAtletas.filter(athlete=>athlete.gender == generoMF);
 let porcentaje = (arrGender.length*100)/dataAtletas.length;
 //return arrGender.length;   // este return sirve p ver cuantos atletas participan M y F sin porcentajes
return porcentaje;   //este return nos permite ver el porcentaje de F y M
}
// eslint-disable-next-line no-console


// if (ath.age>= 20 && ath.age <29)

/*export function sortData(data) {
  for (let i=0; i<arrayPlay.length -1; i++) {
  console.log(arrayPlay[i].sport);
} 
  console.log(data.sort(arrayPlay));

}*/


//export const sortData = () => {
  //return 'OMG';
//};

//  const ordenado =