/* eslint-disable no-undef */
import ScrollingBackground from '../entities/ScrollingBackground';
import MenuButton from '../game_objects/menu-button';

export default class SceneLeaderBoard extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneLeaderBoard' });
  }

  create() {
    this.title = this.add.text(
      this.game.config.width * 0.5,
      this.game.config.height * 0.1,
      'Leader Board', {
        fontFamily: 'monospace',
        fontSize: 40,
        fontStyle: 'bold',
        color: 'white',
        align: 'center',
      },
    );
    this.title.setOrigin(0.5);

    this.lBButton = new MenuButton(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.8,
      'MAIN MENU', {
        fontFamily: 'monospace',
        fontSize: 35,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      },
      () => {
        this.scene.start('SceneMainMenu');
      },
    );

    this.add.existing(this.lBButton);
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