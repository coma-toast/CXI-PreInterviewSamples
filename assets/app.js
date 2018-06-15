var palindromeObject = {
  input1:[],
  input2:[]
};


function palindromeTest(inputPhrase) {
  let splitPhrase = splitString(inputPhrase.toLowerCase(), "");
  console.log(splitPhrase.length);
  console.log(splitPhrase)
  console.table(splitPhrase);
  palindromeObject.input1 = splitPhrase
  splitPhrase = removeSpecialChars(splitPhrase)
  //console.log(splitPhrase)

  console.log(palindromeObject)
  console.log(splitPhrase, "fwd");
  let splitPhraseReverse = reverseIt(splitPhrase)
  console.log(splitPhraseReverse, "rev");
  palindromeObject.input2 = splitPhraseReverse
  console.log(palindromeObject)
  var results
  results = isPalindrome(splitPhrase, splitPhraseReverse)
  console.log(results);
}

function splitString(phrase, sep) {
  let chars = phrase.split(sep)
  return chars
}

//somehow this is borking things. unSpecial ends up 4,3,3,4 when using 1234. ???

// function removeSpecialChars(special) {
//   console.table(special);
//   let unSpecial = []
//   console.table(unSpecial)
//   for (let i = 0; i < special.length; i++) {
//     console.log(i, "special iteration number")
//     console.log(special[i])
//     if (special[i].match(/[a-zA-Z0-9]/gmi)) {
//       let temp = special[i]
//       console.table(temp)
//       console.log(temp)
//       unSpecial.push(temp)
//       console.log(special[i])
//       console.log(unSpecial)
//       console.table(special)
//       console.table(unSpecial)
//     }
//   }
//   console.table(unSpecial)
//   return unSpecial
// }

function removeSpecialChars(special) {

  for (let i = 0; i < special.length; i++) {
    console.log(special[i]);
    if (special[i].match(/[^a-zA-Z0-9]/g)) {
      console.log("splice");
      console.log(special.splice(i, 1))
    }
}
  console.log(special);
  return special
}

function reverseIt(inputPhrase) {
  var outputPhrase = []
  outputPhrase = inputPhrase
  console.log(inputPhrase, "in")
  // outputPhrase = outputPhrase.reverse()
  for (let i = 0; i < outputPhrase.length; i++) {
    console.log(i, "i")
    let x = inputPhrase.length-i-1
    console.log(x, "x")
    outputPhrase[i] = inputPhrase[x]

    console.log(outputPhrase[i])
  }
  return outputPhrase
}

function isPalindrome(input1, input2) {

  console.log(input1);
  console.log(input2);
  for (let i = 0; i < input1.length; i++) {
    console.log(input1[i], input2[i]);
    if (input1[i] != input2[i]) {
      $("#palindromeResult1").html("Output: False")
      console.log("fake news");
      break
    } else {
      $("#palindromeResult1").html("Output: True")
      return true
    }
  }
}
