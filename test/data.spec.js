import { it } from 'eslint/lib/rule-tester/rule-tester';
import { filterData, filterByMedal, sortData, computeStats } from '../src/data.js';
const data = {
  athletes: [
    {
      "name": "Giovanni Abagnale",
      "gender": "M",
      "height": "198",
      "weight": "90",
      "sport": "Rowing",
      "team": "Italy",
      "noc": "ITA",
      "age": 21,
      "event": "Rowing Men's Coxless Pairs",
      "medal": "Bronze"
    },
    {
      "name": "Patimat Abakarova",
      "gender": "F",
      "height": "165",
      "weight": "49",
      "sport": "Taekwondo",
      "team": "Azerbaijan",
      "noc": "AZE",
      "age": 21,
      "event": "Taekwondo Women's Flyweight",
      "medal": "Bronze"
    },
    {
      "name": "Luc Abalo",
      "gender": "M",
      "height": "182",
      "weight": "86",
      "sport": "Handball",
      "team": "France",
      "noc": "FRA",
      "age": 31,
      "event": "Handball Men's Handball",
      "medal": "Silver"
    }
  ]
} 
describe('filterData Test', () => {

  it('returns `filterData`', () => {
    expect(filterData(data.athletes, 'Handball')).toEqual([{
      "name": "Luc Abalo",
      "gender": "M",
      "height": "182",
      "weight": "86",
      "sport": "Handball",
      "team": "France",
      "noc": "FRA",
      "age": 31,
      "event": "Handball Men's Handball",
      "medal": "Silver"
    }]);
  });


  it('returns `filterData`', () => {
    expect(filterData(data.athletes, 'Taekwondo')).toEqual([{
          "name": "Patimat Abakarova",
        "gender": "F",
        "height": "165",
        "weight": "49",
        "sport": "Taekwondo",
        "team": "Azerbaijan",
        "noc": "AZE",
        "age": 21,
        "event": "Taekwondo Women's Flyweight",
        "medal": "Bronze"
      
    }]);
  });
/* 
  it.only('returns `filterData`', () => {
    expect(filterData(data.athletes, 'Tennis')).toEqual([{
        "name": "Patimat Abakarova",
        "gender": "F",
        "height": "165",
        "weight": "49",
        "sport": "Taekwondo",
        "team": "Azerbaijan",
        "noc": "AZE",
        "age": 21,
        "event": "Taekwondo Women's Flyweight",
        "medal": "Bronze"
    }]);
  }); */
});

describe('filterByMedal Test', () => {
 
  it('returns `filterByMedal`', () => {
    expect(filterByMedal(data.athletes, 'Silver')).toEqual([{
      "name": "Luc Abalo",
      "gender": "M",
      "height": "182",
      "weight": "86",
      "sport": "Handball",
      "team": "France",
      "noc": "FRA",
      "age": 31,
      "event": "Handball Men's Handball",
      "medal": "Silver"
    }]);
  });
});


describe('sortData', () => {
  
     it('A-Z',() => {
      const result = sortData(data.athletes, 'ascendente');
      expect(result).toEqual([
        {
          "name": "Patimat Abakarova",
          "gender": "F",
          "height": "165",
          "weight": "49",
          "sport": "Taekwondo",
          "team": "Azerbaijan",
          "noc": "AZE",
          "age": 21,
          "event": "Taekwondo Women's Flyweight",
          "medal": "Bronze"
        },
        {
          "name": "Luc Abalo",
          "gender": "M",
          "height": "182",
          "weight": "86",
          "sport": "Handball",
          "team": "France",
          "noc": "FRA",
          "age": 31,
          "event": "Handball Men's Handball",
          "medal": "Silver"
        },
        {
          "name": "Giovanni Abagnale",
          "gender": "M",
          "height": "198",
          "weight": "90",
          "sport": "Rowing",
          "team": "Italy",
          "noc": "ITA",
          "age": 21,
          "event": "Rowing Men's Coxless Pairs",
          "medal": "Bronze"
        }
        
       
      ])
     })
     it('Z-A',() => {
      const result = sortData(data.athletes, 'descendente');
      expect(result).toEqual([
        {
          "name": "Giovanni Abagnale",
          "gender": "M",
          "height": "198",
          "weight": "90",
          "sport": "Rowing",
          "team": "Italy",
          "noc": "ITA",
          "age": 21,
          "event": "Rowing Men's Coxless Pairs",
          "medal": "Bronze"
        },
        {
          "name": "Luc Abalo",
          "gender": "M",
          "height": "182",
          "weight": "86",
          "sport": "Handball",
          "team": "France",
          "noc": "FRA",
          "age": 31,
          "event": "Handball Men's Handball",
          "medal": "Silver"
        },
        {
          "name": "Patimat Abakarova",
          "gender": "F",
          "height": "165",
          "weight": "49",
          "sport": "Taekwondo",
          "team": "Azerbaijan",
          "noc": "AZE",
          "age": 21,
          "event": "Taekwondo Women's Flyweight",
          "medal": "Bronze"
        }
      ])
    }) 
})


describe('computeStats', () => {
  it('vuelva porcentaje de atletas "M"', () => {
    expect(computeStats(data.athletes, 'M')).toEqual(66.66666666666667)
  })
      
  it('vuelva porcentaje de atletas "F"', () => {
    expect(computeStats(data.athletes, 'F')).toEqual(33.333333333333336)
  })
})
