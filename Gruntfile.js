module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        svgstore: {
            logos: {
                files: {
                    'app-assets/images/svg-images-sprite.svg': 'src/images-svg/*.svg'
                    //use like <span class="svg-image logo"><svg preserveAspectRatio="xMidYMid" focusable="false"><use xlink:href="/app-assets/images/svg-images-sprite.svg#bihus-logo"></use></svg></span>
                }
            }
        },

        bake: {
            your_target: {
                options: {
                    // Task-specific options go here.
                },

                files: {
                    "index.html": "src/html/index.html",
                    "task-page.html": "src/html/task-page.html",
                    "not-logged-index.html": "src/html/not-logged-index.html",
                    "not-logged-index-2.html": "src/html/not-logged-index-2.html",
                    "fund-page.html": "src/html/fund-page.html",
                    
                    "login.html": "src/html/login.html",
                    "recover-password.html": "src/html/recover-password.html",
                    "register.html": "src/html/register.html",
                    "under-maintenance.html": "src/html/under-maintenance.html",
                    "404.html": "src/html/404.html",
                    "403.html": "src/html/403.html"
                    
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
                    'app-assets/css/colors.css': 'src/scss/colors.scss',
                    //'compiled/css/custom-rtl.css': 'src/scss/custom-rtl.scss',
                    'assets/css/style.css': 'assets/scss/style.scss',
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

            svgstore: {
                files: [
                    'src/images-svg/*.svg'
                ],
                tasks: [ 'svgstore']
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
                    './*.html',
                   // 'js/*.js',
                    'app-assets/js/**/*.js',
                    'assets/js/**/*.js'
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
    grunt.loadNpmTasks('grunt-svgstore');

    grunt.registerTask('default', ['svgstore', 'bake', 'sass:main', 'sass:core', 'sass:pages', 'sass:plugins', 'browserSync', 'watch']);
};
