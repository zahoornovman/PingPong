class Paddle{

    constructor(){
        this.paddleHeight = 90;
        this.paddleWidth = 15;
        this.py = 30;
        this.color = 'white';     
    }

    //render left paddle
    renderLeftPaddle(ctx){
        // console.log(ctx);
        //console.log(obj);  
        ctx.fillStyle = this.color;
        ctx.fillRect(20,this.py,this.paddleWidth,this.paddleHeight);
        
               
    }

    //render right paddle
    renderRightPaddle(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(670,this.py,this.paddleWidth,this.paddleHeight);
        
    }
}