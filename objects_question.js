//write a program to store name,phone number and marks of a student using objects
const student ={
    name : "Iron Man",
    number : "9815787410",
    marks : '99.9'
}

//dicitionary of 5 words

// Word-Meaning Dictionary
const dictionary = {
    "ephemeral": "lasting for a very short time",
    "serendipity": "the occurrence of happy or beneficial events by chance",
    "quintessential": "representing the most perfect example of a quality or class",
    "aesthetic": "concerned with beauty or the appreciation of beauty",
    "eloquent": "fluent or persuasive in speaking or writing"
};

// Displaying the dictionary
console.log("Word-Meaning Dictionary:");
for (const word in dictionary) {
    console.log(`${word}: ${dictionary[word]}`);
}
