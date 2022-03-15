// estas funciones son de ejemplo

export function filterData(data, condition) {
  // console.log(data.filter(arrayPlay));
 return data.filter((ath) => {
    if (ath.age>= 30 && ath.age < 40) {
      return true;
    }
    return false;
  });
 
  
};

export function sortData(data) {
  for (let i=0; i<arrayPlay.length -1; i++) {
  console.log(arrayPlay[i].sport);
} 
  console.log(data.sort(arrayPlay));

}


//export const sortData = () => {
  //return 'OMG';
//};
