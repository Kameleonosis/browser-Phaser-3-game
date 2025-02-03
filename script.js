
class Example extends Phaser.Scene
{
    preload ()
    {
      this.load.audio('twinkle', 'twinkle2.mp3'); // Replace 'path/to/your/audiofile.mp3' with the actual path to your audio file.

       this.load.image('background', 'farm3.jpg');
        this.load.spritesheet('ball', 'axe1.png', { frameWidth: 80, frameHeight: 80 });
this.load.audio('backgroundMusic', 'milan.mp3'); // Replace 'path/to/your/audiofile.mp3' with the actual path to your audio file.
         this.load.image('block', 'ufo.png', { frameWidth: 15, frameHeight: 15 });
          this.load.image('sheep', 'sheep.png', { frameWidth: 15, frameHeight: 15 });
            this.load.image('cow', 'cow.png', { frameWidth: 15, frameHeight: 15 });
          this.load.image('energy', 'energy1.png'); // Replace 'light.png' with the path to your light image.
  this.load.image('heart', 'heart.png'); // Replace 'light.png' with the path to your light image.
    this.load.image('shooter', 'shooter1.png'); // Replace 'light.png' with the path to your light image.
this.load.image('bullet', 'missile.png');
this.load.image('process', 'process.png');
this.load.image('game', 'game-over.png');
this.load.image('winner', 'winner.png');
this.load.image('rabbit', 'rabbit.png');
this.load.image('pigeon', 'pigeon.png');
this.load.image('crack', 'crack.png');
this.load.image('spear', 'spear.png');
    }

