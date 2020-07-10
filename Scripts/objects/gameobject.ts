module objects {
    // I just need this to be a basic all-purpose object so I've kept it from being abstract.
    export class GameObject extends createjs.Bitmap {
        protected speedX: number;
        protected speedY: number;

        public width: number;
        public height: number;
        public halfW: number;
        public halfH: number;

        constructor(assetManager:createjs.LoadQueue, imageString:string) {
            super(assetManager.getResult(imageString));

            this.name = imageString;

            this.Init();
        }

        private Init():void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;

            this.regX = this.halfW;
            this.regY = this.halfH;
        }

        public Start():void {}
        public Update():void {}
        public Reset():void {}
        public Move():void {}
        public CheckBound():void {}
    }
}