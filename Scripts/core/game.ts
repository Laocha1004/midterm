

(function() {


    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    
    let assetManager:createjs.LoadQueue;
    let assetManifest: any[];

    let currentScene:objects.Scene;
    let currentState:number;

    function Init() {
        console.log("Initializing Start");

        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }

    function Start() {

        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);


        Main();
    }

    function Update() {

    }

    function Main() {

    }

    window.onload = Init;
})();