(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    var currentScene;
    var currentState;
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
//# sourceMappingURL=game.js.map