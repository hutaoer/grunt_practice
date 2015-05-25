module.exports = function(grunt) {
    // grunt.initConfig({
    //     pkg: grunt.file.readJSON('package.json'),
    //     uglify: {
    //         options: {
    //             banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //           },
    //           build: {
    //             src: 'src/*.js',
    //             dest: 'build/*.min.js'
    //           }
    //     }
    // })

    // grunt.loadNpmTasks('grunt-contrib-uglify');

    // grunt.loadNpmTasks('grunt-contrib-copy');

    // grunt.registerTask('Log', 'Log some stuff', function() {
    //     grunt.log.write('Logging some stuff...').ok();
    //   });

    // grunt.registerTask('default', ['uglify','Log']);

    grunt.initConfig({
        copy: {
          main: {
            expand: true,
            cwd: 'src/',
            src: '**',
            dest: 'dest/',
            flatten: true,
            filter: 'isFile',
          },
        }
    })

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy']);
}