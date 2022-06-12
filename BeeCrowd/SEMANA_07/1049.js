var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var classe1 = lines.shift();
var classe2 = lines.shift();
var classe3 = lines.shift();

if(classe1 == "vertebrado"){
    if(classe2 == "ave"){
        if(classe3 == "carnivoro"){
            console.log("aguia");
        }
        else{
            console.log("pomba");
        }
    }
    else{
        if(classe3 == "onivoro"){
            console.log("homem");
        }
        else{
            console.log("vaca");
        }
    }
}
else{
    if(classe2 == "inseto"){
        if(classe3 == "hematofago"){
            console.log("pulga");
        }
        else{
            console.log("lagarta");
        }
    }
    else{
        if(classe3 == "hematofago"){
            console.log("sanguessuga");
        }
        else{
            console.log("minhoca");
        }
    }
}
