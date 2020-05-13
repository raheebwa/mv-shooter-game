/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import 'phaser';

import GameConfig from './config';
import SceneGameOver from './scenes/SceneGameOver';
import SceneMain from './scenes/SceneMain';
import SceneMainMenu from './scenes/SceneMainMenu';
import SceneLeaderBoard from './scenes/sceneLeaderBoard';

const config = GameConfig([
  SceneMainMenu,
  SceneMain,
  SceneGameOver,
  SceneLeaderBoard,
]);

const newGame = new Phaser.Game(config);