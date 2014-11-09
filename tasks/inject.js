var gulp        = require('gulp'),
    $           = require('gulp-load-plugins')(),
    bowerFiles  = require('main-bower-files')

var shallowError = function(error) {
  console.log(error.toString());
}

gulp.task('inject-sass', function() {
  gulp.src('app/base_dev.scss')
    .pipe($.inject(
      gulp.src('app/modules/**/*.scss', {read: false}), {
        ignorePath: 'app/',
        starttag: '// inject:scss:modules',
        endtag: '// endinject'
      }
    ))
    .pipe(gulp.dest('app'))
})

gulp.task('inject', ['sass', 'jade', 'javascript'], function() {
  var files = bowerFiles()
  return gulp.src('app/index.jade')
    .on('error', shallowError)
    .pipe($.jade({pretty: true}))
    .pipe($.inject(
      gulp.src(files, {read: false}), {
        ignorePath: 'bower_components/',
        starttag: '<!-- inject:vendor:{{ext}}-->',
        endtag: '<!-- endinject-->'
      }
    ))
    .pipe($.inject(
      gulp.src('.tmp/**/*.css', {read: false}), {
        ignorePath: '.tmp/',
        starttag: '<!-- inject:custom:css-->',
        endtag: '<!-- endinject-->'
      }
    ))
    .pipe($.inject(
      gulp.src('.tmp/**/*.js').pipe($.angularFilesort()), {
        ignorePath: '.tmp/',
        starttag: '<!-- inject:custom:{{ext}}-->',
        endtag: '<!-- endinject-->'
      }
    ))
    .pipe(gulp.dest('.tmp'))
})

gulp.task('build-inject', function() {
  return gulp.src('.tmp/**/*.html')
    .pipe($.inject(gulp.src('build/*', {read: false}), {
      ignorePath: 'build/',
      starttag: '<!-- inject:custom:{{ext}}-->',
      endtag: '<!-- endinject-->'
    }))
    .pipe(gulp.dest('build'))
})
