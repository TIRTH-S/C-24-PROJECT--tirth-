class ball {
    constructor(x,y){
        var options={
            restitution:0.5,
            friction:1,
            density:1.0
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        World.add(world,this.body);

    }

    display(){
         var pos=this.body.position;
        
         push();
         translate(pos.x,pos.y);
       
        rectMode(CENTER);
        fill("pink");
        rect(0,0,this.width,this.height);
         pop();
    }

}