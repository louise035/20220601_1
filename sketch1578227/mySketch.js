var colors="fec5bb-fcd5ce-fae1dd-f8edeb-e8e8e4-d8e2dc-ece4db-ffe5d9-ffd7ba-fec89a".split("-").map(a=>"#"+a)
class Ball{
	constructor(args){
		this.r = args.r||random(150)
		this.p = args.p||{x:random(width),y:random(height)}
		this.v = {x:random(-1,1),y:random(-1,1)}
		this.a = args.a||{x:0 , y:0} 
		this.color = random(colors)
	}
	draw()
	{
		push()
			translate(this.p.x,this.p.y)
			fill(this.color)
			ellipse(0,0,this.r)
		  ellipse(-this.r/2,-this.r/2,this.r/2)
			ellipse(this.r/2,-this.r/2,this.r/2)
			fill(255)
			ellipse(-30,-10,this.r/3,this.r/3,0,PI)
		  fill(0)
			ellipse(-30,-10,this.r/5,this.r/5,0,PI)
		  fill(255)
			ellipse(30,-10,this.r/3,this.r/3,0,PI)
		  fill(0)
			ellipse(30,-10,this.r/5,this.r/5,0,PI)
		  fill(255,0,0)
			arc(0,20,this.r/3,this.r/3,0,PI)
		pop()
  }
	update(){
			this.p.x += this.v.x
		  this.p.y += this.v.y
			this.v.x = this.v.x + this.a.x
			this.v.y = this.v.y + this.a.y
			if(this.p.y>height){
				this.v.y=-abs(this.v.y)
}
}}
var ball
var balls=[]
function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#a98467");
	for(var i=0;i<50;i++){
  ball=new Ball({
		a:{x:0,y:0.5},
		p:{x:width/2,y:height/2},
		})
	balls.push(ball)
	}
}

function draw() {
	background("#a98467");
	noStroke()
	//for(var i=0;i<balls.length;i++){
	//let ball=balls[i]
	for(let ball of balls){
	ball.draw()
	ball.update()

 }
}
