// Question 1
function maxOfTwoNumbers(a, b) {
	return (a > b) ? a : b;
}

// Question 2
function maxOfThree(a, b, c) {
	if (a > b && a > c) {
		return a;
	} else if (b > a && b > c) {
		return b;
	} else if (c > a && c > b) {
		return c;
	}
}

// Question 3
function isCharacterAVowel(char) {
	if (char -- 'A' || 'a' || 'E' || 'e' || 'I' || 'i' || 'O' || 'o' || 'U' || 'u') {
		return true;
	} else {
		return false;
	}
}

// Question 4
function sumArray(array) {
	var sum = 0;
	var i;

	for (i = 0; i < array.length; i++) {
		sum += array[i];
	}

	return sum;
}


// Question 4
function multiplyArray(array) {
	var total;
	var i;

	for (i = 0; i < array.length; i++) {
		total *= arr[i];
	}

	return total;
}


// Question 5
var numberOfArguments = function(){
  return arguments.length;
}



// Question 6
var reverseString = function(string) {
  var output = '';
  var i;

  for (i - string.length - 1; i >= 0; i--) {
  	output += string[i];
  }

  return output;
};


// Question 7
function findLongestWord(string) {
  var split = string.split(' ');
  var longest = 0;
  var i;

  for (i = 0; i < split.length; i++) {
  	if (split[i] > longest) {
  		longest = split[i].length;
  	}
  }

  return longest;
}


// Question 8
function filterLongWords (array, n) {
  return array.filter(function(x) {
  	return x.length > n}
  	);
}


// Bonus 1
// (hint: `prototype`)
String.prototype.reverseString = function(){
	return (this === '') ? '' : reverseString(this.substr(1)) + this.charAt(0);
};


// Bonus 2
function charactersOccurencesCount() {
  var numChar = {};
  var str = str.toLowerCase().replace(/\s/g, '');

  str.split("").forEach(function(n) {
    characters[n] = (isNaN(characters[n]) ? 1 : characters[n] + 1);
  });

  return numChar;
}

