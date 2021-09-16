module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },

        watch: {
            files: ['css/*.scss'],
            tasks: ['css']
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './' //directorio base para neustro servidor
                    }
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: 'images/*.{png,gif,jpg,jpeg,webp}',
                    dest: 'dist/'
                }]
            }
        },

        copy: {
            html: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: 'dist'
                }]
            },
            fonts:{
                files:[{
                    expand:true,
                    dot: true,
                    cwd: 'node_modules/bootstrap-icons/font',
                    src:['fonts/*.*'],
                    dest:'dist'
                }]
            }
        },

        clean: {
            build: {
                src: ['dist']
            }
        },

        cssmin: {
            dist: {}
        },

        uglify: {
            dist: {}
        },

        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 20
            },

            release: {
                files: [{
                    src: [
                        'dist/js/*.js',
                        'dist/css/*.css',
                    ]
                }]
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {}
        },

        useminPrepare: {
            foo: {
                dest: 'dist',
                src: ['index.html', 'contact.html', 'projects.html', 'videos.html', 'playground.html']
            },
            options: {
                flow: {
                    steps: {
                        css: ['cssmin'],
                        js: ['uglify']
                    },
                    post: {
                        css: [{
                            name: 'cssmin',
                            createConfig: function (context, block) {
                                var generated = context.options.generated;
                                generated.options = {
                                    keepSpecialComments: 0,
                                    rebase: false
                                }
                            }
                        }]
                    }
                }
            }
        },

        usemin:{
            html: ['dist/index.html', 'dist/contact.html', 'dist/projects.html', 'dist/videos.html', 'dist/playground.html'],
            options:{
                assetDir:['dist', 'dist/css', 'dist/js']
            }
        }
 
    });

    grunt.registerTask('img:compress', ['imagemin']);
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch'])
    grunt.registerTask('build', [
        'clean',
        'copy',
        'imagemin',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'filerev',
        'usemin'
    ])
};