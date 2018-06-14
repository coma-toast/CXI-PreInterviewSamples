function palindromeTest(inputPhrase) {
  let splitPhrase = splitString(inputPhrase.toLowerCase(), "");
  console.log(splitPhrase)
  splitPhrase = removeSpecialChars(splitPhrase)
  //console.log(splitPhrase)
  console.log(splitPhrase, "fwd");
  let splitPhraseReverse = reverseIt(splitPhrase)
  console.log(splitPhraseReverse, "rev");
  var results
  results = isPalindrome(splitPhrase, splitPhraseReverse)
  console.log(results);
}

function splitString(phrase, sep) {
  let chars = phrase.split(sep)
  return chars
}

function removeSpecialChars(special) {
  let noSpecial = []
  for (let i = 0; i < special.length; i++) {
    if (special[i].match(/[a-z0-9]/)) {
      console.log(noSpecial.push(special[i]))
      console.log(noSpecial);
    }
  }
  return noSpecial
}

function reverseIt(inputPhrase) {
  let outputPhrase = inputPhrase.reverse()
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
