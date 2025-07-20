
console.log("hello");

const url = "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
let promise = fetch (url);
console.log(promise);
