/* eslint-disable no-undef */
import ScrollingBackground from '../entities/ScrollingBackground';
import MenuButton from '../game_objects/menu-button';

export default class SceneGameOver extends Phaser.Scene {
  constructor(score = 0) {
    super({ key: 'SceneGameOver' });
    this.score = score;
  }

  init(data) {
    // !!! print {}
    this.score = data.score;
  }

  create() {
    this.title = this.add.text(
      this.game.config.width * 0.5,
      this.game.config.height * 0.1,
      'GAME OVER', {
        fontFamily: 'monospace',
        fontSize: 48,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      },
    );
    this.title.setOrigin(0.5);

    this.subTitle = this.add.text(
      this.game.config.width * 0.5,
      this.game.config.height * 0.2,
      `Final Score: ${this.score}`, {
        fontFamily: 'monospace',
        fontSize: 28,
        fontStyle: 'bold',
        color: 'purple',
        align: 'center',
      },
    );
    this.subTitle.setOrigin(0.5);

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

    this.playButton = new MenuButton(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'RESTART', {
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
    this.add.existing(this.lBButton);
    this.add.existing(this.playButton);
    this.playButton.setOrigin(0.5);
    this.lBButton.setOrigin(0.5);

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