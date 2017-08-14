// Initialize Phaser, and create a 400x490px game
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'gameDiv');

// Create our 'main' state that will contain the game
var mainState = {

    preload: function() { 
        // Change the background color of the game
        game.stage.backgroundColor = '#3399ff';

        // Load Sprite
        game.load.spritesheet('bee', 'assets/BeeSprite2.png', 96, 70);

        // Load Image
        game.load.image('pipe', 'assets/shell.png'); 

        // Load Sound
        game.load.audio('bubble', 'assets/BUBBLE.WAV');
        game.load.audio('gong', 'assets/hitShell.wav'); 
        game.load.audio('fiew', 'assets/FiewNgo.wav'); 
    },

    create: function() { 
        //Some Variable
        started = 3;

        // Set the physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // AddSound
        this.jumpSound = game.add.audio('bubble');
        this.hitSound = game.add.audio('gong');
        this.fiewSound = game.add.audio('fiew');

        // Display bee on the screen
        this.bee = this.game.add.sprite(100, 70, 'bee');
        this.bee.animations.add('left',[0,1],5, true);
        this.bee.animations.add('hitBee',[2,3],5, true);
        this.bee.anchor.setTo(0.5, 0.5);
        this.bee.animations.play('left');

        // Add gravity to the bee to make it fall
        game.physics.arcade.enable(this.bee);
        //this.bee.body.gravity.y = 1000;  

        // Call the 'jump' function when the spacekey + Click is hit
        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        //spaceKey.onDown.add(this.jump, this); 
        //game.input.onTap.add(this.jump, this);

        //Create a Group of Pipe
        this.pipes = game.add.group(); // Create a group  
        this.pipes.enableBody = true;  // Add physics to the group 
        this.pipes.createMultiple(20, 'pipe'); // Create 20 pipes 

        //Add Pipe on screen
        //this.timer = this.game.time.events.loop(1500, this.addOneItem, this);    
        //this.timer.enable = false;

        // Add a score label on the top left of the screen
        this.score = 0;
        this.labelScore = this.game.add.text(20, 20, "0", { font: "30px Arial", fill: "#ffffff" });

        this.StartText = this.game.add.text(150, 150, "Start", { font: "30px Arial", fill: "#ffffff" });

        this.timer2 = this.game.time.events.loop(Phaser.Timer.SECOND, this.waitStart, this);
    },

    update: function() { //This function is called 60 times per second // It contains the game's logic
        if (started >0 ){
            
            //this.waitStart();
        }

        if (started <= 0){
            //this.timer = this.game.time.events.loop(1500, this.addOneItem, this);  
            //this.StartText.visible = false;

            //this.bee.body.gravity.y = 1000;
            //Add Pipe on screen
           //this.timer = this.game.time.events.loop(1500, this.addOneItem, this);
        }
        // If the bee is out of bound
        if (this.bee.inWorld == false) {
            this.restartGame();
        }
              

        // If the bee overlap any pipes, call 'restartGame'
        //game.physics.arcade.overlap(this.bee, this.pipes, this.restartGame, null, this);
        game.physics.arcade.overlap(this.bee, this.pipes, this.hitPipe, null, this); 
    },

    // Make the bee jump 
    waitStart: function() { 
        this.StartText.visible = true;
        this.StartText.text = started;

        started = started - 1;

        if (started <0){
             this.StartText.visible = false;
        }

        if (started===-1){
            this.bee.body.gravity.y = 1000;

            var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            spaceKey.onDown.add(this.jump, this); 
            this.game.input.onTap.add(this.jump, this);

            this.game.time.events.loop(Phaser.Timer.SECOND * 1.5, this.addOneItem, this); 
        }
        //}, this); 
    },

    // Make the bee jump 
    jump: function() {  
        if (this.bee.alive == false)  
            return; 
        // Add a vertical velocity to the bee
        this.bee.body.velocity.y = -350;
        // ShowSound
        this.jumpSound.play();  
    },

    // Restart the game
    restartGame: function() {  
        // Start the 'main' state, which restarts the game
        game.state.start('main');
    },

    //Add Pipe
    addOnePipe: function(x,y) {  
        // Get the first dead pipe of our group
        var pipe = this.pipes.getFirstDead();

        // Set the new position of the pipe
        pipe.anchor.setTo(0.5, 0.5);
        pipe.reset(x, y);

        // Add velocity to the pipe to make it move left
        pipe.body.velocity.x = -200; 

        // Kill the pipe when it's no longer visible 
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },

    //Add Pipe
    addOneItem: function() {  
        var randomY = Math.floor(Math.random() * 400) + 1;
        //y = (randomY*490);

        // Get the first dead pipe of our group
        var pipe = this.pipes.getFirstDead();

        // Set the new position of the pipe
        pipe.reset(400, randomY);

        // Add velocity to the pipe to make it move left
        pipe.body.velocity.x = -200; 

        // Kill the pipe when it's no longer visible 
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    
        this.score += 1;
        this.labelScore.text = this.score;
        if ((this.score%7)===0){
            //this.fiewSound.play();  
            pipe.body.velocity.x = pipe.body.velocity.x - 50
        }

        if ((this.score%15)===0){
            //this.fiewSound.play();  
            this.game.time.events.loop(Phaser.Timer.SECOND * 1.5, this.addOneItem, this); 
        }

        if ((this.score%13)===0){
            this.fiewSound.play();  
            pipe.body.velocity.x = pipe.body.velocity.x - 100
        }
    },

    // Add a row of 6 pipes with a hole somewhere in the middle
    addRowOfPipes: function() {
        var hole = Math.floor(Math.random()*5)+1;
        
        for (var i = 0; i < 8; i++)
            if (i != hole && i != hole +1) 
                this.addOnePipe(400, i*60+10);   
    },

    hitPipe: function() { 
        // If the bird has already hit a pipe, we have nothing to do
        if (this.bee.alive == false)
            return;

        // Set the alive property of the bird to false
        this.bee.alive = false;
        this.bee.body.gravity.y = 500;

        // Prevent new pipes from appearing
        game.time.events.remove(this.timer);
        this.bee.animations.play('hitBee');
        this.hitSound.play();  

        // Go through all the pipes, and stop their movement
        this.pipes.forEachAlive(function(p){
            p.body.velocity.x = 0;
        }, this);
    },
};

// Add and start the 'main' state to start the game
game.state.add('main', mainState);  
game.state.start('main'); 