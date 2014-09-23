module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      jekyll: {                             // Task
        options: {                          // Universal options
          bundleExec: true,
          src : '<%= app %>',
          watch: true,
          serve: true
        },
        dist: {                             // Target
          options: {                        // Target options
            dest: '<%= dist %>',
            config: '_config.yml'
          }
        },
        serve: {                            // Another target
          options: {
            dest: '.jekyll',
            drafts: true
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['jekyll']);

};