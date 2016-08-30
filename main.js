import "./JSFix"
import Game from './Game';
import DeskScene from "./DeskScene";

var game = new Game();

game.setScene(new DeskScene());
game.init();
game.run();
