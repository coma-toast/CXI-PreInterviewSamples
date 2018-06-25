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
  try {
    var results = isPalindrome(palindromeObject.input1, palindromeObject.input2)
  } catch (e) {
    $("#palindromeResult1").html("Output: " + e)
  }
}

function isPalindrome(input1, input2) {
  if ((input1.length == 0) || (input2.length == 0)) {
    console.log("Blank input detected.");
    throw (new Error("Blank input detected."))
    return Error
  }
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
  //reset variables each time the function is called (button is pressed)
  duplicateObject.topWord = ""
  duplicateObject.topLetter = ""
  duplicateObject.topLetterCount = 0
  try {
    if (inputPhrase.length == 0) {
      console.log("Blank input detected.");
      throw (new Error("Blank input detected."))
      return Error
    }
    let duplicateSplit = splitString(inputPhrase, " ")
    for (var i = 0; i < duplicateSplit.length; i++) {
      let dupChars = splitString(duplicateSplit[i], "")
      dupChars = removeSpecialChars(dupChars)
      dupChars = lowerIt(dupChars)
      duplicateObject.currentWord = unsplitString(dupChars," ")
      let topWord = sortLetters(dupChars)
      $("#duplicateResult1").html("Output: " + noSpace(duplicateObject.topWord))
    }
    if (duplicateObject.topWord == "") {
      throw (new Error("No word with duplicate letters."))
    }
  } catch (e) {
    $("#duplicateResult1").html("Output: " + e)
    }
  console.log(duplicateObject);


}

function bracketTest(inputPhrase) {
  let splitBrackets = splitString(inputPhrase, "")
  console.log(splitBrackets);
  try {
    let splitBracketsResult = partenth(splitBrackets)
    if (splitBracketsResult) {
        $("#bracketResult1").html("Output: True")
    } else if (!splitBracketsResult) {
        $("#bracketResult1").html("Output: False")
    }
  } catch (e) {
    console.log(e.name, e.message);
    $("#bracketResult1").html("Output: " + e)
  }
}
