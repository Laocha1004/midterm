module scenes {
    export class GameOverScene extends objects.Scene {
        private resultLabel: objects.Label;
        private extraLabel: objects.Label;
        private backShape: createjs.Shape;
        private replayButton: objects.Button;
        private mainMenuButton: objects.Button;
        private background: objects.Background;

        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        public Start():void {

            this.backShape = new createjs.Shape(
                new createjs.Graphics().beginFill("#FFFFFF").drawRect(-450, -100, 900, 200));
            this.backShape.x = 480;
            this.backShape.y = 250;
            this.backShape.regX = this.backShape.width * 0.5;
            this.backShape.regY = this.backShape.height * 0.5;
            this.backShape.alpha = 0.7;

            this.resultLabel = new objects.Label(
                "You pressed the button in " + objects.Game.currentScore.toFixed(2).toString() + " seconds.", 
                "40px", "Consolas", "#000000", 480, 190, true);

            if (objects.Game.currentScore < 1) {
                this.extraLabel = new objects.Label(
                    "Congratulations!\nThis means you've saved the princess and restored peace to the land of Clickenberg.\nThe sequel is coming in 2024.",
                    "25px", "Consolas", "#000000", 480, 250, false);
                this.background = new objects.Background(this.assetManager, "winBackground");
            } else {
                this.extraLabel = new objects.Label(
                    "Too slow!\nThis means the princess is dead and the land of Clickenberg lies in ruins.\nTry to get under a second.",
                    "25px", "Consolas", "#000000", 480, 250, false);
                this.background = new objects.Background(this.assetManager, "loseBackground");
            }
            this.extraLabel.textAlign = "center";

            this.replayButton = new objects.Button(this.assetManager, "greyButton", 480, 500);
            this.replayButton.scale *= 0.4;
            this.replayButton.setText("Replay", 8, 0, 0);
            this.mainMenuButton = new objects.Button(this.assetManager, "greyButton", 480, 600);
            this.mainMenuButton.scale *= 0.4;
            this.mainMenuButton.setText("Main Menu", 8, 0, 0);

            this.Main();
        }

        public Update():void {}

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.backShape);
            this.addChild(this.resultLabel);
            this.addChild(this.extraLabel);
            this.addChild(this.replayButton);
            this.addChild(this.mainMenuButton);

            this.replayButton.on("click", this.toReplay);
            this.mainMenuButton.on("click", this.toMainMenu);
        }

        private toReplay():void {
            objects.Game.currentScene = config.Scene.GAME;
        }
        private toMainMenu():void {
            objects.Game.currentScene = config.Scene.START;
        }
    }
}