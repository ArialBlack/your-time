module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bake: {
            your_target: {
                options: {
                    // Task-specific options go here.
                },

                files: {
                    "index.html": "src/html/index.html"
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
                    'app-assets/css/bootstrap.css': 'src/scss/bootstrap.scss',
                    'app-assets/css/bootstrap-extended.css': 'src/scss/bootstrap-extended.scss',
                    'app-assets/css/app.css': 'src/scss/app.scss',
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
                    dest: 'app-assets/css/core/',
                    ext: '.css'
                }]
            },
            pages: {
                files: [{
                    expand: true,
                    cwd: 'src/scss/pages/',
                    src: ['*.scss', '!_*.scss'],
                    dest: 'app-assets/css/pages/',
                    ext: '.css'
                }]
            },
            plugins: {
                files: [{
                    expand: true,
                    cwd: 'src/scss/plugins/',
                    src: ['*/**/*.scss', '!*/**/_*.scss'],
                    dest: 'app-assets/css/plugins/',
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
                    'assets/css/**/*.css',
                    'app-assets/css/**/*.css',
                    './*.html'
                   // 'js/*.js',
                  //  'assets/*',
                  //  'fonts/*'
                ]
                },
            options: {
                watchTask: true,
                server: './'
            }
        }

    });

    // load npm modules
    grunt.loadNpmTasks('grunt-bake');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['bake', 'sass:main', 'sass:core', 'sass:pages', 'sass:plugins', 'browserSync', 'watch']);
};
