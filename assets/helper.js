function noSpace (input) {
  let output = input.split(" ").join("")
  return output
}

function revString (input) {
  input = input.split("").reverse().join("")
  return input
}

function splitString (phrase, sep) {
  let chars = phrase.split(sep)
  return chars
}

function unsplitString (phrase, sep) {
  let chars = phrase.join(sep)
  return chars
}

function lowerIt (input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i].match(/[a-zA-Z]/gmi)) {
      input[i] = input[i].toLowerCase()
    }
  }
  return input
}


function removeSpecialChars(special) {
  console.log(special);
  for (let i = 0; i < special.length; i++) {

    if (special[i].match(/[^a-zA-Z0-9\ ]/gmi)) {

      console.log("splice");
      special.splice(i, 1)
    }
}
  console.log(special);
  return special
}

function reverseIt(inputPhrase) {
  var outputPhrase = []
  outputPhrase = inputPhrase
  for (let i = 0; i < outputPhrase.length; i++) {
    console.log(i, "i")
    let x = inputPhrase.length-i-1
    console.log(x, "x")
    outputPhrase[i] = inputPhrase[x]

    console.log(outputPhrase[i])
  }
  return outputPhrase
}


// function countLetters (word) {
//   for (var i = 0; i < word.length; i++) {
//     if (word[i] == duplicateObject.topLetter) {
//       duplicateObject.word = word
//       duplicateObject.topLetterCount++
//
//     }
//   }
// }

function countLetters (word) {
  console.log(word);
  let alphabet = []
  //word = splitString(word, "")
  console.log(word);
  for (var i = 0; i < word.length; i++) {
    console.log(word[i]);
    let searchLetter = word[i].match(alphabet[0-alphabet.length])
    console.log(searchLetter);
    if (searchLetter == true) {
      console.log("found");
      duplicateObject.topWord = word
      duplicateObject.topLetter = word[i]
      console.log(alphabet);
    } else {
      console.log("not found");
      console.log(alphabet.push(word[i]))
      console.log(alphabet);
    }
  }

}
