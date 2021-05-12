var player;
var cursors;
var paddle;
var padConnected= false;
var platforms;



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
        this.load.tilemapTiledJSON('map','Assets/level.json');
    }
    create(){

        //this.add.image(0,0,'level1').setOrigin(0);
        
        player = this.physics.add.sprite(101,59,'personnage');
        player.body.setAllowGravity(true);
        
        
        const map = this.make.tilemap({key : 'map'});
        const tileset = map.addTilesetImage('Tuiles','tiles');
        
        this.cameras.main.startFollow(player); 
        this.cameras.main.setBounds(0,0,3000,448);
        this.physics.world.setBounds(0,0,3000,448);
        
        platforms = map.createLayer('Platformes',tileset, 0, 0);
        platforms.setCollisionByExclusion(-1,true)
        
        
        player.setBounce(0.1);
        player.setCollideWorldBounds(true);
        this.physics.add.collider(player, platforms);
        
        
        
        cursors = this.input.keyboard.createCursorKeys(); 
        
        
        
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
        if (cursors.left.isDown){
        player.setVelocityX(-600);
        }
        else if (cursors.right.isDown){
            player.setVelocityX(600);
        }
        
        else if (cursors.down.isDown){
            player.setVelocityY(600);
        }
        else{
            player.setVelocityX(0);
        }
        if (cursors.up.isDown && player.body.touching.down){
                        console.log(cursors);
        player.setVelocityY(-450);
        }
    }        
}