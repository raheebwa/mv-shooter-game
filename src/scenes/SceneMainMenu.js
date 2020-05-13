/* eslint-disable no-undef */
import ScrollingBackground from '../entities/ScrollingBackground';
import MenuButton from '../game_objects/menuButton';
import { randomNumber } from '../utilities/generalUtils';

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
    // html
    this.load.html('nameform', 'assets/nameform.html');
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

    this.helpText = this.add.text(
      this.game.config.width * 0.5,
      this.game.config.height * 0.3,
      'Choose your Alter Ego to Play:', {
        color: 'yellow',
        fontSize: '20px ',
      },
    );

    this.helpText.setOrigin('0.5');

    const egos = [
      `Superman-${randomNumber()}`,
      `Batgirl-${randomNumber()}`,
      `Supergirl-${randomNumber()}`,
      `Batman-${randomNumber()}`,
    ];
    const playBtnSize = 25;

    this.playButton = new MenuButton(
      this,
      this.game.config.width * 0.25,
      this.game.config.height * 0.4,
      `${egos[0].toUpperCase()}`, {
        fontFamily: 'monospace',
        fontSize: playBtnSize,
        fontStyle: 'bold',
        color: 'white',
        align: 'center',
      },
      () => {
        this.scene.start('SceneMain', { user: egos[0] });
      },
    );

    this.playButton.setOrigin(0.5);
    this.add.existing(this.playButton);

    this.playButton2 = new MenuButton(
      this,
      this.game.config.width * 0.75,
      this.game.config.height * 0.4,
      `${egos[1].toUpperCase()}`, {
        fontFamily: 'monospace',
        fontSize: playBtnSize,
        fontStyle: 'bold',
        color: 'white',
        align: 'center',
      },
      () => {
        this.scene.start('SceneMain', { user: egos[1] });
      },
    );

    this.playButton2.setOrigin(0.5);
    this.add.existing(this.playButton2);

    this.playButton3 = new MenuButton(
      this,
      this.game.config.width * 0.25,
      this.game.config.height * 0.5,
      `${egos[2].toUpperCase()}`, {
        fontFamily: 'monospace',
        fontSize: playBtnSize,
        fontStyle: 'bold',
        color: 'white',
        align: 'center',
      },
      () => {
        this.scene.start('SceneMain', { user: egos[2] });
      },
    );

    this.playButton3.setOrigin(0.5);
    this.add.existing(this.playButton3);

    this.playButton4 = new MenuButton(
      this,
      this.game.config.width * 0.75,
      this.game.config.height * 0.5,
      `${egos[3].toUpperCase()}`, {
        fontFamily: 'monospace',
        fontSize: playBtnSize,
        fontStyle: 'bold',
        color: 'white',
        align: 'center',
      },
      () => {
        this.scene.start('SceneMain', { user: egos[3] });
      },
    );

    this.playButton4.setOrigin(0.5);
    this.add.existing(this.playButton4);

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

    this.add.existing(this.lBButton);
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