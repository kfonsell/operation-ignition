/**
 * Created by laban on 2017-05-12.
 */
var url = 'http://35.164.0.62';

var menu = {
    preload: function () {
        console.log("MENUUUU");
        console.log("calling the server");
        var request = new XMLHttpRequest();
        var port = ':3000';
        request.open('GET',url+port,true);
        request.onload = function ()
        {
            if (request.status >= 200 && request.status < 400)

            {
                var object = JSON.parse(request.response);
                console.log(object);
                storeJSON(object);
            }
            else
            {
                log(['callingServer', 'onload'],'game server denied request');
                alert("game server could not be reached");
            }
        };
        request.onerror = function ()
        {
            alert("error");
        };
        request.send();

        function storeJSON(JSON object)
        {
            console.log("inside the store Json")
        }
    },
    create: function () {
    },
    update: function (){
    }
};

