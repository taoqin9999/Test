define(function(require, exports, module) {
    'use strict';

    var application = require('./application');

    var controllers = [];

    exports = module.exports = {
        init: function() {
            var self = this;

            window.onpopstate = function() {
                var state = history.state || {};
                var url = location.hash.indexOf('#') === 0 ? location.hash : '#home';

                var pageIndex = _.findIndex(controllers, function(controller) {
                    return controller._viewUrl === url;
                });

                if (pageIndex > -1) {
                    self.go(pageIndex + 1);
                } else {
                    var View = application.getView(url);

                    if (View) {
                        self._setState(url, state);
                    } else {
                        self.home();
                    }
                }
            };
        }
    };
});
