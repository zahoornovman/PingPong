class Game {

    constructor(canvas){
        this.score = {playerLeftScore: 0, playerRightScore: 0};

        // Getting reference to Canvas object       
        this.ctx = canvas.getContext('2d');

        //Setting board dimensions
        this.board = new Board(this.score);
        this.board.renderBoard(this.ctx);

        //Rendering Left Paddle
        this.paddleLeft = new Paddle();
        this.paddleLeft.renderLeftPaddle(this.ctx);

        //Rendering Right Paddle
        this.paddleRight = new Paddle();
        this.paddleRight.renderRightPaddle(this.ctx);

        //Rendering ball
        this.ball = new Ball(this.board);
        this.ball.renderBall(this.ctx);
        this.setListeners(); 

    }

    play(){
        setInterval(() => {
            this.board.renderBoard(this.ctx);
            this.board.scoreDisplay(this.ctx);
            this.ball.move();
            this.ball.renderBall(this.ctx);          
            this.paddleLeft.renderLeftPaddle(this.ctx);
            this.paddleRight.renderRightPaddle(this.ctx);
            this.checkCollisions();  
            this.countingPoints();
             
        }, 17); // 60fps -> 1/60
    }

    setListeners(){
        document.addEventListener('keydown', function (event) {
            
            if (event.key === 'w'){
                if (this.paddleLeft.py > 0){
                    this.paddleLeft.py -= 10;
                }
            }
            if (event.key === 's'){
                if (this.paddleLeft.py + this.paddleLeft.paddleHeight < this.board.Height){
                    this.paddleLeft.py += 10;
                }
            }
        
            if (event.key === 'ArrowUp'){
                if (this.paddleRight.py > 0){
                    this.paddleRight.py -= 10;
                }
            }
            if (event.key === 'ArrowDown'){
                if (this.paddleRight.py + this.paddleRight.paddleHeight < this.board.Height){
                    this.paddleRight.py += 10;
                }
            }
        }.bind(this));
    }

    checkCollisions(){

        if ((this.ball.position.yOfBall - this.ball.radiusOfBall >= this.paddleLeft.py) && 
        (this.ball.position.yOfBall + this.ball.radiusOfBall <= this.paddleLeft.py + this.paddleLeft.paddleHeight)){
            if (this.ball.position.xOfBall - this.ball.radiusOfBall <= 35){
                this.ball.xAxisDifference = -this.ball.xAxisDifference;
            }
        }
        if ((this.ball.position.yOfBall - this.ball.radiusOfBall >= this.paddleRight.py) && 
        (this.ball.position.yOfBall - this.ball.radiusOfBall <= this.paddleRight.py + this.paddleRight.paddleHeight)){
            if (this.ball.position.xOfBall + this.ball.radiusOfBall >=665){
                this.ball.xAxisDifference = -this.ball.xAxisDifference;
            }
        }
    }

    countingPoints(){
        if (this.ball.position.xOfBall - this.ball.radiusOfBall === 0){
            this.score.playerRightScore += 1;
        }
        if (this.ball.position.xOfBall + this.ball.radiusOfBall === 700){
            this.score.playerLeftScore += 1;
            }
    }
}





