const hasMoreVowels = (word) => {
    let wordSplit = word.toLowerCase().split('')
  
    let vowels = ['a', 'e', 'i', 'o', 'u']
  
    let vowelCount = 0
  
    for(let i = 0; i < wordSplit.length; i++){
      if(vowels.includes(wordSplit[i])){
        vowelCount++
      }
    }
  
    if(vowelCount > word.length / 2){
      console.log(true)
    }else{
      console.log(false)
    }
  
  }
  
  hasMoreVowels('moose')
  hasMoreVowels('Aardvark')
  hasMoreVowels('jklpn')
  hasMoreVowels('mice')

//___________________________________


const moreVowels = (word) => {
    // let vowelCount = 0;
    let vowelRegex = /[aeiou]/g;
    word = word.toLowerCase();
    const found = word.match(vowelRegex);
    console.log(found);
    let difference = word.length - found.length;
  
    if (found.length >= difference) {
      return true;
    } else {
      return false;
    }
  
  }
  console.log(moreVowels("eye"));

  //------------------------------

  let vowelfun = (word) =>{


    let initArr = word.split('') 
  let vowelArr = initArr.filter(
    element => element === ('i')|
      element === ('e')|
      element === ('a')|
      element === ('o')|
      element === ('u')|
      element === ('y')
  
  )
  
  
    let consArr = initArr.filter(
      element => element === ('q')|
        element === ('w')|
      element === ('r')|
      element === ('t')|
      element === ('p')|
      element === ('s')|
      element === ('d')|
      element === ('f')|
      element === ('g')|
      element === ('h')|
      element === ('j')|
      element === ('k')|
      element === ('l')|
      element === ('z')|
      element === ('x')|
      element === ('c')|
      element === ('v')|
      element === ('b')|
      element === ('n')|
      element === ('m')
    )
  
     let vLen = vowelArr.length 
     let cLen = consArr.length 
     let moreVowel = false
  
    if( vLen > cLen){
   return true }else{
      return false
   }
   
  } 
  
  
  console.log(vowelfun('ftten'))