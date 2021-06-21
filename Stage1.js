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
var enemy4;
var ennemie_cree = false;
var compteur1;
var IAenemy1 = false;
var IAenemy2 = false;
var IAenemy3 = false;
var IAenemy4 = false;
var nouveau_enemy1;
var nouveau_enemy2;
var nouveau_enemy3;
var nouveau_enemy4;

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
        this.load.image('enemy1', 'Assets/Enemy1.png');
        this.load.image('enemy2', 'Assets/Enemy2.png');
        this.load.image('enemy3', 'Assets/Enemy3.png');
        this.load.image('enemy4', 'Assets/Enemy4.png');
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
        enemy4 = this.physics.add.group();
        
        //Timer de spawn ennemies
        timedEvent = this.time.delayedCall(3000, onEvent, [], this);
        setTimeout(function(){ ennemie_cree = false}, 160000); //10000
        ennemie_cree = true;
        
        
       
        //Tween Ennemies
        /*this.tweens.add({

            targets: enemy1,
            x: 1500,
            duration: 5000,
            ease: 'Sine.easeInOut',
            loop: 90,
            loopDelay: 0
        });
            
        this.tweens.add({
            
            targets: [enemy1, enemy2],
                x: 1500,
                    duration: 100,
                    //flipX: true,
                    repeat: -1,
                    yoyo: true,
                    repeat: -1
        });
        this.tweens.add({
            
            targets: [enemy3, enemy4],
                x: -1500,
                    duration: 100,
                    //flipX: true,
                    repeat: -1,
                    yoyo: true,
                    repeat: -1
        });*/
        
        
        
        // Compteur pour limiter les ennemis 
        //compteur1 = 
            
        //ciel
        this.add.image(0,-118,'ciel').setOrigin(0);
        

        //lune spawn
        lune=this.add.image(1500,800,'lune').setOrigin(0);

        lune.angle += 135;
        
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
        
        //Maison 
        this.add.image(0,-118,'level1').setOrigin(0);
       
        /*
        
        this.physics.add.collider(
        enemy1,
        player,
        sol,
        platforms,
        function (enemy1, player,platforms,sol)
        {
            enemy1.setAlpha(1);
        });
        */
        
        //player
        player = this.physics.add.sprite(1500,630,'personnage');
        player.body.setAllowGravity(true);
        
        //Tiled map
        const map = this.make.tilemap({key : 'map'});
        const tileset = map.addTilesetImage('Tuiles','tiles');
        
        //Caméras
        this.cameras.main.setZoom(0.70)
        this.cameras.main.startFollow(player); 
        this.cameras.main.setBounds(0,0,3000,768);
        this.physics.world.setBounds(0,0,3000,768);
        
        //platforms
        platforms = map.createLayer('Platformes',tileset, 0, 0);
        platforms.setCollisionByExclusion(-1,true);
        
        //Sol
        sol = map.createLayer('Sol',tileset, 0, 0);
        sol.setCollisionByExclusion(-1,true);
        
        //Collider player
        player.setBounce(0.1);
        player.setCollideWorldBounds(true);
        collision_bas = this.physics.add.collider(player, platforms, passe_partout, null, this);
        this.physics.add.collider(player, sol);
        this.physics.add.collider(enemy1, sol);
        this.physics.add.collider(enemy2, sol);
        this.physics.add.collider(enemy3, sol);
        this.physics.add.collider(enemy4, sol);
        
        //going tough platforms
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
        
        //cursors
        cursors = this.input.keyboard.createCursorKeys(); 
        
        //ZQSD
        KeyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        KeyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        KeyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        KeyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
          
        }
    

    

        update(){
        /*    
        //comportements ennemies 
        if (ennemy1.x > player.x && ennemy1.x >= 1500){
            ennemy1.setVelocityX(-100);
        else if (ennemy1.x < player.x && ennemy1s.x <= 3000){
            ennemy1.setVelocityX(100);
        */ 
            
        // moon path
        lune.angle+=0.02;
        if (Math.round(lune.angle)==-34)
        {lune.angle+=180;}
        
        // timer spawn ennemy    
        if (ennemie_cree == true){
            ennemie_cree = false;
            setTimeout(function(){
                nouveau_enemy1 = enemy1.create(101,650,'enemy1');
                IAenemy1 = true;
            }, 5000);
            
            setTimeout(function(){
                enemy2.create(200,650,'enemy2');
                IAenemy2 = true;
            }, 12000);
            setTimeout(function(){
                enemy3.create(2950,650,'enemy3');
                IAenemy3 = true;
            }, 25000);
            setTimeout(function(){
                enemy4.create(2700,650,'enemy4');
                IAenemy4 = true;
            }, 30000);
        }  
        //Comportement Enemy1 
        if (IAenemy1 == true){
            if (nouveau_enemy1.x < player.x && nouveau_enemy1.x >= 0){
            nouveau_enemy1.setVelocityX(25);
            }
            else if (nouveau_enemy1.x > player.x && nouveau_enemy1.x <= 3000){
            nouveau_enemy1.setVelocityX(-25);
            }
            
        }
        
        if (IAenemy1 == true){
            if(nouveau_enemy1.x >= 1500){
                nouveau_enemy1.destroy();
                IAenemy1 = false;
            }
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

