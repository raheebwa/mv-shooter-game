/* eslint-disable no-undef */
import 'phaser';

import SimpleScene from './scenes/simple-scene';

const gameConfig = {
  width: 680,
  height: 400,
  scene: SimpleScene,
};

const newGame = new Phaser.Game(gameConfig);

newGame();