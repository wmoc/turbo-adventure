"use strict";
import "./JSFix"
import DeskScene from "./DeskScene";
import {Camera} from "./Camera";
import {game} from "./Game";
import {Fork} from "./Fork";
import {Body} from "./Body";
import {Player} from "./Player";



//tests
// import projection_test from "./test/projection";
// projection_test();



var camera = new Camera(document.getElementById('game'));
var scene = new DeskScene();
var player = new Player(new Body(0,0,0,3,15,0));


scene.addChild(player);
camera.follow(player.body);
game.setCamera(camera);
game.setScene(scene);
game.init();
game.run();