    create ()
    {
      function resizeBackground() {
    const gameWidth = this.game.config.width; // Get the game width
    const gameHeight = this.game.config.height; // Get the game height

    // Set the background image size to match the game window
    const background = this.add.image(0, 0, 'background');
    background.setOrigin(0, 0); // Set the origin to the top-left corner
    background.setScale(gameWidth / background.width, gameHeight / background.height);
}

          // ...
          resizeBackground.call(this); // Call the resizeBackground function to set the initial size

          // Listen for the window resize event and reposition the background accordingly
          this.scale.on('resize', resizeBackground, this);





      // Assuming your game's ground level is at Y coordinate 400 (adjust as needed)
      const groundLevelY = 250;


      this.add.image('background');
      // Create the block sprite with physics
      this.bullet = this.physics.add.sprite(400, 100, 'bullet')
          .setBounce(1, 1)
          .setCollideWorldBounds(true);

      // Set an initial velocity (optional)
      this.bullet.setVelocity(150, 150);
      this.process = this.add.image(750, 300, 'process');
      this.process3 = this.add.image(850, 250, 'process');


      const hearts = this.add.group({
          key: 'heart',
          frameQuantity: 20,
      });
      hearts.children.iterate(function (heart) {
          // Set x and y coordinates
          heart.x = Phaser.Math.Between(0, game.config.width);  // You can replace game.config.width with a specific value
          heart.y = Phaser.Math.Between(0, game.config.height); // You can replace game.config.height with a specific value

          // Set the size of the heart
          const scale = Phaser.Math.FloatBetween(0.8, 1.2);  // Adjust the range as needed
          heart.setScale(scale);
      });

 let image222 = this.add.image(35, 200, 'energy');
image222.visible = false;
this.bullet.visible = false;
      this.isSKeyPressed = false;
this.input.keyboard.on('keydown', (event) => {
            if (event.code === 'KeyS') {


                image222.visible = true;
                 this.isSKeyPressed = true;
                 this.bullet.visible = true;

            }
        });
        this.isWKeyPressed = false;
  this.input.keyboard.on('keydown', (event) => {
              if (event.code === 'KeyW') {



                   this.isWKeyPressed = true;


              }
          });
        this.input.keyboard.on('keyup', (event) => {
            if (event.code === 'KeyS') {
                image222.visible = false;
                 this.isSKeyPressed = false;
                 this.bullet.visible = false;
            }
        });

        this.input.keyboard.on('keyup', (event) => {
            if (event.code === 'KeyW') {

                 this.isWKeyPressed = false;

            }
        });

             // ... (other create code)



      this.sheep = this.add.image(35, groundLevelY, 'sheep')
        this.cow = this.add.image(180, groundLevelY, 'cow');
        this.rabbit = this.add.image(1000, groundLevelY, 'rabbit');
                this.pigeon = this.add.image(730, 50, 'pigeon');
      // Enable physics for the game


      // Create the block sprite with physics
      this.block = this.physics.add.sprite(400, 100, 'block')
          .setBounce(0.1, 0.1)
          .setCollideWorldBounds(true);

          this.block.setGravityY(0); // Adjust the gravity value as needed
  this.block.setDepth(1);
      // Set an initial velocity (optional)
      this.block.setVelocity(10, 10);




      // Call the function to check world bounds (optional)



      // Assuming you have initialized your Phaser scene and created a block sprite
    // Make sure to replace 'yourBlock' with the actual variable name of your block

    // Enable block to be interactive and draggable
    // Assuming you have initialized your Phaser scene and created a block sprite named 'block'

    // Handle keyboard input
    const cursors = this.input.keyboard.createCursorKeys();
    const pace = 40; // Adjust the pace as needed

    this.input.keyboard.on('keydown', (event) => {
        if (event.key === "ArrowUp") {
            this.block.y -= pace;
        } else if (event.key === "ArrowDown") {
            this.block.y += pace;
        } else if (event.key === "ArrowLeft") {
            this.block.x -= pace;
        } else if (event.key === "ArrowRight") {
            this.block.x += pace;
        }
    });





        const balls = this.physics.add.group({
            key: 'ball',
            frameQuantity: 4,
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true,
            velocityX: 150,
            velocityY: 150

        });
        const spears = this.physics.add.group({
            key: 'spear',
            frameQuantity: 4,
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true,
            velocityX: 100,
            velocityY: 100

        });

      const backgroundMusic = this.sound.add('backgroundMusic', { loop: false, volume: 0.7 });
            backgroundMusic.play();
            const twinkle = this.sound.add('twinkle', { loop: false, volume: 0.6 });
                  twinkle.play();
                  const menuButton = this.add.text(1100, 0, 'Menu', { font: '40px Arial', fill: '#ffffff' })
                      .setInteractive({ useHandCursor: true })
                      .on('pointerup', this.toggleMenu, this);

                  // Create a menu container (initially invisible)
                  this.menuContainer = this.add.container(1000, 100).setAlpha(0);

                  // Add restart button to the menu
                  const restartButton = this.add.text(0, -50, 'Restart', { font: '40px Arial', fill: '#ffffff' })
                      .setInteractive({ useHandCursor: true })
                      .on('pointerup', this.restartGame, this);

                  // Add mute button to the menu
                  const muteButton = this.add.text(0, 0, 'Mute Audio', { font: '40px Arial', fill: '#ffffff' })
                      .setInteractive({ useHandCursor: true })
                      .on('pointerup', this.toggleAudioMute, this);

                  // Add menu items to the container

                  this.menuContainer.add(restartButton);
                  this.menuContainer.add(muteButton);


              // Toggle Menu Visibility

        for (const ball of balls.getChildren())
        {
            ball.body.onWorldBounds = true;
            this.physics.world.on('worldbounds', (body) => {
    if (body.gameObject === ball) {
        // Rotate the 'ball' sprite by 180 degrees when it collides with the world bounds
        ball.angle += 45;

    }
});

        }
        Phaser.Actions.RandomRectangle(spears.getChildren(), this.physics.world.bounds);

        for (const spear of spears.getChildren())
        {
            spear.body.onWorldBounds = true;
            this.physics.world.on('worldbounds', (body) => {
    if (body.gameObject === spear) {
        // Rotate the 'ball' sprite by 180 degrees when it collides with the world bounds
        spear.angle += 45;

    }
    });

        }


        let collisionCount = 0;

    // Create a collision callback function
    const collisionCallback = (ball, block) => {
        // This function will be called when a ball from the "balls" group collides with the block
        // You can put your logic here

        // For example, you can change the angle of the block
      this.block.angle += 45;

        // Increment the collision counter

// Enable physics for the game
this.block.setScale(1.2, 1.2);

        collisionCount++;
        const totalHearts = hearts.getLength();

          // Hide hearts based on the collisionCount, up to the total number of hearts
          for (let i = 0; i < Math.min(collisionCount, totalHearts); i++) {
              const heart = hearts.getChildren()[i];
              if (heart) {
                  heart.visible = false;
              }
          }
        // Check if the collision count reaches 3
        if (collisionCount === 20) {
          this.add.image(400, 300, 'game');
            // Perform some action when the collision count reaches 3, such as game over
            this.time.delayedCall(4000, () => {
             this.scene.restart();
      this.sound.stopAll(); // Stop all sounds
            });
        }
    };


    // Add the collider with the collision callback
    this.physics.add.collider(balls, this.block, collisionCallback);
    const collisionCallback2 = (spear, block) => {
        // This function will be called when a ball from the "balls" group collides with the block
        // You can put your logic here

        // For example, you can change the angle of the block
      this.block.angle += 45;

        // Increment the collision counter

// Enable physics for the game
this.block.setScale(1.2, 1.2);

        collisionCount++;
        const totalHearts = hearts.getLength();

          // Hide hearts based on the collisionCount, up to the total number of hearts
          for (let i = 0; i < Math.min(collisionCount, totalHearts); i++) {
              const heart = hearts.getChildren()[i];
              if (heart) {
                  heart.visible = false;
              }
          }
        // Check if the collision count reaches 3
        if (collisionCount === 20) {
          this.add.image(400, 300, 'game');
            // Perform some action when the collision count reaches 3, such as game over
            this.time.delayedCall(4000, () => {
             this.scene.restart();
      this.sound.stopAll(); // Stop all sounds
            });
        }
    };
    this.physics.add.collider(spears, this.block, collisionCallback2);


    // Add the collider with the collision callback

}





