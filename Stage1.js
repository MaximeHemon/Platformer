var player;
var cursors;
var paddle;
var padConnected= false;
var platforms;
var sol;
var KeyZ;
var KeyQ;
var KeyS;
var KeyD;
var nuage1;
var nuage2;
var nuage3;
var collision_bas;
var viensDeTraverser = false;
var lune;
var timedEvent;
var enemy1;
var enemy2;
var enemy3;
var ennemie_cree = false;


class Stage1 extends Phaser.Scene{
    constructor(){
        super("Stage1");
    }
    init(data){
    }
    preload(){   
        
        this.load.image('ball', 'Assets/ball.png');
        this.load.image('lune','Assets/lune.png')
        this.load.image('ciel','Assets/ciel_etoiles.png')
        this.load.image('level1','Assets/scene1.png');
        this.load.image('personnage','Assets/Shadow.png');
        this.load.image('tiles','Assets/Tiles.png');
        this.load.image('enemy1', 'Assets/Enemy1.png');
        this.load.image('enemy2', 'Assets/Enemy2.png');
        this.load.image('enemy3', 'Assets/Enemy3.png');
        this.load.tilemapTiledJSON('map','Assets/level_platforme.json');
        this.load.image('nuage1','Assets/nuage_1.png');
        this.load.image('nuage2','Assets/nuage_2.png');
        this.load.image('nuage3','Assets/nuage_3.png');
        
    }
    create(){
        
        //----------setTimeout-------------//
        // setTimeout(function(){ce qui se passe}, temps en millisecondes) //
        //--------------------------------//

        // Time 
        
        /*timedEvent = this.time.addEvent({ 
            delay: 10000, 
            callback: onEvent, 
            callbackScope: this, 
            repeat: 1, 
            startAt: 5000 
        });
        */
        
        //Ennemies 
        enemy1 = this.physics.add.group();
        enemy2 = this.physics.add.group();
        enemy3 = this.physics.add.group();
        //Timer de spawn ennemies
        timedEvent = this.time.delayedCall(3000, onEvent, [], this);
        setTimeout(function(){ ennemie_cree = false}, 10000); //160000
        ennemie_cree = true;
        
        
        //ciel
        this.add.image(0,-118,'ciel').setOrigin(0);
        
        //Nuages 
        nuage3 = this.physics.add.group();
        var image = this.add.image(-100,220,'nuage3');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 327000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage3 = this.physics.add.group();
        var image = this.add.image(-100,325,'nuage3');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 307000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage3 = this.physics.add.group();
        var image = this.add.image(-100,250,'nuage3');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 287000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage2 = this.physics.add.group();
        var image = this.add.image(-100,180,'nuage2');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 160000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage2 = this.physics.add.group();
        var image = this.add.image(-100,100,'nuage2');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 167000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage2 = this.physics.add.group();
        var image = this.add.image(-100,200,'nuage2');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 147000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage1 = this.physics.add.group();
        var image = this.add.image(-100,400,'nuage1');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 107000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });  
        
        nuage1 = this.physics.add.group();
        var image = this.add.image(-100,200,'nuage1');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 97000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        }); 
            
        nuage3 = this.physics.add.group();
        var image = this.add.image(1500,350,'nuage3');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 55000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage3 = this.physics.add.group();
        var image = this.add.image(1500,300,'nuage3');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 58000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage3 = this.physics.add.group();
        var image = this.add.image(1500,200,'nuage3');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 50000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage2 = this.physics.add.group();
        var image = this.add.image(1500,170,'nuage2');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 59000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage2 = this.physics.add.group();
        var image = this.add.image(1500,220,'nuage2');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 57000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage2 = this.physics.add.group();
        var image = this.add.image(1500,115,'nuage2');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 56500,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage1 = this.physics.add.group();
        var image = this.add.image(1500,150,'nuage1');
        this.tweens.add({

            targets: image,
            x: 1700,
            duration: 53500,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });  
        
        nuage1 = this.physics.add.group();
        var image = this.add.image(1500,190,'nuage1');
        this.tweens.add({

            targets: image,
            x: 1700,
            duration: 56000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        //lune spawn
        lune=this.add.image(1500,800,'lune').setOrigin(0);

        lune.angle += 135;
        
        //Maison 
        this.add.image(0,-118,'level1').setOrigin(0);
       
        // lune

        // ball 
        /*
        var balls = this.physics.add.group({
        key: 'ball',
        quantity: 1,
        bounceX: 1,
        bounceY: 1,
        collideWorldBounds: true,
        velocityX: 100,
        velocityY: 100
        });
        
        
        
        this.physics.add.collider(
        balls,
        player,
        sol,
        platforms,
        function (ball, player,platforms,sol)
        {
            ball.setAlpha(1);
        });
        */
        
        player = this.physics.add.sprite(101,630,'personnage');
        player.body.setAllowGravity(true);
        
        
        const map = this.make.tilemap({key : 'map'});
        const tileset = map.addTilesetImage('Tuiles','tiles');
        
        this.cameras.main.setZoom(0.70)
        this.cameras.main.startFollow(player); 
        this.cameras.main.setBounds(0,0,3000,768);
        this.physics.world.setBounds(0,0,3000,768);
         
        platforms = map.createLayer('Platformes',tileset, 0, 0);
        platforms.setCollisionByExclusion(-1,true);
        
        sol = map.createLayer('Sol',tileset, 0, 0);
        sol.setCollisionByExclusion(-1,true);
        
        
        player.setBounce(0.1);
        player.setCollideWorldBounds(true);
        collision_bas = this.physics.add.collider(player, platforms, passe_partout, null, this);
        this.physics.add.collider(player, sol);
        this.physics.add.collider(enemy1, sol);
        this.physics.add.collider(enemy2, sol);
        this.physics.add.collider(enemy3, sol);
        
        function passe_partout (player,platforms){
            if(cursors.down.isDown || KeyS.isDown){
                collision_bas.active = false;
                viensDeTraverser = true;
                if (viensDeTraverser == true){
                    viensDeTraverser = false;
                    setTimeout(function(){collision_bas.active = true}, 25);
                }
            }
        }
        
        cursors = this.input.keyboard.createCursorKeys(); 
        
        KeyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        KeyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        KeyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        KeyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
          
        }
    

        update(){
            
        // moon path
        lune.angle+=0.02;
        if (Math.round(lune.angle)==-34)
        {lune.angle+=180;}
        
        // timer spawn ennemy    
        if (ennemie_cree == true){
            
            setTimeout(function(){
                enemy1.create(101,650,'enemy1');
                enemy1.setCollideWorldBounds(true);
            }, 10000);
            setTimeout(function(){
                enemy2.create(200,650,'enemy2');
                enemy2.setCollideWorldBounds(true);
            }, 20000);
            setTimeout(function(){
                enemy3.create(2950,650,'enemy3');
                enemy3.setCollideWorldBounds(true);
            }, 30000);
            setTimeout(function(){ennemie_cree = false}, 3000);
        }  
        

        //Controles Manette
        this.input.gamepad.once('connected', function (pad) {
        paddle = pad;
        padConnected = true;
        });
        
        if (padConnected){
        if (paddle.left)
        {
        player.setVelocityX(-300);

        //player.anims.play('left', true);
        }
        else if (paddle.right)
        {
        player.setVelocityX(300);
        }
        //player.anims.play('right', true);
        else{
        player.setVelocityX(0);
        }    
        //player.anims.play('turn');
        if (paddle.up){
        player.setVelocityY(-300);
        }  
        else{
        player.setVelocityY(0); 
        }
        if (paddle.down){
        player.setVelocityY(300);
        }
        else{
        player.setVelocityY(0);
        }
        
        }
        
        //Controles Clavier
        if (cursors.left.isDown || KeyQ.isDown){
        player.setVelocityX(-600);
        }
        else if (cursors.right.isDown || KeyD.isDown){
            player.setVelocityX(600);
        }
        
        else if (cursors.down.isDown || KeyS.isDown){
            player.setVelocityY(900);
        }
        else{
            player.setVelocityX(0);
        }
        if (cursors.up.isDown&& player.body.blocked.down || KeyZ.isDown && player.body.blocked.down){
        
        player.setVelocityY(-450);
            collision_bas.active = false;
            setTimeout(function(){collision_bas.active = true}, 900);
            
        }        
    }        
}

function onEvent ()
{

}

