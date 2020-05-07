/* eslint-disable no-undef */
import ScrollingBackground from '../entities/ScrollingBackground';
import MenuButton from '../game_objects/menuButton';

export default class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneMainMenu' });
  }

  preload() {
    // images
    this.load.image('sprBg0', 'assets/sprBg0.png');
    this.load.image('sprBg1', 'assets/sprBg1.png');

    this.load.image('sprBtnPlay', 'assets/sprBtnPlay.png');
    this.load.image('sprBtnPlayHover', 'assets/sprBtnPlayHover.png');
    this.load.image('sprBtnPlayDown', 'assets/sprBtnPlayDown.png');
    this.load.image('sprBtnRestart', 'assets/sprBtnRestart.png');
    this.load.image('sprBtnRestartHover', 'assets/sprBtnRestartHover.png');
    this.load.image('sprBtnRestartDown', 'assets/sprBtnRestartDown.png');
    // audio
    this.load.audio('sndBtnOver', 'assets/sndBtnOver.wav');
    this.load.audio('sndBtnDown', 'assets/sndBtnDown.wav');
  }

  create() {
    this.title = this.add.text(
      this.game.config.width * 0.5,
      this.game.config.height * 0.2,
      "RAMAR'S SHOOTER GAME", {
        fontFamily: 'monospace',
        fontSize: 35,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      },
    );

    this.playButton = new MenuButton(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'PLAY', {
        fontFamily: 'monospace',
        fontSize: 45,
        fontStyle: 'bold',
        color: 'red',
        align: 'center',
      },
      () => {
        this.scene.start('SceneMain');
      },
    );

    this.lBButton = new MenuButton(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.7,
      'LEADERBOARD', {
        fontFamily: 'monospace',
        fontSize: 35,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      },
      () => {
        this.scene.start('SceneLeaderBoard');
      },
    );

    this.add.existing(this.playButton);
    this.add.existing(this.lBButton);
    this.playButton.setOrigin(0.5);
    this.lBButton.setOrigin(0.5);
    this.title.setOrigin(0.5);

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}