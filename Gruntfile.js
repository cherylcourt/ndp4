module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        htmlmin: {
            main: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeCommentsFromCDATA: true,
                    minifyJS: true,
                    minifyCSS: true
                },
                files: {
                     // 'destination': 'source'
                    'index.html': 'index.html',
                    'project-2048.html': 'project-2048.html',
                    'project-mobile.html': 'project-mobile.html',
                    'project-webperf.html': 'project-webperf.html',
                    'views/pizza.html': 'views/pizza.html'
                }
            }
        },
        useminPrepare: {
            html: [
                'src/index.html',
                'src/project-2048.html',
                'src/project-mobile.html',
                'src/project-webperf.html'
            ],
            options: {
                dest: '.'
            }
        },
        usemin: {
            html: [
                'index.html',
                'project-2048.html',
                'project-mobile.html',
                'project-webperf.html'
            ]
        },
        copy: {
            task0: {
                files: [
                    {expand:true, cwd: 'src/img/', src:['**'], dest: 'img/'},
                    {expand:true, cwd: 'src/views/images/', src:['**'], dest: 'views/images/'},
                    {src:'src/index.html', dest:'index.html'},
                    {src:'src/project-2048.html', dest:'project-2048.html'},
                    {src:'src/project-mobile.html', dest:'project-mobile.html'},
                    {src:'src/project-webperf.html', dest:'project-webperf.html'}

                ]
            }
        },
        cssmin: {
            views: {
                files: {
                    'views/css/tidy.min.css': ['src/views/css/style.css', 'src/views/css/bootstrap-grid.css']
                }
            }
        },
        uglify: {
            views: {
                files: {
                    'views/js/main.min.js': ['src/views/js/main.js']
                }
            }
        },
        processhtml: {
            views: {
                files: {
                    'views/pizza.html': ['src/views/pizza.html']
                }
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-processhtml');

    // build task(s).
    grunt.registerTask('build', [
        'copy:task0',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'usemin',
        'processhtml',
        'htmlmin'
    ]);

};
