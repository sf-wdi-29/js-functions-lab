//Pair programmed with Yasu
// Question 1
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num 2) {
        return num1;
    } else {
        return num2;
    }
}

// Question 2
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

// Question 3
function isCharacterAVowel(char) {
    return /[aeiouAEIOU]/.test(char);

}
}

// Question 4
function sumArray(array) {
    return array.reduce(function(num1, num2) {
        return num1 + num2;
    }, 0);
}

// Question 4
function multiplyArray(array) {
    return array.reduce(function(num1, num2) {
        return num1 * num2;
    }, 0);
}


// Question 5
var numberOfArguments = function() {
    return arguments.length;
}



// Question 6
var reverseString = function(string) {
    string = string.split("");
    return string.reverse().join("");
};


// Question 7
function findLongestWord(words) {
    var maxLength = 0;
    var maxWord = "";
    words.forEach(function(word) {
        if (word.length > maxLength) {
            maxLength = word.length;
            maxWord = word;
        }
    })
    return maxWord;
}


// Question 8
function filterLongWords(words, i) {
    var longerWords = [];
    words.forEach(function(word) {
        if (word.length > i) {
            longerWords.push(word);
        }
    })
    return longerWords;
}


// Bonus 1
// (hint: `prototype`)
String.prototype.reverse = function() {
    var myString = this.split("");
    return myString.reverse().join("");
}


// Bonus 2
function charactersOccurencesCount(string) {
    letters = {};

    for (i = 0; i < string.length; i++) {
        letters[string[i]] = 0;
    }
    for (j = 0; j < string.length; j++) {
        letters[string[j]] += 1;
    }
    return letters;
}
