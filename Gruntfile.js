module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bake: {
            your_target: {
                options: {
                    // Task-specific options go here.
                },

                files: {
                    "compiled/index.html": "src/html/index.html"
                }
            }
        },

        sass: {
            options: {
                precision: 6,
                sourcemap: 'auto',
                sourceComments: 'true',
                style: 'expanded',
                trace: true,
                bundleExec: true
            },
            main: {
                files: {
                    'compiled/css/bootstrap.css': 'src/scss/bootstrap.scss',
                    'compiled/css/bootstrap-extended.css': 'src/scss/bootstrap-extended.scss',
                    'compiled/css/app.css': 'src/scss/app.scss',
                    //'compiled/css/colors.css': 'src/scss/colors.scss',
                    //'compiled/css/custom-rtl.css': 'src/scss/custom-rtl.scss',
                    //'compiled/css/style.css': 'assets/scss/style.scss',
                    //'compiled/css/style-rtl.css': 'assets/scss/style-rtl.scss',
                }
            },
            core: {
                files: [{
                    expand: true,
                    cwd: 'src/scss/core/',
                    src: ['*/**/*.scss', '!*/**/_*.scss'],
                    dest: 'compiled/css/core/',
                    ext: '.css'
                }]
            },
            pages: {
                files: [{
                    expand: true,
                    cwd: 'src/scss/pages/',
                    src: ['*.scss', '!_*.scss'],
                    dest: 'compiled/css/pages/',
                    ext: '.css'
                }]
            },
            plugins: {
                files: [{
                    expand: true,
                    cwd: 'src/scss/plugins/',
                    src: ['*/**/*.scss', '!*/**/_*.scss'],
                    dest: 'compiled/css/plugins/',
                    ext: '.css'
                }]
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },

            bake: {
                files: [
                    'src/html/**/*.html'
                ],
                tasks: ['bake']
            },

            sass: {
                files: [
                    'src/scss/**/*.scss',
                    'assets/scss/**/*.scss'
                ],
                tasks: ['sass']
            }
        },

        browserSync: {
            bsFiles: {
                src : [
                    'compiled/css/*.css',
                    'compiled/*.html'
                   // 'js/*.js',
                  //  'assets/*',
                  //  'fonts/*'
                ]
                },
            options: {
                watchTask: true,
                server: './compiled'
            }
        }

    });

    // load npm modules
    grunt.loadNpmTasks('grunt-bake');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['bake', 'sass:main', 'sass:core', 'sass:pages', 'sass:plugins', 'watch', 'browserSync']);
};
