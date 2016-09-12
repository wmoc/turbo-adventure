"use strict";
import "../JSFix"
import {Camera} from "../Camera";
import {Body} from "../Body";

/**
 * Todo: I think, that we can make better unit test tool
 */

export default function projection_test() {
    var camera = new Camera(document.getElementById('game'));
    var body = new Body();


    // setting camera
    var rW = 12;
    var rH = 8;
    var VH = 24;
    camera.HtoW = rH / rW;
    camera.WtoH = rW / rH;
    camera.VtoR = VH / rH;
    camera.RtoV = rH / VH;
    camera.vH = VH;
    camera.vW = camera.vH * camera.WtoH;

    camera.body.width = camera.vW;
    camera.body.height = camera.vH;


    camera.body.x = 27;
    camera.body.y = 19.5;


    //setting body
    body.height = 6;
    body.width = 6;
    body.x = 39;
    body.y = 13.5;


    //tests
    console.assert(body.rWidth(camera) == 2, "body.rWidth(camera) == 2: " + body.rWidth(camera));
    console.assert(body.rHeight(camera) == 2, "body.rHeight(camera) == 2: " + body.rHeight(camera));
    console.assert(body.rX(camera) == 10, "body.rX(camera) == 10: " + body.rX(camera));
    console.assert(body.rY(camera) == 2, "body.rY(camera) == 2: " + body.rY(camera));
}