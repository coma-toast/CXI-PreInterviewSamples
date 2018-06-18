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
  for (let i = 0; i < special.length; i++) {

    if (special[i].match(/[^a-zA-Z0-9\ ]/gmi)) {
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

    let x = inputPhrase.length-i-1

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
  let foundLetters = []
  for (var i = 0; i < word.length; i++) {
    console.log(word[i]);
    if (foundLetters.includes(word[i])) {
      console.log("yes");
      trackCount(foundLetters, word[i])
    } else {
      foundLetters.push(word[i])
    }
    console.log(foundLetters);
    // let searchLetter =

  }

}

function trackCount (foundLetters, letter) {
  for (var i = 0; i < foundLetters.length; i++) {
    if (letter == foundLetters[i]) {
        console.log("letter == foundLetters[i]");
        if (typeof foundLetters[i].count === 'undefined') {
          foundLetters[i] = {
            foundLetter: letter,
            count: 1
          }
        } else {
            foundLetters[i].count++
          }
        }
        console.log(foundLetters);

    }
  }
