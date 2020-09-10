
// You can write more code here

/* START OF COMPILED CODE */

class Scene4 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene4");
		
	}
	
	init(data)
    {
       
        this.fGroups = data.id;
    }
	
	create() {
	
		this.add.image(399.99997, 324.7984, "textures", "scene4");
		var elems = [{}, {}, {}, {}, {}];
		this.fElems = elems;
		
		var countis = 0;
		this.fCountis = countis;
		
		var iter = [0,1,2,3];
		var that = this;
		
		var text = this.add.text(10, 10, '', { fill: '#00ff00' });
		this.fText = text;
		
		var finText;
		this.fFinText = finText;
	
		if(this.fGroups == 1) {
		
			
			this.fElems[0].img = this.add.image(151,549,"textures", "elem1").setInteractive();
			this.fElems[0].id = 0;
			this.fElems[0].img.setScale(0.1);
			
			this.input.setDraggable(this.fElems[0].img);

        	this.fElems[0].img.on('dragstart', function (pointer) {

        	});

        	this.fElems[0].img.on('drag', function (pointer, dragX, dragY) {

            	this.x = dragX;
            	this.y = dragY;

        	});
			
        	this.fElems[0].img.on('dragend', function (pointer) {
        		
				if(this.x > 349 && this.x <449 && this.y > 382 && this.y < 482) {
					if(iter[0] == 0) {//подожду ответа Саши
					
						this.destroy();
						that.fCountis += 1;
						that.newBottle();
					} 
					else {
					
						this.x = 151;
						this.y = 549;
						
					}
					
				}
        	});
        	this.fElems[1].img = this.add.image(489,557,"textures", "elem3").setInteractive();
			this.fElems[1].id = 1;
			this.fElems[1].img.setScale(0.1);
			
			this.input.setDraggable(this.fElems[1].img);

        	this.fElems[1].img.on('dragstart', function (pointer) {

        	});

        	this.fElems[1].img.on('drag', function (pointer, dragX, dragY) {

            	this.x = dragX;
            	this.y = dragY;

        	});
			
        	this.fElems[1].img.on('dragend', function (pointer) {
        		
				if(this.x > 349 && this.x <449 && this.y > 382 && this.y < 482) {
					console.log("1");
					if(iter[0] == that.fElems[0].id && iter[1] == that.fElems[1].id) {
						
						this.destroy();
						that.fCountis += 1;
						that.newBottle();
					} else {
						
					}
					
				}
        	});
        	this.fElems[2].img = this.add.image(309,559,"textures", "elem4").setInteractive();
			this.fElems[2].id = 2;
			this.fElems[2].img.setScale(0.1);
			
			this.input.setDraggable(this.fElems[2].img);

        	this.fElems[2].img.on('dragstart', function (pointer) {

        	});

        	this.fElems[2].img.on('drag', function (pointer, dragX, dragY) {

            	this.x = dragX;
            	this.y = dragY;

        	});
			
        	this.fElems[2].img.on('dragend', function (pointer) {
        		
				if(this.x > 349 && this.x <449 && this.y > 382 && this.y < 482) {
					
					if(iter[0] == that.fElems[0].id && iter[1] == that.fElems[1].id && 
					iter[2] == that.fElems[2].id) {
						
						this.destroy();
						that.fCountis += 1;
						that.newBottle();
					} else {
						
					}
					
				}
        	});
        	this.fElems[3].img = this.add.image(245,443,"textures", "elem5").setInteractive();
			this.fElems[3].id = 3;
			this.fElems[3].img.setScale(0.1);
			
			this.input.setDraggable(this.fElems[3].img);

        	this.fElems[3].img.on('dragstart', function (pointer) {

        	});

        	this.fElems[3].img.on('drag', function (pointer, dragX, dragY) {

            	this.x = dragX;
            	this.y = dragY;

        	});
			
        	this.fElems[3].img.on('dragend', function (pointer) {
        		
				if(this.x > 349 && this.x <449 && this.y > 382 && this.y < 482) {
					
					if(iter[0] == that.fElems[0].id && iter[1] == that.fElems[1].id && 
					iter[2] == that.fElems[2].id && iter[3] == that.fElems[3].id) {
						
						this.destroy();
						that.fCountis += 1;
						that.newBottle();
					} else {
						
					}
					
				}
        	});
        
			
			this.add.text(28, 45, 'Перо совы', { font: '17px Courier New Bold', fill: '#000000' });
			this.add.text(30, 65, '-неясеть', { font: '17px Courier New Bold', fill: '#000000' });
			this.add.text(30, 85, 'гриб', { font: '17px Courier New Bold', fill: '#000000' });
			this.add.text(32, 105, 'Шиитаки', { font: '17px Courier New Bold', fill: '#000000' });
			this.add.text(32, 125, 'Листья', { font: '17px Courier New Bold', fill: '#000000' });
			this.add.text(33, 145, 'крапивы', { font: '17px Courier New Bold', fill: '#000000' });
			this.add.text(40, 165, 'Западная', { font: '17px Courier New Bold', fill: '#000000' });
			this.add.text(40, 185, 'игуана', { font: '17px Courier New Bold', fill: '#000000' });
		
		} else if(this.fGroups == 2) {
		
			this.fElems[0].img = this.add.image(151,549,"textures", "elems1").setInteractive();
			this.fElems[0].id = 0;
			this.fElems[0].img.setScale(0.3);
			
			this.input.setDraggable(this.fElems[0].img);

        	this.fElems[0].img.on('dragstart', function (pointer) {

        	});

        	this.fElems[0].img.on('drag', function (pointer, dragX, dragY) {

            	this.x = dragX;
            	this.y = dragY;

        	});
			
        	this.fElems[0].img.on('dragend', function (pointer) {
        		
				if(this.x > 349 && this.x <449 && this.y > 382 && this.y < 482) {
					if(iter[0] == 0) {//подожду ответа Саши
					
						this.destroy();
						that.fCountis += 1;
						that.newBottle();
					} 
					else {
					
						this.x = 151;
						this.y = 549;
						
					}
					
				}
        	});
        	this.fElems[1].img = this.add.image(489,557,"textures", "elems2").setInteractive();
			this.fElems[1].id = 1;
			this.fElems[1].img.setScale(0.3);
			
			this.input.setDraggable(this.fElems[1].img);

        	this.fElems[1].img.on('dragstart', function (pointer) {

        	});

        	this.fElems[1].img.on('drag', function (pointer, dragX, dragY) {

            	this.x = dragX;
            	this.y = dragY;

        	});
			
        	this.fElems[1].img.on('dragend', function (pointer) {
        		
				if(this.x > 349 && this.x <449 && this.y > 382 && this.y < 482) {
					console.log("1");
					if(iter[0] == that.fElems[0].id && iter[1] == that.fElems[1].id) {
						
						this.destroy();
						that.fCountis += 1;
						that.newBottle();
					} else {
						
					}
					
				}
        	});
        	this.fElems[2].img = this.add.image(309,559,"textures", "elems3").setInteractive();
			this.fElems[2].id = 2;
			this.fElems[2].img.setScale(0.3);
			
			this.input.setDraggable(this.fElems[2].img);

        	this.fElems[2].img.on('dragstart', function (pointer) {

        	});

        	this.fElems[2].img.on('drag', function (pointer, dragX, dragY) {

            	this.x = dragX;
            	this.y = dragY;

        	});
			
        	this.fElems[2].img.on('dragend', function (pointer) {
        		
				if(this.x > 349 && this.x <449 && this.y > 382 && this.y < 482) {
					
					if(iter[0] == that.fElems[0].id && iter[1] == that.fElems[1].id && 
					iter[2] == that.fElems[2].id) {
						
						this.destroy();
						that.fCountis += 1;
						that.newBottle();
					} else {
						
					}
					
				}
        	});
        	this.fElems[3].img = this.add.image(245,443,"textures", "elems4").setInteractive();
			this.fElems[3].id = 3;
			this.fElems[3].img.setScale(0.3);
			
			this.input.setDraggable(this.fElems[3].img);

        	this.fElems[3].img.on('dragstart', function (pointer) {

        	});

        	this.fElems[3].img.on('drag', function (pointer, dragX, dragY) {

            	this.x = dragX;
            	this.y = dragY;

        	});
			
        	this.fElems[3].img.on('dragend', function (pointer) {
        		
				if(this.x > 349 && this.x <449 && this.y > 382 && this.y < 482) {
					
					if(iter[0] == that.fElems[0].id && iter[1] == that.fElems[1].id && 
					iter[2] == that.fElems[2].id && iter[3] == that.fElems[3].id) {
						
						this.destroy();
						that.fCountis += 1;
						that.newBottle();
					} else {
						
					}
					
				}
        	});
        
			
			this.fText1 = this.add.text(33, 45, 'Змея', { font: '17px Courier New Bold', fill: '#000000' });
			this.fText2 = this.add.text(35, 65, 'капусская', { font: '17px Courier New Bold', fill: '#000000' })
			this.fText3 = this.add.text(33, 85, 'Палочник', { font: '17px Courier New Bold', fill: '#000000' });
			this.fText4 = this.add.text(35, 105, 'Листья', { font: '17px Courier New Bold', fill: '#000000' });
			this.fText5 = this.add.text(35, 125, 'баквилы', { font: '17px Courier New Bold', fill: '#000000' });
			this.fText6 = this.add.text(38, 145, 'Боткур', { font: '17px Courier New Bold', fill: '#000000' });
			
		
		}
		
	}
	
	newBottle() {
		
		if(this.fCountis == 4) {
		
			var add = this.physics.add.image(400,350, "textures", "final");
			this.fAdd = add;
			
			this.tweens.add({
        		targets: this.fAdd,
        		scaleX: 0.2,
        		scaleY: 0.2,
        		x:270,
        		y:152,
        		duration: 3000,
        		ease: 'Power3',
        		repeat: 0,
        		delay: 10
    		});
    		
    		var timedEvent = this.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, loop: true });
  
		}
	}
	
	onEvent() {
	
	var rect = this.add.image(610, 80, "textures", "finalButton");
	rect.setScale(0.8);
	
	this.fRect = rect;
	
	}


	update() {
	
		var pointer = this.input.activePointer;
    
    	if(pointer.worldX > 490 && pointer.worldX < 700 && pointer.worldY > 21 && pointer.worldY < 109) {
		
			this.fRect.setTint(0xb09877);
			if( pointer.isDown ) {
				this.scene.start('Scene1');
			}
		} else {
		
		}
	
	
	
	} 
	
	
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
