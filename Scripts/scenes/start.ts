module scenes {
    export class StartScene extends objects.Scene {
        private background: objects.Background;
        private welcomeLabel: objects.Label;
        private startButton: objects.Button;

        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.Start();
        }

        public Start():void {
            this.background = new objects.Background(this.assetManager);

            this.welcomeLabel = new objects.Label("Lalala", "60px", "Consolas", "#FFFFFF", 320, 240, true);

            this.startButton = new objects.Button(this.assetManager, "nextButton", 320, 300);
            this.Main();
        }
        
        public Update():void {
            // need anything here?
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        }

        private startButtonClick():void {
            objects.Game.currentScene = config.Scene.GAME;
        }
    }
}