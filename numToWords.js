var testString = 'onezeropluseightnineminussevenplusfivefive';

var numbersToWordsDict = {
    'zero': '0',
    'one' : '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
    'plus': '+',
    'minus': '-'
};

var wordsToNumbersDict = {
    '0' : 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
};

function numberToWord(value) {
    console.log(value + ' == ' + wordsToNumbersDict[value]);
    return wordsToNumbersDict[value];
}

function wordToNumber(word) {
    console.log(word + ' == ' + numbersToWordsDict[word]);
    return numbersToWordsDict[word];
}

console.log(testString);

var stringForNumbers = '';

do {
    var count = 3;
    while (count < 6)
    {
        var newNum = wordToNumber(testString.substring(0,count));
        if (newNum) {stringForNumbers = stringForNumbers + newNum; break;}
        count++;
    }
    testString = testString.substring(count);
}
while (testString.length > 0)

var numbersForString = eval(stringForNumbers);

console.log(stringForNumbers + ' is ' + numbersForString);

var arrayFromNumber = Array.from(String(numbersForString));

var outputString = '';

for (var i = 0; i < arrayFromNumber.length; i++)
{
    outputString = outputString + numberToWord(arrayFromNumber[i]);
}

console.log(outputString);