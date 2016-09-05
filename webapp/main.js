(function(win) {
    'use strict';

    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    };

    var config = {
        baseUrl: '.',
        paths: {
            text: 'libs/text'
        }
    };

    require.config(config);

    win.container = $('#container');

    // require(['core/WindowManager'], function(WindowManager) {
    //     win.gWindowManager = WindowManager;
    // });


})(window);
