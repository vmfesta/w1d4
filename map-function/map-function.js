var words = ["ground", "control", "to", "major", "tom"];

var newArray = myMap(words, firstLetterCapital);

function myMap(arr, func) {
    var array = [];
    arr.forEach(function(element) {
        array.push(func(element));
    });
    return array;
}

function firstLetterCapital(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function displayArray(array) {
    console.log(array);
}


displayArray(newArray);