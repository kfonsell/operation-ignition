/**
 * Created by laban on 2017-05-10.
 */
var boot = {
    preload: function()
    {
        console.log("BOOT");

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        //add the images for the loading screen
//        game.load.image('preloadBar', 'assets/title_screen/RUFighter_logo.png');
//        game.load.image('logo','/assets/title_screen/vblack.png');
    },

    create: function()
    {
        this.state.start('load');
    }
}