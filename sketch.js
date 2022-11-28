var weight = [35,38,42,45,43,34,36,41,48,32];

function setup() {
  createCanvas(400,400);
  sum = 0
 for ( var i = 0 ; i<weight.length; i++)
 {
  var sum = sum + weight [i]
 }
 console.log(sum)
}

function draw() 
{
  background(30);
}

 

