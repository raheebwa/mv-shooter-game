/* eslint-disable no-undef */
import 'phaser';

import GameConfig from './config';
import SceneGameOver from './scenes/SceneGameOver';
import SceneMain from './scenes/SceneMain';
import SceneMainMenu from './scenes/SceneMainMenu';

const config = GameConfig([SceneMainMenu, SceneMain, SceneGameOver]);

const newGame = new Phaser.Game(config);