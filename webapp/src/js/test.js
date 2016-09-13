define(function(require, exports, module) {
    'use strict';

    var BClass = require('core/base');

    var log = new netEase.Log('test.js');

    var Clas = BClass.extend({
        initialize: function(options) {
            log.log('test..........initialize..options:' + options);
        },
        loadData: function() {
            return $.Deferred().resolve();
        },
        viewHtml: function() {
            return templates['page.test'].render({});
        },

        viewDidHide: function() {
            log.log('test..........viewDidHide...');
        },
        viewDidShow: function() {
            log.log('test..........viewDidShow...');
        },
        viewDidInit: function() {

        },
        viewDidDestroy: function() {
            log.log('test..........viewDidDestroy...');
        }
    });

    exports = module.exports = Clas;
});
