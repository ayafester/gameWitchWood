
// You can write more code here

/* START OF COMPILED CODE */

class Scene2 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene2");
		
	}
	
    
	create() {
	
		var scene2 = this.add.image(399.9994, 422.82623, "textures", "scene2");
		scene2.setOrigin(0.5, 0.6541554);
		
		var scene2button = this.add.sprite(261.99362, 440.52426, "textures", "scene2button").setInteractive();
		scene2button.setAngle(2.9814613);
		
		var scene2button_1 = this.add.sprite(529.5839, 440.56503, "textures", "scene2button").setInteractive();
		scene2button_1.setAngle(-0.6596921);
		
		this.add.image(403.03003, 318.852, "textures", "text");
		
		var groupElem = 0;
		this.fGroupElem = groupElem;
		
		this.fScene2button = scene2button;
		this.fScene2button_1 = scene2button_1;
		
		this.cursors = this.input.keyboard.createCursorKeys();
		
		this.fScene2button.on('pointerover', function () {

        	this.setTint(0xb09877);
        	

    	});

    	this.fScene2button.on('pointerout', function () {

        	this.clearTint();

    	});

    	this.fScene2button.once('pointerup', function () {
			
			this.lock = true;
			this.fGroupElem = 1;
			this.scene.start('Scene3', {id: 1});
       
	
    	}, this);
    	
    	this.fScene2button_1.on('pointerover', function () {

        	this.setTint(0xb09877);


    	});

    	this.fScene2button_1.on('pointerout', function () {

        	this.clearTint();

    	});

    	this.fScene2button_1.once('pointerup', function () {
			
			this.lock = true;
			this.fGroupElem = 2;
			this.scene.start('Scene3', {id: 2});
       
	
    	}, this);
    	
		
	}
	
	update() {

	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
