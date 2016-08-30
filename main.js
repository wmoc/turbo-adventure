import "./JSFix"
import Game from './Game';
import DeskScene from "./DeskScene";
import {Camera} from "./Camera";

var game = new Game();
var camera = new Camera(document.getElementById('game'));
var scene = new DeskScene();
game.setCamera(camera);
game.setScene(scene);
game.init();
game.run();
