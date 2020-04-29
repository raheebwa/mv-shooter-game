const gameConfig = (scenes) => {
    const config = {
        type: Phaser.AUTO,
        width: 480,
        height: 640,
        backgroundColor: "black",
        physics: {
            default: "arcade",
            arcade: {
                gravity: { x: 0, y: 0 }
            }
        },
        scene: scenes,
        pixelArt: true,
        roundPixels: true
    }
}


export default gameConfig;