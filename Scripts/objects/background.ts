module objects {
    export class Background extends createjs.Bitmap {
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager.getResult("background"));
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
            // reset any positions, etc
        }
        public Move():void {
            // doesn't need to move??
        }
    }
}