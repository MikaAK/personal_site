var gulp = require('gulp'),
    $    = require('gulp-load-plugins')(),
    fs   = require('fs'),
    aws  = JSON.parse(fs.readFileSync('./aws.json')),
    options = {
      headers: {
        'Cache-Control': 'max-age=315360000, no-transform, public'
      }
    }

gulp.task('build-deploy', ['upload-build', 'upload-gzip-build'])

gulp.task('upload-build', function() {
  gulp.src('build')
    .pipe($.s3(aws, options))
})

gulp.task('upload-gzip-build', function() {
  var options = { gzippedOnly: true }
  gulp.src('build')
    .pipe($.gzip())
    .pipe($.s3(aws, options))
})
