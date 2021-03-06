

(function() {


    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    
    let assetManager:createjs.LoadQueue;
    let assetManifest: any[];

    let currentScene:objects.Scene;
    let currentState:number;

    assetManifest = [
        {id:"logo", src:"./Assets/logo.png"},
        {id:"startBackground", src:"./Assets/landscape4.jpg"},
        {id:"buttonUp", src:"./Assets/button.png"},
        {id:"playBackground", src:"./Assets/landscape3.jpg"},
        {id:"greyButton", src:"./Assets/greyButton.png"},
        {id:"loseBackground", src:"./Assets/landscape5.jpg"},
        {id:"winBackground", src:"./Assets/landscape6.jpg"}
    ];

    function Init() {
        console.log("Initializing Start");

        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }

    function Start() {
        console.log("Starting Application...");

        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);

        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);

        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        Main();
    }

    function Update() {
        if(currentState != objects.Game.currentScene) {
            console.log("Changing scenes to " + objects.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }

    function Main() {
        console.log("Game Start");

        switch(objects.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
                break;
        }

        currentState = objects.Game.currentScene;
    }

    window.onload = Init;
})();