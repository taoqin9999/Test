module.exports = function(grunt) {
    'use strict';

    var _ = require('underscore');

    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
    });

    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: grunt.file.readJSON('config.json'),
        watch: {
            'options': {
                'debounceDelay': 100,
            },
            'hogan': {
                'files': ['webapp/src/page/*.html'],
                'tasks': ['hogan']
            }
        },
        clean: {
            'options': {
                'force': true
            },
            'dist': ['<%= config.build %>/dist']
        },

        hogan: {
            'all': {
                src: 'webapp/src/page/*.html',
                dest: 'webapp/src/page/compiled.js',
                options: {
                    binderName: 'hulk',
                    nameFunc: function(fileName) {
                        return _.last(/(\w*)\/(\w*)\.html/.exec(fileName), 2).join('.');
                    }
                }
            }
        }
    });

    grunt.registerTask('default', ['hogan']);
};
