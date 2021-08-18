class Stone
{
    constructor(x,y,r){
        var options = {
            restitution: 0.05
        }
        this.image = loadImage("stone.png"); 
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }
    displayBall(){
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        fill("white");
        image(this.image,pos.x, pos.y, this.r, this.r);
        pop();
       }
}