        update() {
          const maxDistanceTop2 = 250;
          const maxDistanceLeft2 = 800;
          this.block.body.onWorldBounds = true;
      this.physics.world.on('worldbounds', (body) => {







          });
          if (this.isWKeyPressed) {

            this.block.setAngle(360);
            this.block.setScale(1.4,1.4);

            if (
                this.cow.x >= maxDistanceLeft2 &&
                this.cow.y >= maxDistanceTop2
            ) {  this.process3.destroy();
                            this.process4 = this.add.image(950, 300, 'process');
                            let win3 = this.add.text(200,200, "You won the game, only this level hehe.", { font: 'Arial', fontSize: 1000, color: '#FFFFFF' });
                            let win4 = this.add.text(400, 400, "Try another one", { font: 'Serif', fontSize: 100, color: '#FFFFFF' });}
              // Set properties for the block


              // Create a new group of balls with 8 frames
              const direction2X = this.block.x - this.cow.x;
              const direction2Y = this.block.y - this.cow.y;

              // Normalize the direction vector
              const length2 = Math.sqrt(direction2X * direction2X + direction2Y * direction2Y);
              const normalizedDirection2X = direction2X / length2;
              const normalizedDirection2Y = direction2Y / length2;

              // Define the speed at which the sheep moves
              const speed2 = 2;

              // Update the sheep's position based on the direction and speed
              this.cow.x += normalizedDirection2X * speed2;
              this.cow.y += normalizedDirection2Y * speed2;
          }
            // Check if the 'S' key is pressed
            if (this.isSKeyPressed) {
let brojac2 = this.add.text(100,100, "LEVEL 1", { font: 'Arial', fontSize: 500, color: '#ff0000' });
              // Check if 'sheep' is within 200px from the top and left
              // Check if 'sheep' is within 200px from the top and left
              const maxDistanceTop = 250;
              const maxDistanceLeft = 700;

              if (
                  this.sheep.x >= maxDistanceLeft &&
                  this.sheep.y >= maxDistanceTop
              ) {



        // Optionally, you can unload this scene if it's no longer needed
        let brojac3 = this.add.text(100,100, "LEVEL 2", { font: 'Arial', fontSize: 500, color: '#ff0000' });
brojac2.destroy();
  this.process.destroy();
                this.process2 = this.add.image(850, 300, 'process');




                  // 'sheep' is within the specified distance from the top and left
                  console.log('Sheep is within 200px from the top and left.');
                  let win = this.add.text(200,200, "You won the game, only this level hehe.", { font: 'Arial', fontSize: 1000, color: '#FFFFFF' });
                  let win2 = this.add.text(400, 400, "Try another one", { font: 'Serif', fontSize: 100, color: '#FFFFFF' });
win2.setScale(2); // Doubles the size of the text

              } else {
                  // 'sheep' is not within the specified distance
                  console.log('Sheep is not within 200px from the top and left.');
              }

                // Calculate the direction from sheep to UFO
                const directionX = this.block.x - this.sheep.x;
                const directionY = this.block.y - this.sheep.y;

                // Normalize the direction vector
                const length = Math.sqrt(directionX * directionX + directionY * directionY);
                const normalizedDirectionX = directionX / length;
                const normalizedDirectionY = directionY / length;

                // Define the speed at which the sheep moves
                const speed = 2;

                // Update the sheep's position based on the direction and speed
                this.sheep.x += normalizedDirectionX * speed;
                this.sheep.y += normalizedDirectionY * speed;



  let imageShooter = this.add.image(1000, 280, 'shooter');

                   // Update the blue line position
                   const direction1X = this.block.x - this.bullet.x;
                   const direction1Y = this.block.y - this.bullet.y;

                   // Normalize the direction vector
                   const length1 = Math.sqrt(direction1X * direction1X + direction1Y * direction1Y);
                   const normalizedDirection1X = direction1X / length1;
                   const normalizedDirection1Y = direction1Y / length1;

                   // Define the speed at which the sheep moves
                   const speed1 = 3;

                   // Update the sheep's position based on the direction and speed
                  this.bullet.x += normalizedDirection1X * speed1;
                  this.bullet.y += normalizedDirection1Y * speed1;
                  this.physics.add.collider(this.bullet, this.block, (bullet, block) => {
    // This function will be called when the bullet collides with the block
    // You can put your logic here

block.visible = false;
this.add.image(400, 300, 'game');
let gameover = this.add.text(500, 100,"GAME OVER", { font: 'Arial', fontSize: 60,  color: '#ff0000' });
let textToShow = this.add.text(1000, 100,"Ooooopse we do not have 10 lives", { font: 'Arial', fontSize: 100, color: '#ff0000' });
const displayDuration = 1000; // 5 seconds in milliseconds
        this.time.delayedCall(6000, () => {
            textToShow.destroy(); // Remove the text after 5 seconds
        });
        this.time.delayedCall(9000, () => {
          backgroundMusic.stop();
        twinkle.stop();
        this.scene.restart();

        });


});

            }

            if (

                this.sheep.x >= 750 &&
                this.sheep.y >= 200 &&
                this.cow.y >= 200 &&
                 this.cow.x >= 800
            ) {
            this.add.image(400, 300, 'winner');
            console.log('Winner');
             this.scene.restart();
               this.sound.stopAll(); // Stop all sounds
            }
}


toggleMenu() {
    // Toggle menu visibility and tween the container's alpha accordingly
    this.menuVisible = !this.menuVisible;

    if (this.menuVisible) {
        this.tweens.add({
            targets: this.menuContainer,
            alpha: 1,
            duration: 300,
            ease: 'Linear'
        });
    } else {
        this.tweens.add({
            targets: this.menuContainer,
            alpha: 0,
            duration: 300,
            ease: 'Linear'
        });
    }
}

// Restart the Game
restartGame() {
    // Restart the game logic goes here
    console.log('Game restarted!');
    this.toggleMenu(); // Hide the menu after restarting
    this.scene.restart();
    this.sound.stopAll(); // Stop all sounds
}

// Toggle Audio Mute
toggleAudioMute() {
    // Toggle audio mute logic goes here
    console.log('Audio muted/toggled!');

    // Toggle the mute state
    this.sound.mute = !this.sound.mute;

    if (this.sound.mute) {
        console.log('Audio muted!');
    } else {
        console.log('Audio unmuted!');
    }
}


  }





const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 400,

    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                y: 10
            }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
