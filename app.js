// ----------------------------------------------------------hasDuplicate-------------------------------------------------
//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (arr)=>new Set(arr).size !== arr.length;

// ----------------------------------------------------------vowelCount-------------------------------------------------
//Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function Vowels(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount(string){
    const vowelMap = new Map();
    for(let char of string ){
        let lowerCase = char.lowerCase();
        if(Vowels(lowerCase)){
            if(vowelMap.has(lowerCase)){
            vowelMap.set(lowerCase, vowelMap.get(lowerCase) + 1);
            } else {
              vowelMap.set(lowerCase, 1);
            }
        }
        return vowelMap;
    }
}