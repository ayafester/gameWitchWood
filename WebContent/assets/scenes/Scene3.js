
// You can write more code here

/* START OF COMPILED CODE */

class Scene3 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene3");
		
	}
	
	init(data)
    {
        this.fGroupsId = data.id;
    }
    
	create() {
	
		var graphics;
		var moveCam;
		
		
		this.fMoveCam = moveCam;
		this.fMoveCam = false;
		this.fgraphics = graphics;
		
		
		
		this.cursors = this.input.keyboard.createCursorKeys();
		
		this.cameras.main.setBounds(0, 0, 1150, 1060);
   		this.physics.world.setBounds(0, 0, 1150, 960);

    	var pole = this.add.image(0, 0, "textures", "pole").setOrigin(0);
		this.fPole = pole;
		
		
		
		var house = this.physics.add.image(683,550,"textures", "house").setOrigin(0);
		this.fHouse = house;
		this.fHouse.setImmovable();
		
		var fir_tree = this.physics.add.image(3,509,"textures", "fir-tree").setOrigin(0);
		this.fFir_tree = fir_tree;
		this.fFir_tree.setImmovable();
		
		var fir_tree2 = this.physics.add.image(739,0,"textures", "fir-tree").setOrigin(0);
		this.fFir_tree2 = fir_tree2;
		this.fFir_tree2.setImmovable();
		
		var kust = this.physics.add.image(39,757,"textures", "kust").setOrigin(0);
		this.fKust = kust;
		this.fKust.setImmovable();
		
		var kust2 = this.physics.add.image(1059,821,"textures", "kust2").setOrigin(0);
		this.fKust2 = kust2;
		this.fKust2.setImmovable();
		
		var lamp = this.physics.add.image(519,661,"textures", "lamp").setOrigin(0);
		this.fLamp = lamp;
		this.fLamp.setImmovable();
		
		var stone = this.physics.add.image(575,375,"textures", "stone").setOrigin(0);
		this.fStone = stone;
		this.fStone.setImmovable();
		
		var stone2 = this.physics.add.image(55,455,"textures", "stone").setOrigin(0);
		this.fStone2 = stone2;
		this.fStone2.setImmovable();
		
		var stone3 = this.physics.add.image(1000,435,"textures", "stone").setOrigin(0);
		this.fStone3 = stone3;
		this.fStone3.setImmovable();
		
		var stroller = this.physics.add.image(365,761,"textures", "stroller").setOrigin(0);
		this.fStroller = stroller;
		this.fStroller.setImmovable();
		
		var stump = this.physics.add.image(597,795,"textures", "stump").setOrigin(0);
		this.fStump = stump;
		this.fStump.setImmovable();
		
		var tree = this.physics.add.image(589,571,"textures", "tree").setOrigin(0);
		this.fTree = tree;
		this.fTree.setImmovable();
		
		var trees2 = this.physics.add.image(549,37,"textures", "trees2");
		this.fTrees2 = trees2;
		this.fTrees2.setImmovable();
		
		var trees24 = this.physics.add.image(660,37,"textures", "trees2");
		this.fTrees24 = trees24;
		this.fTrees24.setImmovable();
		
		var trees23 = this.physics.add.image(627,150,"textures", "trees2").setOrigin(0);
		this.fTrees23 = trees23;
		this.fTrees23.setImmovable();
		
		var treess3 = this.physics.add.image(150,11,"textures", "trees2").setOrigin(0);
		this.fTreess3 = treess3;
		this.fTreess3.setImmovable();
		
		var treess4 = this.physics.add.image(0,0,"textures", "trees2").setOrigin(0);
		this.fTreess4 = treess4;
		this.fTreess4.setImmovable();
		
		var treess2 = this.physics.add.image(90,121,"textures", "trees2").setOrigin(0);
		this.fTreess2 = treess2;
		this.fTreess2.setImmovable();
		
		var szad = this.physics.add.sprite(489, 719, "textures", "szad");
		szad.setScale(0.22, 0.17);
		this.fSzad = szad;
		
		
		
		var elems = [];
		this.fElems = elems;
		
		var text;
		this.fText = text;
		
		var scene3;
		this.fScene3 = scene3;
		
		var butButton;
		this.fButButton = butButton;
		
		var coins = 0;
		this.fCoins = coins;
		
		
		if (this.fGroupsId == 1) {
			
			this.fElems[0] = this.physics.add.image(521, 473, "textures", "elem1");
    					
			this.fElems[0].setScale(0.02);
			this.tweens.add({
        		targets: this.fElems[0],
        		scaleX: 0.03,
        		scaleY: 0.03,
        		duration: 3000,
        		ease: 'Power3',
        		repeat: 100,
        		delay: 10
    		});
			this.fElems[1] = this.physics.add.image(735, 315, "textures", "elem2");
			this.fElems[1].setScale(0.04); //сова

			this.fElems[2] = this.physics.add.image(83, 931, "textures", "elem3");
			this.fElems[2].setScale(0.02);
			this.tweens.add({
        		targets: this.fElems[2],
        		scaleX: 0.03,
        		scaleY: 0.03,
        		duration: 3000,
        		ease: 'Power3',
        		repeat: 100,
        		delay: 10
    		});
			this.fElems[3] = this.physics.add.image(573, 195, "textures", "elem4");
			this.fElems[3].setScale(0.02);
			this.tweens.add({
        		targets: this.fElems[3],
        		scaleX: 0.03,
        		scaleY: 0.03,
        		duration: 3000,
        		ease: 'Power3',
        		repeat: 100,
        		delay: 10
    		});
			this.fElems[4] = this.physics.add.image(1055, 343, "textures", "elem5");
			this.fElems[4].setScale(0.02);
			this.tweens.add({
        		targets: this.fElems[4],
        		scaleX: 0.03,
        		scaleY: 0.03,
        		duration: 3000,
        		ease: 'Power3',
        		repeat: 100,
        		delay: 10
    		});

			
			this.fScene3 = this.add.image(0, 0, "textures", "scene3").setOrigin(0);
			this.fScene3.setScrollFactor(0);
			
			this.fButButton = this.add.image(708, 514, "textures", "butButton").setOrigin(0).setInteractive();
			this.fButButton.setScrollFactor(0);
			
						
			this.physics.add.overlap(this.fSzad, this.fElems[0], this.moves, null, this);
			this.physics.add.overlap(this.fSzad, this.fElems[1], this.moves2, null, this);
			this.physics.add.overlap(this.fSzad, this.fElems[2], this.moves3, null, this);
			this.physics.add.overlap(this.fSzad, this.fElems[3], this.moves4, null, this);
			this.physics.add.overlap(this.fSzad, this.fElems[4], this.moves5, null, this);	
					
			this.fText = this.add.text(33, 45, 'Перо совы', { font: '17px Courier New Bold', fill: '#000000' });
			this.fText.setScrollFactor(0);
			this.fText1 = this.add.text(35, 65, '-неясеть', { font: '17px Courier New Bold', fill: '#000000' });
			this.fText1.setScrollFactor(0);
			this.fText2 = this.add.text(33, 85, 'гриб', { font: '17px Courier New Bold', fill: '#000000' });
			this.fText2.setScrollFactor(0);
			this.fText3 = this.add.text(35, 105, 'Шиитаки', { font: '17px Courier New Bold', fill: '#000000' });
			this.fText3.setScrollFactor(0);
			this.fText4 = this.add.text(35, 125, 'Листья', { font: '17px Courier New Bold', fill: '#000000' });
			this.fText4.setScrollFactor(0);
			this.fText5 = this.add.text(37, 145, 'крапивы', { font: '17px Courier New Bold', fill: '#000000' });
			this.fText5.setScrollFactor(0);
			this.fText6 = this.add.text(43, 165, 'Западная', { font: '17px Courier New Bold', fill: '#000000' });
			this.fText6.setScrollFactor(0);
			this.fText7= this.add.text(46, 185, 'игуана', { font: '17px Courier New Bold', fill: '#000000' });
			this.fText7.setScrollFactor(0);
		
			
		} else if (this.fGroupsId == 2) {
		
			this.fElems[0] = this.physics.add.image(521, 473, "textures", "elems1");
			this.fElems[0].setScale(0.1);
			this.tweens.add({
        		targets: this.fElems[0],
        		scaleX: 0.03,
        		scaleY: 0.03,
        		duration: 3000,
        		ease: 'Power3',
        		repeat: 100,
        		delay: 10
    		});
			this.fElems[1] = this.physics.add.image(735, 450, "textures", "elems2");
			this.fElems[1].setScale(0.1);
			this.tweens.add({
        		targets: this.fElems[1],
        		scaleX: 0.03,
        		scaleY: 0.03,
        		duration: 3000,
        		ease: 'Power3',
        		repeat: 100,
        		delay: 10
    		});

			this.fElems[2] = this.physics.add.image(83, 880, "textures", "elems3");
			this.fElems[2].setScale(0.1);
			this.tweens.add({
        		targets: this.fElems[2],
        		scaleX: 0.03,
        		scaleY: 0.03,
        		duration: 3000,
        		ease: 'Power3',
        		repeat: 100,
        		delay: 10
    		});
			this.fElems[3] = this.physics.add.image(573, 195, "textures", "elems4");
			this.fElems[3].setScale(0.1);
			this.tweens.add({
        		targets: this.fElems[3],
        		scaleX: 0.03,
        		scaleY: 0.03,
        		duration: 3000,
        		ease: 'Power3',
        		repeat: 100,
        		delay: 10
    		});
			this.fScene3 = this.add.image(0, 0, "textures", "scene3").setOrigin(0);
			this.fScene3.setScrollFactor(0);
			
			this.fButButton = this.add.image(708, 514, "textures", "butButton").setOrigin(0).setInteractive();
			this.fButButton.setScrollFactor(0);
			
			
			this.physics.add.overlap(this.fSzad, this.fElems[0], this.moves, null, this);
			this.physics.add.overlap(this.fSzad, this.fElems[1], this.moves2, null, this);
			this.physics.add.overlap(this.fSzad, this.fElems[2], this.moves3, null, this);
			this.physics.add.overlap(this.fSzad, this.fElems[3], this.moves4, null, this);
			
			
			this.fText1 = this.add.text(33, 45, 'Змея', { font: '17px Courier New Bold', fill: '#000000' });
			this.fText1.setScrollFactor(0);
			this.fText2 = this.add.text(35, 65, 'капусская', { font: '17px Courier New Bold', fill: '#000000' });
			this.fText2.setScrollFactor(0);
			this.fText3 = this.add.text(33, 85, 'Палочник', { font: '17px Courier New Bold', fill: '#000000' });
			this.fText3.setScrollFactor(0);
			this.fText4 = this.add.text(35, 105, 'Листья', { font: '17px Courier New Bold', fill: '#000000' });
			this.fText4.setScrollFactor(0);
			this.fText5 = this.add.text(35, 125, 'баквилы', { font: '17px Courier New Bold', fill: '#000000' });
			this.fText5.setScrollFactor(0);
			this.fText6 = this.add.text(38, 145, 'Боткур', { font: '17px Courier New Bold', fill: '#000000' });
			this.fText6.setScrollFactor(0);
			
		}
		
		
		
		this.physics.add.collider(this.fSzad, this.fHouse, this.hit(), null, this);
		this.physics.add.collider(this.fSzad, this.fFir_tree, this.hit(), null, this);
		this.physics.add.collider(this.fSzad, this.fFir_tree2, this.hit(), null, this);
		this.physics.add.collider(this.fSzad, this.fKust, this.hit(), null, this);
		this.physics.add.collider(this.fSzad, this.fKust2, this.hit(), null, this);
		this.physics.add.collider(this.fSzad, this.fLamp, this.hit(), null, this);
		this.physics.add.collider(this.fSzad, this.fStone, this.hit(), null, this);
		this.physics.add.collider(this.fSzad, this.fStone2, this.hit(), null, this);
		this.physics.add.collider(this.fSzad, this.fStone3, this.hit(), null, this);
		this.physics.add.collider(this.fSzad, this.fStroller, this.hit(), null, this);
		this.physics.add.collider(this.fSzad, this.fStump, this.hit(), null, this);
		this.physics.add.collider(this.fSzad, this.fTree, this.hit(), null, this);
		this.physics.add.collider(this.fSzad, this.fTrees2, this.hit(), null, this);
		this.physics.add.collider(this.fSzad, this.fTreess4, this.hit(), null, this);
		this.physics.add.collider(this.fSzad, this.fTreess3, this.hit(), null, this);
		this.physics.add.collider(this.fSzad, this.fTreess2, this.hit(), null, this);
		this.physics.add.collider(this.fSzad, this.fTrees23, this.hit(), null, this);
		this.physics.add.collider(this.fSzad, this.fTrees24, this.hit(), null, this);
		
		
		
		
		this.fSzad.setCollideWorldBounds(true);
		this.cameras.main.startFollow(this.fSzad, true);
		
		
	

	}
	
	hit() {
	
	}
	
	moves() {
		
		if(this.fGroupsId == 1) {

			this.fElems[0].destroy();
		
			var elemOnTable = [];
			this.fElemOnTable = elemOnTable;
			this.fElemOnTable[0] = this.physics.add.image(220, 600, "textures", "elem1");
			this.fElemOnTable[0].setScale(0.12);
			this.fElemOnTable[0].setScrollFactor(0);
			this.fCoins += 1;
			 
		} else if(this.fGroupsId == 2) {
	
			this.fElems[0].destroy();
		
			var elemOnTable = [];
			this.fElemOnTable = elemOnTable;
			this.fElemOnTable[0] = this.physics.add.image(220, 600, "textures", "elems1");
			this.fElemOnTable[0].setScale(0.4);
			this.fElemOnTable[0].setScrollFactor(0);
			this.fCoins += 1;
		}
	}
	moves2() {
		
		if(this.fGroupsId == 1) {

			this.fElems[1].destroy();
		
			var elemOnTable = [];
			this.fElemOnTable = elemOnTable;
			this.fElemOnTable[1] = this.physics.add.image(250, 600, "textures", "elem2");
			this.fElemOnTable[1].setScale(0.12);
			this.fElemOnTable[1].setScrollFactor(0);
			this.fCoins += 1;
			 
		} else if(this.fGroupsId == 2) {
	
			this.fElems[1].destroy();
		
			var elemOnTable = [];
			this.fElemOnTable = elemOnTable;
			this.fElemOnTable[1] = this.physics.add.image(280, 600, "textures", "elems2");
			this.fElemOnTable[1].setScale(0.4);
			this.fElemOnTable[1].setScrollFactor(0);
			this.fCoins += 1;
		}
	}
	moves3() {
		
		if(this.fGroupsId == 1) {

			this.fElems[2].destroy();
		
			var elemOnTable = [];
			this.fElemOnTable = elemOnTable;
			this.fElemOnTable[2] = this.physics.add.image(280, 600, "textures", "elem3");
			this.fElemOnTable[2].setScale(0.12);
			this.fElemOnTable[2].setScrollFactor(0);
			this.fCoins += 1;
			 
		} else if(this.fGroupsId == 2) {
	
			this.fElems[2].destroy();
		
			var elemOnTable = [];
			this.fElemOnTable = elemOnTable;
			this.fElemOnTable[2] = this.physics.add.image(480, 600, "textures", "elems3");
			this.fElemOnTable[2].setScale(0.3);
			this.fElemOnTable[2].setScrollFactor(0);
			this.fCoins += 1;
		}
	}
	moves4() {
		
		if(this.fGroupsId == 1) {

			this.fElems[3].destroy();
		
			var elemOnTable = [];
			this.fElemOnTable = elemOnTable;
			this.fElemOnTable[3] = this.physics.add.image(395, 600, "textures", "elem4");
			this.fElemOnTable[3].setScale(0.12);
			this.fElemOnTable[3].setScrollFactor(0);
			this.fCoins += 1;
			 
		} else if(this.fGroupsId == 2) {
	
			this.fElems[3].destroy();
		
			var elemOnTable = [];
			this.fElemOnTable = elemOnTable;
			this.fElemOnTable[3] = this.physics.add.image(395, 600, "textures", "elems4");
			this.fElemOnTable[3].setScale(0.3);
			this.fElemOnTable[3].setScrollFactor(0);
			this.fCoins += 1;
		}
	}
	moves5() {
		
		if(this.fGroupsId == 1) {

			this.fElems[4].destroy();
		
			var elemOnTable = [];
			this.fElemOnTable = elemOnTable;
			this.fElemOnTable[4] = this.physics.add.image(350, 600, "textures", "elem5");
			this.fElemOnTable[4].setScale(0.12);
			this.fElemOnTable[4].setScrollFactor(0);
			this.fCoins += 1;
			 
		} else if(this.fGroupsId == 2) {
	
			this.fElems[4].destroy();
		
			var elemOnTable = [];
			this.fElemOnTable = elemOnTable;
			this.fElemOnTable[4] = this.physics.add.image(420, 600, "textures", "elems5");
			this.fElemOnTable[4].setScale(0.4);
			this.fElemOnTable[4].setScrollFactor(0);
			this.fCoins += 1;
		}
		
		
	}

	
	update() {
	
	 	var pointer = this.input.activePointer;
       
		if(pointer.x > 707 && pointer.x < 796 && pointer.y > 515 && pointer.y < 585) {
			
			this.fButButton.setTint(0xb09877);
			
			if( pointer.isDown ) {
			
				if(this.fCoins == 4) {				
					
					this.scene.start('Scene4', {id: this.fGroupsId});
				}
			} 
		} else {
			this.fButButton.clearTint();
		}
		
		
		this.cam = this.cameras.main;
		 
	 	this.fSzad.setVelocity(0);

    	 if (this.cursors.left.isDown)
     	{
        	this.fSzad.setVelocityX(-70);
        	this.fSzad.anims.play("walkBokSleva", true);
     	}
     	else if (this.cursors.right.isDown)
     	{
        	this.fSzad.setVelocityX(70);
        	this.fSzad.anims.play("walkBokSprava", true);
     	}

     	if (this.cursors.up.isDown)
     	{
        	this.fSzad.setVelocityY(-70);
        	this.fSzad.anims.play("walkZad", true);
     	}
     	else if (this.cursors.down.isDown)
     	{
        	this.fSzad.setVelocityY(70);
        	this.fSzad.anims.play("walkAnfas", true);
     	}
	
	}
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
