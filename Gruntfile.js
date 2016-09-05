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
        connect: {
            'options': {
                'port': 9000,
                'livereload': 35729, //声明给 watch 监听的端口
                'hostname': 'localhost'
            },
            'server': {
                'options': {
                    open: true,
                    base: ['webapp/']
                }
            }
        },
        watch: {
            'options': {
                'debounceDelay': 100,
            },
            'server': {
                'options': {
                    'livereload': '<%=connect.options.livereload%>'
                },
                //下面文件的改变就会实时刷新网页
                'files': ['webapp/*']
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

    grunt.registerTask('server', [
        'connect:server',
        'watch'
    ]);
};
