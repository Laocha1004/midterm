module scenes {
    export class StartScene extends objects.Scene {
        private background: objects.Background;
        private logo: objects.GameObject;
        private tagLine: objects.Label;
        private startButton: objects.Button;

        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        public Start():void {
            console.log("Initializing start screen");

            this.background = new objects.Background(this.assetManager, "startBackground");

            this.logo = new objects.GameObject(this.assetManager, "logo");
            this.logo.x = 480;
            this.logo.y = 100;
            this.logo.scale *= 0.5;

            this.tagLine = new objects.Label("How fast can you press the button?", "35px", "Consolas", "#000000", 480, 400, true);
            this.tagLine.alpha = 0;

            this.startButton = new objects.Button(this.assetManager, "buttonUp", 480, 580);
            this.startButton.scale *= 0.8;
            this.startButton.setText("Start Game");

            this.Main();
        }
        
        public Update():void {
            
            // Move the logo down slowly
            if (this.logo.y < 250) {
                this.logo.y += 1;
            } else if (this.tagLine.alpha < 1.0) { // Then fade in the tagLine
                this.tagLine.alpha += 0.05;
            }
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.logo);
            this.addChild(this.tagLine);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
            console.log("Now running start screen");
        }

        private startButtonClick():void {
            objects.Game.currentScene = config.Scene.GAME;
        }
    }
}