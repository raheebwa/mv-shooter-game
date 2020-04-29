/* eslint-disable no-undef */
import 'phaser';

import gameConfig from "./config";
import SceneGameOver from "./scenes/SceneGameOver";
import SceneMain from "./scenes/SceneMain";
import SceneMainMenu from "./scenes/SceneMainMenu";

const config = gameConfig([SceneMainMenu, SceneMain, SceneGameOver]);

const newGame = new Phaser.Game(config);