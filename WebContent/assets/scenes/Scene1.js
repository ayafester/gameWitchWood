
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	_create() {
	
		var scene1 = this.add.image(399.79092, 319.56915, "textures", "scene1");
		
		var scene1button = this.add.sprite(457, 367, "textures", "scene1button");
		scene1button.setAngle(0.94627905);
		
		this.fScene1 = scene1;
		this.fScene1button = scene1button;
		
	}
	
	/* START-USER-CODE */
	
	create() {
		this._create();
		this.sound.play("audio");
		this.cursors = this.input.keyboard.createCursorKeys();
		var text = this.add.text(10, 10, '', { fill: '#00ff00' });
		
		this.fText = text;
	
   }
	
	update() {
	
		var pointer = this.input.activePointer;
    	
		if(pointer.worldX > 395 && pointer.worldX < 527 && pointer.worldY > 320 && pointer.worldY < 450) {
		
		this.fScene1button.setTint(0xb09877);
		
			if( pointer.isDown ) {
				this.scene.start('Scene2');
			} 
		} else {
			this.fScene1button.clearTint();
		}
	}
	

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
