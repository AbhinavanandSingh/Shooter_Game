var canvas =document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c =canvas.getContext('2d');

function distance(x1,y1,x2,y2){
  var xd=x1-x2;
  var yd=y1-y2;
  return Math.sqrt(Math.pow(xd,2)+Math.pow(yd,2));
}

class Enemies{
  constructor(x,y,radius,color){
    this.x=x;
    this.y=y;
    this.radius=radius
    this.color=color

  }
  draw(){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
    c.fillStyle="red";
    c.fill();

  }
}
var mouse={
  x:undefined,
  y:undefined
};
canvas.addEventListener('click',function(event){
  mouse.x=event.clientX;
  mouse.y=event.clientY;
})

var score=0;
var shots=0;
function spawnEnemies(){
  setInterval(() =>{
    var x1=50+(Math.random()*(innerWidth-100));
    var x2=x1;
    var y1=30+(Math.random()*(innerHeight-60));
    var y2=y1;
    var radius1=Math.random()*(20-10)+10;
    c.beginPath();
    c.arc(x1,y1,radius1,0,Math.PI*2,false);
    c.fillStyle="gold";

    c.clearRect(0,0,innerWidth,innerHeight);
    c.fill();

    setTimeout(function(){
      shots++;

      if(distance(x1,y1,mouse.x,mouse.y)<=radius1){
        score++;
        c.fillStyle="red";
        c.fill();
        setTimeout(function(){
          c.fillStyle="gold";
          c.fill();
        },300)


      }
      console.log(score)}, 1500);
      // setInterval(function(){
      //   alert("YOUR SCORE FOR THIS SESSION IS : "+score+" OUT OF 4");
      //   console.log("ctr");
      //   spawnEnemies();
      // },12000)
      if(shots===15)
      {
        alert("YOUR SCORE FOR THIS SESSION IS : "+score+" OUT OF 15");
        score=0;
        shots=0;
      }
      console.log("goo");
    },1500)
}
spawnEnemies();
