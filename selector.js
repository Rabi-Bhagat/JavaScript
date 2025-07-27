//getelementbytagname()
// var a = document.getElementsByTagName('li');
// console.log(a);

// getElementByid()
var b = document.getElementById('rabi');
console.log(b);

// Select by ID
const byId = document.getElementById('header');
console.log('Selected by ID:', byId);

// Select by class name (all matching elements)
const byClassName = document.getElementsByClassName('item');
console.log('Selected by class name:', byClassName);

// Select by tag name (all matching elements)
const byTagName = document.getElementsByTagName('li');
console.log('Selected by tag name:', byTagName);

// Select the first matching element with querySelector
const byQuerySelector = document.querySelector('.menu a');
console.log('Selected by querySelector (first match):', byQuerySelector);

// Select all matching elements with querySelectorAll
const byQuerySelectorAll = document.querySelectorAll('.menu a');
console.log('Selected by querySelectorAll:', byQuerySelectorAll);

// Iterate over querySelectorAll NodeList
byQuerySelectorAll.forEach(link => {
  console.log('Link in querySelectorAll:', link.href);
});

