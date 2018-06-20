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

//This was a different way I was trying to reverse the string first.
//It's not used but I think the logic is sound.
//Left it so you can see part of my thought process.
// function reverseIt(inputPhrase) {
//   var outputPhrase = []
//   for (let i = 0; i < inputPhrase.length; i++) {
//     let x = inputPhrase.length-i-1
//     outputPhrase[i] = inputPhrase[x]
//   }
//   return outputPhrase
// }


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
    console.log(input[i]);
    if (input[0] == ')') {
        console.error("First is ). Fail.");
        throw (new Error("First is ). Fail."))
        return Error
    } else if (input[i] != "(" || input[i] != ")") {
        console.error("Only ( or ) allowed.")
        throw (new Error("Only ( or ) allowed."))
        return Error
    } else if (count <= -1) {
        console.error("More ) than ( as the string traverses");
        throw (new Error("More ) than ( as the string traverses"));
        return Error
    } else if (input[i] == '(') {
        console.log(count, "+1");
        count++
    } else if (input[i] == ')') {
        console.log(count, "-1");
        count--
      }
    }
    if (count == 0) {
        return true
      } else {
        return false
        }
    }
