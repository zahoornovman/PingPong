class Board {

    constructor(score){
        this.Height = 500;
        this.Width = 700;
        this.gameScore = score;
    }

    // render board
    renderBoard(ctx){
        //console.log(obj);
        // Background color
        ctx.fillStyle = 'black';
        ctx.fillRect(0,0,this.Width,this.Height);
        
        // Center stroke
        ctx.beginPath();
        ctx.moveTo(this.Width / 2, 0);
        ctx.lineTo(this.Width / 2, this.Height);
        ctx.lineWidth = 1;
        ctx.setLineDash([5]);
        ctx.strokeStyle = "orange";
        ctx.stroke();

    }

    scoreDisplay(ctx){
        ctx.font = '25 px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(this.gameScore.playerLeftScore , 325, 20);
        ctx.fillText(this.gameScore.playerRightScore, 375, 20);
    }
}