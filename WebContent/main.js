
window.addEventListener('load', function() {

	var game = new Phaser.Game({
    "title": "Зельделье",
    "width": 800,
    "height": 640,
    "type": Phaser.AUTO,
    "backgroundColor": "#FFFFF",
    "parent": "game-container",
    "physics" : {
    	default: "arcade"
    	},
    "scale": {
        "mode": Phaser.Scale.FIT,
        "autoCenter": Phaser.Scale.CENTER_BOTH
    },
	});
	game.scene.add("Boot", Boot, true);
	
});

class Boot extends Phaser.Scene {

	preload() {
		this.load.pack("pack", "assets/pack.json");
	}

	create() {
		this.scene.start("Scene1");
	}

}
