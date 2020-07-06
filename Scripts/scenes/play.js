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
            this.playLabel = new objects.Label("Click the button", "40px", "Consolas", "#000000", 320, 240, true);
            this.theButton = new objects.Button(this.assetManager, "theButton", 500, 340);
            this.background = new objects.Background(this.assetManager);
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            // nothing to update?
        };
        PlayScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.playLabel);
            this.addChild(this.theButton);
            this.theButton.on("click", this.theButtonClicked);
        };
        PlayScene.prototype.theButtonClicked = function () {
            objects.Game.currentScene = config.Scene.OVER;
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map