class Ball{
    constructor(board){
        this.position = {xOfBall: 50, yOfBall:60};
        this.radiusOfBall = 10;
        this.xAxisDifference = 2;
        this.yAxisDifference = 2;  
        this.board = board; 
           
    }


    // render circles
    renderBall(ctx){
        //console.log(obj);
        ctx.beginPath();
        ctx.arc(this.position.xOfBall, this.position.yOfBall, this.radiusOfBall, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
        //ctx.closePath();
    }
    move(){
        this.position.xOfBall += this.xAxisDifference;
        if ((this.position.xOfBall + this.radiusOfBall === this.board.Width) || (this.position.xOfBall - this.radiusOfBall === 0)){
                this.xAxisDifference = -this.xAxisDifference;
        }
        this.position.yOfBall += this.yAxisDifference;
        if ((this.position.yOfBall + this.radiusOfBall === this.board.Height) || (this.position.yOfBall - this.radiusOfBall === 0)){
            this.yAxisDifference = -this.yAxisDifference;
        }               
    }      
}