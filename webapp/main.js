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

    require(['core/RouteManager'], function(RouteManager) {
        win.gRouteManager = RouteManager;
    });


})(window);
