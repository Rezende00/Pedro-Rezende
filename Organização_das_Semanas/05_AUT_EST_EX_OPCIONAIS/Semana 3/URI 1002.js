var input = require("fs").readFileSync("script", "utf8");

var PI = 3.14159;
var raio = parseFloat(input);

var area = PI * Math.pow(raio, 2);

console.log("A = " + area.toFixed(4));


