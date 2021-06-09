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
var timeStep;
var lune;
var path;
//var iter = 0;


//test orbite
/*
var follower;
var path;
var graphics;
*/

class Stage1 extends Phaser.Scene{
    constructor(){
        super("Stage1");
    }
    init(data){
    }
    preload(){   
        
        this.load.image('lune','Assets/lune.png')
        this.load.image('ciel','Assets/ciel_etoiles.png')
        this.load.image('level1','Assets/scene1.png');
        this.load.image('personnage','Assets/Shadow.png');
        this.load.image('tiles','Assets/Tiles.png');
        
        
        this.load.tilemapTiledJSON('map','Assets/level_platforme.json');
        this.load.image('nuage1','Assets/nuage_1.png');
        this.load.image('nuage2','Assets/nuage_2.png');
        this.load.image('nuage3','Assets/nuage_3.png');
        
    }
    create(){
        
        
        //----------setTimeout-------------//
        // setTimeout(function(){ce qui se passe}, temps en millisecondes) //
        //--------------------------------//
                
        
        this.add.image(0,-118,'ciel').setOrigin(0);
       
        //scroll lune
        
        lune=this.add.image(1500,800,'lune').setOrigin(0);
        
        
     
        
        //test orbite 
        /*
        graphics = this.add.graphics();

        follower = { t: 0, vec: new Phaser.Math.Vector2() };

        path = new Phaser.Curves.Path();

        path.add(new Phaser.Curves.Ellipse(1450, 900, 900)); //(400, 300, 100));

        this.tweens.add({
        targets: follower,
        t: 1,
        ease: 'Sine.easeInOut',
        duration: 26000,
        yoyo: false,
        repeat: -1
        });
        */
        

        timeStep = new Phaser.Time.TimerEvent({ delay: 4000});
        
        this.time.addEvent(timeStep);
        
        this.input.on('pointerdown', () => {
        
            this.time.addEvent(timeStep);
            }, this);
        


        
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
        
        this.add.image(0,-118,'level1').setOrigin(0);
        
        player = this.physics.add.sprite(101,59,'personnage');
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
            
                   /* essai mouvement de lune */
        /*
        lune.tilePositionX = Math.cos(iter) * 2000;
        lune.tilePositionY = Math.sin(iter) * 200;
        iter += 0.0002;
        */
         
        
        //var progress = timeStep.getProgress();
        lune.angle+=0.1;
        console.log(lune.angle);
        if (Math.round(lune.angle)==-35)
        {lune.angle+=180;}
        //lune.x+=0.1;
           
        //test orbite
        /*
        graphics.clear();
        graphics.lineStyle(1, 0xfffCf, 0);

        path.draw(graphics);

        path.getPoint(follower.t, follower.vec);
            
        graphics.fillStyle(0xfffCf , 1); //('lune')
        graphics.fillCircle(follower.vec.x, follower.vec.y, 140);
        */
          
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
            player.setVelocityY(600);
        }
        else{
            player.setVelocityX(0);
        }
        if (cursors.up.isDown&& player.body.blocked.down || KeyZ.isDown && player.body.blocked.down){
                        console.log(cursors);
        player.setVelocityY(-450);
            collision_bas.active = false;
            setTimeout(function(){collision_bas.active = true}, 800);
        }        
    }        
}