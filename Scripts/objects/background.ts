module objects {
    export class Background extends createjs.Bitmap {
        constructor(assetManager:createjs.LoadQueue, imageString:string) {
            super(assetManager.getResult(imageString));
            console.log("Creating the background");

            this.Start();
        }
        public Start():void {
            this.Reset();
        }
        public Update():void {
            this.Move();
        }
        public Reset():void {
        }
        public Move():void {
        }
    }
}