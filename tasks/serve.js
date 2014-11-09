var gulp        = require('gulp'),
    $           = require('gulp-load-plugins')()


var shallowError = function(error) {
  console.log(error.toString());
}

gulp.task('serve', ['watch'], function() {
  gulp.src(['.tmp', 'bower_components'])
    .on('error', shallowError)
    .pipe($.webserver({
      port: 9000,
      livereload: true
    }))
})

gulp.task('watch', ['inject'], function() {
  gulp.watch(['app/**/*.scss'], ['sass'])
  gulp.watch(['app/**/*.jade'], ['jade', 'inject'])
  gulp.watch(['app/**/*.js'], ['javascript'])
  gulp.watch(['bower_components/*', 'app/**/*.js'], ['inject'])
})
