module scenes {
    export class GameOverScene extends objects.Scene {
        private gameOverLabel: objects.Label;
        private nextButton: objects.Button;

        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        public Start():void {
            this.gameOverLabel = new objects.Label("You pressed the button", "40px", "Consolas", "#000000", 320, 240, true);

            this.nextButton = new objects.Button(this.assetManager, "nextButton", 320, 340);
            this.Main();
        }

        public Update():void {}

        public Main():void {
            this.addChild(this.gameOverLabel):
            this.addChild(this.nextButton);

            this.nextButton.on("click", this.nextButtonClicked);
        }

        private nextButtonClicked():void {
            objects.Game.currentScene = config.Scene.START;
        }
    }
}