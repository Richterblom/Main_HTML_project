//Diagonal of a square//
let sides = 9
let squareDiagonal = Math.sqrt(2)*9;

/*
//Diagonal of a square//
function findDiagonal(s)
{
    return Math.sqrt(2) * s;
}
var S = 9;
document.write(findDiagonal(S));*/
 
//Area of a Triangle//
let areaOfTriangle = (a,b,c) => (a + b + c) / 2;
//document.write(areaOfTriangle(5,6,7));

/*
//Area of a Triangle//  
    let a=5;
    let b=6;
    let c=7;
    let area = (a + b + c) / 2;
document.write(area);*/

//Circumference of a circle//

function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }
  //document.write(calculateCircumference(4));

//Surface area of a circle// 

let areaOfCircle = (a) => Math.PI * (Math.sqrt(a));
//document.write(areaOfCircle(4));

setTimeout(function(){
    window.location.reload();
 }, 2000);