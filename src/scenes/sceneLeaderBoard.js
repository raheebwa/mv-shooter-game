/* eslint-disable no-undef */
import ScrollingBackground from '../entities/ScrollingBackground';
import MenuButton from '../game_objects/menuButton';
import ApiConsumer from '../api-client/apiConsumer';

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

    (async () => {
      let allScores = await ApiConsumer.getScores();
      allScores = JSON.parse(JSON.stringify(allScores));

      if (allScores.length > 9) {
        allScores = allScores.slice(Math.max(allScores.length - 9, 1));
      }
      let count = 0;
      allScores.sort(this.dynamicsort('score', 'desc')).forEach((el) => {
        this.playerName = this.add.text(
          this.game.config.width * 0.2,
          this.game.config.height * (0.25 + count),
          el.user, {
            fontFamily: 'monospace',
            fontSize: 18,
            fontStyle: 'bold',
            color: 'orange',
            align: 'center',
          },
        );

        this.playerScore = this.add.text(
          this.game.config.width * 0.7,
          this.game.config.height * (0.25 + count),
          `${el.score}`, {
            fontFamily: 'monospace',
            fontSize: 18,
            fontStyle: 'bold',
            color: 'orange',
            align: 'center',
          },
        );

        count += 0.05;
      });
    })();
    this.scoreTitle = this.add.text(
      this.game.config.width * 0.2,
      this.game.config.height * 0.2,
      'Name', {
        fontFamily: 'monospace',
        fontSize: 18,
        fontStyle: 'bold',
        color: 'pink',
        align: 'center',
      },
    );

    this.scoreCount = this.add.text(
      this.game.config.width * 0.7,
      this.game.config.height * 0.2,
      'Score', {
        fontFamily: 'monospace',
        fontSize: 18,
        fontStyle: 'bold',
        color: 'pink',
        align: 'center',
      },
    );

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

  dynamicsort(property, order) {
    // use either asc or desc
    let sortOrder = 1;
    if (order === 'desc') {
      sortOrder = -1;
    }
    return (a, b) => {
      // a should come before b in the sorted order
      if (a[property] < b[property]) {
        return -1 * sortOrder;
        // a should come after b in the sorted order
      }
      if (a[property] > b[property]) {
        return 1 * sortOrder;
        // a and b are the same
      }
      return 0 * sortOrder;
    };
  }
}