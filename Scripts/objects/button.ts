module objects {
    export class Button extends createjs.Bitmap {
        public width: number;
        public height: number;
        public halfW: number;
        public halfH: number;
        
        constructor(assetManager:createjs.LoadQueue, imageString:string, x:number = 0, y:number = 0) {
            super(assetManager.getResult(imageString));

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
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;

            this.regX = this.halfW;
            this.regY = this.halfH;
        }

        public setText(text:string):void {
            let label:objects.Label;
            label = new objects.Label(text, "12px", "Consolas", "#000000", this.halfW, this.halfH, true);
            //this.addChild(label);
        }
    }
}