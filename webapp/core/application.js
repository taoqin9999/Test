define(function(require, exports, module) {
    'use strict';

    /**
     *
     * [routes description]
     * @type {Object}
     */
    var routes = {
        'test': {
            'controller': require('src/js/test')
        },
        'test1': {
            'controller': require('src/js/test1')
        }
    };

    exports = module.exports = {
        getView: function(url) {
            return routes[url];
        }
    };
});
