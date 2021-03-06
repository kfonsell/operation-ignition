/**
 * Created by laban on 2017-05-10.
 */
var preload = {
    preload: function()
    {
        log('preload','entered state')
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //this.scale.setScreenSize();
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        //load the images or call the json file for the images
        $.ajax({url: '/api/states/preload', success: function (res){
                //console.log(res);
            }
        })
    },
    create: function () {
        //particles.lights = this.add.group();
        //this.state.start('logo');
        if (!player.created)
            this.state.start('characterCreate');
        else
            this.state.start('map');
    },
    update: function () {
        //console.log('in update function of LOAD file');
    }

};