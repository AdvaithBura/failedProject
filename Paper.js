class Paper{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution: 0.3,
            friction:1,
            density:1.2
        }
        this.paper = Bodies.circle(x,y,50, options);
        World.add(world,this.paper);
    }

    display() {
        fill("blue");
        ellipse(this.paper.position.x, this.paper.position.y, 50);

        
    }
}