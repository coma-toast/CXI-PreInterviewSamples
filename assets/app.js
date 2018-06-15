var palindromeObject = {
  input1:[],
  input2:[],
};

var duplicateObject = {
  currentWord:'',
  topWord: '',
  topLetter: '',
  topLetterCount: 0
}


function palindromeTest(inputPhrase) {
  inputPhrase = noSpace(inputPhrase)
  let splitPhrase = splitString(inputPhrase, "");
  let splitPhraseReverse = revString(inputPhrase)
  splitPhrase = lowerIt(splitPhrase)
  splitPhraseReverse = splitString(splitPhraseReverse, "")
  splitPhraseReverse = lowerIt(splitPhraseReverse)
  splitPhrase = removeSpecialChars(splitPhrase)
  splitPhraseReverse = removeSpecialChars(splitPhraseReverse)
  palindromeObject.input1 = splitPhrase
  palindromeObject.input2 = splitPhraseReverse
  var results = isPalindrome(palindromeObject.input1, palindromeObject.input2)
}

function isPalindrome(input1, input2) {
  for (let i = 0; i < input1.length; i++) {
    console.log(input1[i], input2[i], "compare");
    if (input1[i] != input2[i]) {
      console.log("fake news");
      $("#palindromeResult1").html("Output: False")
      break
    } else {
      $("#palindromeResult1").html("Output: True")

    }
  }
}

function duplicateTest(inputPhrase) {
  let duplicateSplit = splitString(inputPhrase, " ")
  for (var i = 0; i < duplicateSplit.length; i++) {
    let topWord = countLetters(duplicateSplit[i])
  }
  console.log(duplicateObject);
}
