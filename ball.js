class Ball{
    constructor(x,y){
        this.x=x
        this.y=y
        this.w=50
        this.h=50
        this.time=0
    }

    move(){
        var movement;
        if(keyIsDown(LEFT)){
            this.velocityX = -5
            movement = "left"
        }else
        if(keyIsDown(RIGHT)){
            this.velocityX = 5
            movement = "right"
        }else
        if(keyIsDown(DOWN)){
            this.velocityY = 7.5
            movement = "down"
        }else
        if(keyIsDown(SPACE)){
            if(movement === "down"){
                this.velocityX = 10
                setTimeout(() => {
                    this.velocityY = 7.5
                },1500)
            }else if(movement === "right"){
                this.velocityX = 8
                setTimeout(() => {
                    this.velocityX = 5
                },1500)
            }else if(movement === "left"){
                this.velocityX = -8
                setTimeout(() => {
                    this.velocityX = 5
                })
            }
        }else{
            movement = "null"
        }
    }
    time(){
        
            setTimeout(() => {
                ct 
            }, 1000)
    }
}