
var input = require("fs").readFileSync("script", "utf8");

var valores = input.split("\n");

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());

var X = A + B;

console.log("X = " + X);







//var [x , y] = input.split(" ").map( item => parseInt(item));

//console.log(x + y);