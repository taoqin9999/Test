define(function(require, exports, module) {
    'use strict';

    var application = require('./application');

    var log = new netEase.Log('RouteManager.js');

    var controllers = [];

    var $container = $('#container');

    exports = module.exports = {
        init: function() {

        },
        pushState: function(viewId, data) {
            var retDfd = $.Deferred();

            var View = application.getView(viewId);

            if (!View) {
                log.error('viewId不存在：' + viewId);
                return;
            }

            //隐藏上一个页面
            var currentController = controllers[controllers.length - 1];
            if (currentController) {
                currentController.hideView();
            }

            currentController = new View.controller(data);

            //获取模板初始化数据
            currentController.loadData().done(function(params) {
                _.extend(data, params);

                currentController._viewId = '#' + viewId;

                $container.append(currentController.viewHtml());

                currentController.initView();

                controllers.push(currentController);

                retDfd.resolve(currentController);
            }).fail(retDfd.reject);


            history.pushState(data, null, '#' + viewId);


            return retDfd;
        }
    };
});
