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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            this.timePassed = 0.00;
            // Create random position
            // X bounds: 40 to 920
            // Y bounds: 125 to 680
            var randX = ((Math.random() * 880) + 1) + 40;
            var randY = ((Math.random() * 555) + 1) + 125;
            this.timerLabel = new objects.Label(this.timePassed.toString(), "70px", "Consolas", "#000000", 50, 50, true);
            this.instructLabel = new objects.Label("Quick, press the button!", "20px", "Consolas", "#000000", 30, 75, false);
            this.theButton = new objects.Button(this.assetManager, "buttonUp", randX, randY);
            this.theButton.scale *= 0.2;
            this.background = new objects.Background(this.assetManager, "playBackground");
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            // Update the timer
            this.timePassed += 1 / 60;
            this.timerLabel.text = this.timePassed.toFixed(2).toString();
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background);
            this.addChild(this.timerLabel);
            this.addChild(this.instructLabel);
            this.addChild(this.theButton);
            this.theButton.on("click", function () {
                // Need to use arrow function or else can't access timePassed properly
                objects.Game.currentScore = _this.timePassed;
                objects.Game.currentScene = config.Scene.OVER;
            });
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map