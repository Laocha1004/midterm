module scenes {
    export class PlayScene extends objects.Scene {
        private playLabel: objects.Label;
        private theButton: objects.Button;
        private background: objects.Background;

        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        public Start():void {
            this.playLabel = new objects.Label("Click the button", "40px", "Consolas", "#000000", 320, 240, true);
            this.theButton = new objects.Button(this.assetManager, "theButton", 500, 340);
            this.background = new objects.Background(this.assetManager);

            this.Main();
        }

        public Update():void {
            // nothing to update?
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.playLabel);
            this.addChild(this.theButton);

            this.theButton.on("click", this.theButtonClicked);
        }

        private theButtonClicked():void {
            objects.Game.currentScene = config.Scene.OVER;
        }
    }
}