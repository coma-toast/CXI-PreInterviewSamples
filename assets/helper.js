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


// function countLetters (word) {
//   for (var i = 0; i < word.length; i++) {
//     if (word[i] == duplicateObject.topLetter) {
//       duplicateObject.word = word
//       duplicateObject.topLetterCount++
//
//     }
//   }
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
  dupLetters.sort();
  let map = dupLetters.reduce(function(prev,cur) {
    prev[cur] = (prev[cur] || 0) +1
    return prev;
  }, {})
  console.log(map);
  let maxLetters = sortDups(map)
  if (countLetters(dupLetters)) {
    duplicateObject.topWord = unsplitString(word, " ")
  }
  console.log(dupLetters);
  if (duplicateObject.topWord == "") {
    duplicateObject.topWord = duplicateObject.currentWord
  }
  if (duplicateObject.topLetter == "") {
    duplicateObject.topLetter = dupLetters[0]
  }
  console.log(duplicateObject);
}

function countLetters (dupLetters) {
  let current = dupLetters[0];
  let cnt = 1;
  for (let i = 0; i < dupLetters.length; i++) {
    if (dupLetters[i] != current) {
      console.log(cnt);
      current = dupLetters[i]
      duplicateObject.currentCount = cnt;
      cnt = 1
    } else if (dupLetters[i] == current) {
      cnt++
        console.log(cnt);
    }
  }
  if (cnt >= duplicateObject.topLetterCount) {
    duplicateObject.topLetterCount = cnt;
    console.log(cnt,"topLetterCount");
    return true

  } else if (cnt < duplicateObject.topLetterCount) {
    return false
  }
}

function sortDups (map) {
  console.log(map);
  for (let key in map) {
    console.log(map[key]);
    if (map[key] > duplicateObject.topLetterCount) {
      duplicateObject.topLetterCount = map[key]
    }
  }
}

//need to return the most common letter and count of that letter
//actually, a sort and then counting
// function trackCount (foundLetters, letter) {
//   if (duplicateObject.topWord == 'undefined') {
//     duplicateObject.topWord == unsplitString(foundLetters)
//   }
//   for (var i = 0; i < foundLetters.length; i++) {
//     if (letter == foundLetters[i]) {
//         console.log("letter == foundLetters[i]");
//         if (typeof foundLetters[i].count === 'undefined') {
//           foundLetters[i] = {
//             foundLetter: letter,
//             count: 1
//           }
//         } else {
//             foundLetters[i].count++
//           }
//         }
//         console.log(foundLetters);
//
//     }
//   }
