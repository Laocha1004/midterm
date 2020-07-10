module scenes {
    export class PlayScene extends objects.Scene {
        private timerLabel: objects.Label;
        private instructLabel: objects.Label;
        private theButton: objects.Button;
        private background: objects.Background;

        private timePassed:number;

        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        public Start():void {
            this.timePassed = 0.00;

            // Create random position
            // X bounds: 40 to 920
            // Y bounds: 125 to 680
            let randX = ((Math.random() * 880) + 1) + 40;
            let randY = ((Math.random() * 555) + 1) + 125;

            this.timerLabel = new objects.Label(this.timePassed.toString(), "70px", "Consolas", "#000000", 50, 50, true);
            this.instructLabel = new objects.Label("Quick, press the button!", "20px", "Consolas", "#000000", 30, 75, false);
            this.theButton = new objects.Button(this.assetManager, "buttonUp", randX, randY);
            this.theButton.scale *= 0.2;

            this.background = new objects.Background(this.assetManager, "playBackground");

            this.Main();
        }

        public Update():void {
            // Update the timer
            this.timePassed += 1 / 60;
            this.timerLabel.text = this.timePassed.toFixed(2).toString();
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.timerLabel);
            this.addChild(this.instructLabel);
            this.addChild(this.theButton);

            this.theButton.on("click", () => {
                // Need to use arrow function or else can't access timePassed properly
                objects.Game.currentScore = this.timePassed;
                objects.Game.currentScene = config.Scene.OVER;
            });
        }
    }
}