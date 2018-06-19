var palindromeObject = {
  input1:[],
  input2:[],
};

var duplicateObject = {
  currentWord:'',
  currentCount:'',
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
    console.log("compare:", input1[i], input2[i]);
    if (input1[i] != input2[i]) {
      console.log("fake news");
      $("#palindromeResult1").html("Output: False")
      break
    } else {
      $("#palindromeResult1").html("Output: True")
    }
  }
}

//can probably make this cleaner with array.map or something
function duplicateTest(inputPhrase) {
  duplicateObject.topWord = ""
  duplicateObject.topLetter = ""
  duplicateObject.topLetterCount = 0
  let duplicateSplit = splitString(inputPhrase, " ")
  for (var i = 0; i < duplicateSplit.length; i++) {
    let dupChars = splitString(duplicateSplit[i], "")
    dupChars = removeSpecialChars(dupChars)
    dupChars = lowerIt(dupChars)
    duplicateObject.currentWord = unsplitString(dupChars," ")
    let topWord = sortLetters(dupChars)
  }
  console.log(duplicateObject);
  $("#duplicateResult1").html("Output: " + noSpace(duplicateObject.topWord))
}

function bracketTest(inputPhrase) {
  var error = false
  let splitBrackets = splitString(inputPhrase, "")
  let splitBracketsResult = partenth(splitBrackets)
  console.log(splitBracketsResult);
  if (splitBracketsResult) {
    console.log("true");
      $("#bracketResult1").html("Output: True")
  } else if (!splitBracketsResult) {
      $("#bracketResult1").html("Output: False")
  } else if (error == true) {
    console.log("error");
  }
}
