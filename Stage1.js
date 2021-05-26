var player;
var cursors;
var paddle;
var padConnected= false;
var platforms;
var KeyZ;
var KeyQ;
var KeyS;
var KeyD;
var nuage1;
var nuage2;
var nuage3;


class Stage1 extends Phaser.Scene{
    constructor(){
        super("Stage1");
    }
    init(data){
    }
    preload(){   
        
        this.load.image('level1','Assets/scene1.png');
        this.load.image('personnage','Assets/Shadow.png');
        this.load.image('tiles','Assets/Tiles.png');
        this.load.tilemapTiledJSON('map','Assets/level_platforme.json');
        this.load.image('nuage1','Assets/nuage_1.png');
        this.load.image('nuage2','Assets/nuage_2.png');
        this.load.image('nuage3','Assets/nuage_3.png');
        
    }
    create(){

        //Nuages 
        
        nuage3 = this.physics.add.group();
        var image = this.add.image(-100,190,'nuage3');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 327000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage3 = this.physics.add.group();
        var image = this.add.image(-100,80,'nuage3');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 307000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage3 = this.physics.add.group();
        var image = this.add.image(-100,120,'nuage3');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 287000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage2 = this.physics.add.group();
        var image = this.add.image(-100,100,'nuage2');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 160000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage2 = this.physics.add.group();
        var image = this.add.image(-100,140,'nuage2');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 167000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage2 = this.physics.add.group();
        var image = this.add.image(-100,80,'nuage2');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 147000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage1 = this.physics.add.group();
        var image = this.add.image(-100,80,'nuage1');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 107000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });  
        
        nuage1 = this.physics.add.group();
        var image = this.add.image(-100,180,'nuage1');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 97000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        }); 
            
        nuage3 = this.physics.add.group();
        var image = this.add.image(1500,190,'nuage3');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 53000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage3 = this.physics.add.group();
        var image = this.add.image(1500,80,'nuage3');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 52000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage3 = this.physics.add.group();
        var image = this.add.image(1500,120,'nuage3');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 50000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage2 = this.physics.add.group();
        var image = this.add.image(1500,100,'nuage2');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 40000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage2 = this.physics.add.group();
        var image = this.add.image(1500,140,'nuage2');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 37000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage2 = this.physics.add.group();
        var image = this.add.image(1500,80,'nuage2');
        this.tweens.add({

            targets: image,
            x: 3200,
            duration: 33500,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
        
        nuage1 = this.physics.add.group();
        var image = this.add.image(1500,80,'nuage1');
        this.tweens.add({

            targets: image,
            x: 1700,
            duration: 13500,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });  
        
        nuage1 = this.physics.add.group();
        var image = this.add.image(1500,180,'nuage1');
        this.tweens.add({

            targets: image,
            x: 1700,
            duration: 10500,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        }); 
        
        this.add.image(0,-120,'level1').setOrigin(0);
        
        player = this.physics.add.sprite(101,59,'personnage');
        player.body.setAllowGravity(true);
        
        
        const map = this.make.tilemap({key : 'map'});
        const tileset = map.addTilesetImage('Tuiles','tiles');
        
        this.cameras.main.setZoom(0.80)
        this.cameras.main.startFollow(player); 
        this.cameras.main.setBounds(0,0,3000,768);
        this.physics.world.setBounds(0,0,3000,768);
        
        platforms = map.createLayer('Platformes',tileset, 0, 0);
        platforms.setCollisionByExclusion(-1,true)
        
        
        player.setBounce(0.1);
        player.setCollideWorldBounds(true);
        this.physics.add.collider(player, platforms);
        
        
        
        cursors = this.input.keyboard.createCursorKeys(); 
        
        KeyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        KeyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        KeyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        KeyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
        
        
        }
        update(){
            
          
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
        }        
    }        
}