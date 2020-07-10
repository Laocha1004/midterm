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
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        StartScene.prototype.Start = function () {
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
        };
        StartScene.prototype.Update = function () {
            // Move the logo down slowly
            if (this.logo.y < 250) {
                this.logo.y += 1;
            }
            else if (this.tagLine.alpha < 1.0) { // Then fade in the tagLine
                this.tagLine.alpha += 0.05;
            }
        };
        StartScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.logo);
            this.addChild(this.tagLine);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
            console.log("Now running start screen");
        };
        StartScene.prototype.startButtonClick = function () {
            objects.Game.currentScene = config.Scene.GAME;
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map