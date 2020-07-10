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
var objects;
(function (objects) {
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button(assetManager, imageString, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this) || this;
            _this._bitmap = new createjs.Bitmap(assetManager.getResult(imageString));
            _this.x = x;
            _this.y = y;
            _this.on("mouseover", _this.mouseOver);
            _this.on("mouseout", _this.mouseOut);
            _this.Init();
            return _this;
        }
        Button.prototype.mouseOver = function () {
            this.alpha = 0.7;
        };
        Button.prototype.mouseOut = function () {
            this.alpha = 1.0;
        };
        Button.prototype.Init = function () {
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;
            this.regX = this.halfW;
            this.regY = this.halfH;
            this._bitmap.regX = this._bitmap.getBounds().width * 0.5;
            this._bitmap.regY = this._bitmap.getBounds().height * 0.5;
            this.addChild(this._bitmap);
        };
        Button.prototype.setText = function (text, scale, xOffset, yOffset) {
            this._text = new createjs.Text(text, "40px", "Consolas", "#000000");
            this._text.x = this._bitmap.x + xOffset;
            this._text.y = this._bitmap.y + yOffset;
            this._text.regX = this._text.getMeasuredWidth() * 0.5;
            this._text.regY = this._text.getMeasuredHeight() * 0.5;
            this._text.scale *= scale;
            this.addChild(this._text);
        };
        return Button;
    }(createjs.Container));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map