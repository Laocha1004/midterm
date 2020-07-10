var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        function GameOverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        GameOverScene.prototype.Start = function () {
            this.backShape = new createjs.Shape(new createjs.Graphics().beginFill("#FFFFFF").drawRect(-450, -100, 900, 200));
            this.backShape.x = 480;
            this.backShape.y = 250;
            this.backShape.regX = this.backShape.width * 0.5;
            this.backShape.regY = this.backShape.height * 0.5;
            this.backShape.alpha = 0.7;
            this.resultLabel = new objects.Label("You pressed the button in " + objects.Game.currentScore.toFixed(2).toString() + " seconds.", "40px", "Consolas", "#000000", 480, 190, true);
            if (objects.Game.currentScore < 1) {
                this.extraLabel = new objects.Label("Congratulations!\nThis means you've saved the princess and restored peace to the land of Clickenberg.\nThe sequel is coming in 2024.", "25px", "Consolas", "#000000", 480, 250, false);
                this.background = new objects.Background(this.assetManager, "winBackground");
            }
            else {
                this.extraLabel = new objects.Label("Too slow!\nThis means the princess is dead and the land of Clickenberg lies in ruins.\nTry to get under a second.", "25px", "Consolas", "#000000", 480, 250, false);
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
        };
        GameOverScene.prototype.Update = function () { };
        GameOverScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.backShape);
            this.addChild(this.resultLabel);
            this.addChild(this.extraLabel);
            this.addChild(this.replayButton);
            this.addChild(this.mainMenuButton);
            this.replayButton.on("click", this.toReplay);
            this.mainMenuButton.on("click", this.toMainMenu);
        };
        GameOverScene.prototype.toReplay = function () {
            objects.Game.currentScene = config.Scene.GAME;
        };
        GameOverScene.prototype.toMainMenu = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map