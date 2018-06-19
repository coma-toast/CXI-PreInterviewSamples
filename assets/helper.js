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
  return special
}

function reverseIt(inputPhrase) {
  var outputPhrase = []
  outputPhrase = inputPhrase
  for (let i = 0; i < outputPhrase.length; i++) {
    let x = inputPhrase.length-i-1
    outputPhrase[i] = inputPhrase[x]
  }
  return outputPhrase
}


function sortLetters (word) {
  let foundLetters = []
  let dupLetters = []
  duplicateObject.currentWord == unsplitString(word)
  for (var i = 0; i < word.length; i++) {
    if (foundLetters.includes(word[i])) {
      dupLetters.push(word[i])
    } else {
      foundLetters.push(word[i])
    }
  }
  if (dupLetters === undefined || dupLetters.length ==0) {
    return
  }
  dupLetters.sort();
  let map = dupLetters.reduce(function(prev,cur) {
    prev[cur] = (prev[cur] || 0) +1
    return prev;
  }, {})
  console.log(map);
  let maxLetters = sortDups(map)
  console.log(maxLetters);
  if (maxLetters) {
    duplicateObject.topWord = unsplitString(word, " ")
  }
  console.log(duplicateObject);
}


function sortDups (map) {
  console.log(map);
  for (let key in map) {
    if (map[key] > duplicateObject.topLetterCount) {
      duplicateObject.topLetterCount = map[key]
      duplicateObject.topLetter = `${key}`
      return true
    }
  }
}

function partenth(input) {
  console.log(input);
  let count = 0
  for (let i = 0; i < input.length; i++) {
    if (input[0] == ')') {
        console.log("First is ). Fail.");
        return false
    } else if (count <= -1) {
        console.log("More ) than ( as the string traverses");
        return false
    } else if (input[i] == '(') {
        console.log("+1");
        count++
    } else if (input[i] == ')') {
        console.log("-1");
        count--
      }
    }
    if (count == 0) {
        return true
      } else {
        return false
        }
    }
