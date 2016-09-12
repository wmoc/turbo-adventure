"use strict";
import "./JSFix"
import DeskScene from "./DeskScene";
import {Camera} from "./Camera";
import {game} from "./Game";



//tests
// import projection_test from "./test/projection";
// projection_test();



var camera = new Camera(document.getElementById('game'));
camera.body.x = 27;
camera.body.y = 19.5;
camera.body.angle = 0.1;
var scene = new DeskScene();
game.setCamera(camera);
game.setScene(scene);
game.init();
game.run();


