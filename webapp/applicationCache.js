(function() {
    'use strict';

    applicationCache.onchecking = function() {
        console.log("Checking for updates.");
    };

    applicationCache.ondownloading = function() {
        console.log("Started Download.");
    };

    applicationCache.onnoupdate = function() {
        console.log("onnoupdate");
    };

    applicationCache.onprogress = function(event) {
        console.log('onprogress:' + JSON.stringify(event));
    };

    applicationCache.oncached = function() {
        console.log("Done.");
    };

    applicationCache.onobsolete = function() {
        console.log("onobsolete");
    };

    applicationCache.onerror = function(event) {
        console.log("onerror:" + JSON.stringify(event));
    };

})(window);
