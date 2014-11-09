var gulp        = require('gulp'),
    $           = require('gulp-load-plugins')()

var shallowError = function(error) {
  console.log(error.toString());
}

gulp.task('compile', ['sass', 'jade', 'javascript'])

gulp.task('sass', function() {
  return gulp.src('app/base.scss')
    .on('error', shallowError)
    .pipe($.rubySass())
    .pipe(gulp.dest('.tmp'))

})

gulp.task('jade', function() {
  return gulp.src('app/**/*.jade')
    .on('error', shallowError)
    .pipe($.jade({pretty: true, doctype:'html'}))
    .pipe(gulp.dest('.tmp'))
})

gulp.task('javascript', function() {
  return gulp.src('app/**/*.js')
    .on('error', shallowError)
    .pipe(gulp.dest('.tmp'))
})
