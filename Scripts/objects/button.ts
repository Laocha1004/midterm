module objects {
    export class Button extends createjs.Container {
        // Extending Button from createjs.Container so I can include a bitmap and text

        public width: number;
        public height: number;
        public halfW: number;
        public halfH: number;
        
        private _bitmap:createjs.Bitmap;
        private _text:createjs.Text;

        constructor(assetManager:createjs.LoadQueue, imageString:string, x:number = 0, y:number = 0) {
            super();
            this._bitmap = new createjs.Bitmap(assetManager.getResult(imageString));

            this.x = x;
            this.y = y;

            this.on("mouseover", this.mouseOver);
            this.on("mouseout", this.mouseOut);

            this.Init();
        }
        private mouseOver():void {
            this.alpha = 0.7;
        }
        private mouseOut():void {
            this.alpha = 1.0;
        }

        private Init():void {
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;

            this.regX = this.halfW;
            this.regY = this.halfH;

            this._bitmap.regX = this._bitmap.getBounds().width * 0.5;
            this._bitmap.regY = this._bitmap.getBounds().height * 0.5;
            this.addChild(this._bitmap);
        }

        public setText(text:string, scale:number, xOffset:number, yOffset:number):void {
            this._text = new createjs.Text(text, "40px", "Consolas", "#000000");
            this._text.x = this._bitmap.x + xOffset;
            this._text.y = this._bitmap.y + yOffset;
            this._text.regX = this._text.getMeasuredWidth() * 0.5;
            this._text.regY = this._text.getMeasuredHeight() * 0.5;
            this._text.scale *= scale;
            this.addChild(this._text);
        }
    }
}