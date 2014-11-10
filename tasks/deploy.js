var gulp = require('gulp'),
    runSequence = require('run-sequence')

gulp.task('deploy', function() {
  runSequence('clean', 'minify', 'build-inject', 'clean-build', 'build-deploy') 
})
