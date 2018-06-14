function splitString(phrase, sep) {
  var chars = phrase.split(sep)
  return chars
}

function palindromeTest(inputPhrase) {
  let splitPhrase = splitString(inputPhrase.toLowerCase(), "");
  console.log(splitPhrase)
  splitPhrase = removeSpecialChars(splitPhrase)
  console.log(splitPhrase)
  console.log(splitPhrase, "fwd");
  let splitPhraseReverse = reverseIt(splitPhrase)
  console.log(splitPhraseReverse, "rev");
  var results = isPalindrome(splitPhrase, splitPhraseReverse)
  console.log(results);
}

function removeSpecialChars(inputPhrase) {
  let outputPhrase = []
  for (let i = 0; i < inputPhrase.length; i++) {
    if (inputPhrase[i].match(/[a-z0-9]/i)) {
      outputPhrase.push(inputPhrase[i])
    }
  }
  return outputPhrase
}

function reverseIt(inputPhrase) {
  let outputPhrase = inputPhrase.reverse()
  return outputPhrase
}

function isPalindrome(input1, input2) {
  for (let i = 0; i < input1.length; i++) {
    console.log(input1[i], input2[i]);
    if (input1[i] != input2[i]) {
      $("#palindromeResult1").html("Output: False")
      console.log("fake news");
      break
    } else {
      $("#palindromeResult1").html("Output: True")
    }
  }
}
