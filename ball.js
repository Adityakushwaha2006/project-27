class ball{
    constructor (x,y,r){
        var ball_options={
            isStatic:false,
            restitution:0.3,
friction:0,
density:0.4
        }
    this.body=Bodies.circle(x,y,r,ball_options);
    this.r=r;
    this.image = loadImage("ball.png");

    World.add(world,this.body);
    }
display(){

    var pos=this.body.position;

    push ();
    translate(pos.x,pos.y);
  
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    strokeWeight(4);
    stroke("green")
    fill(0,0,0);
    pop();
}
}