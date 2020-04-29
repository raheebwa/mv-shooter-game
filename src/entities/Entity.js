export default class Entity extends Phaser.GameObjects.Sprite {
    constructor() {
        super(scene, x, y, key);

        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
        this.setData('type', type);
        this.setData('isDead', false);
    }
}