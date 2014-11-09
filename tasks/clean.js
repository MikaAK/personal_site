var gulp        = require('gulp'),
    $           = require('gulp-load-plugins')()

var shallowError = function(error) {
  console.log(error.toString());
}

gulp.task('clean', function() {
  return gulp.src(['.tmp'], {
      read:false,
      force: true
    })
    .pipe($.rimraf())
})

gulp.task('clean-build', function() {
  return gulp.src(['build/.tmp'], {
      read:false,
      force: true
    })
    .pipe($.rimraf())
})
