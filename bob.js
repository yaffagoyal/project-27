class Bob{
    constructor(x, y, radius ) {
        var options = {
            isStatic:true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius,options);
        this.radius = radius;
        this.x=x;
        this.y=y;
        World.add(world, this.body);
      }
      display(){
        translate(this.body.position.x, this.body.position.y);
        push();
        ellipseMode(RADIUS);
        fill("purple")
        ellipse(0,0, this.radius,this.radius);
       pop();
      }
}