// estas funciones son de ejemplo

export function filterData(data, sport) {
  // console.log(data.filter(arrayPlay));
 return data.filter((ath) => {
    if (ath.sport === sport) {
      return true;
    }
    return false;
  });
 
  
}

//const sorData = function () {} 
//export const sortData = (data, sortOrder ) => {
//  const ordenado =
//  data.sort((a, b)=> {
export function sortData(data) {
   data.sort((a, b)=> {
   if (a.team > b.team) {
    return 1;
  }
  else if (a.team < b.team) {
    return -1;
  }
  return 0;
});
/*if(sortOrder==="A-Z"){
  return data;
}
else{
  return data.reverse();
 }*/
 return data;
}


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
