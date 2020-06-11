class Play{
    constructor(x,y,width,height){
        var option={
            friction:1.0,
            restitution:0.1
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
this.width=width;
this.height=height;
World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);

        rect(pos.x,pos.y,this.width,this.height);
        
    }

}
