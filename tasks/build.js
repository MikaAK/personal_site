var gulp        = require('gulp'),
    $           = require('gulp-load-plugins')(),
    bowerFiles  = require('main-bower-files'),
    runSequence = require('run-sequence')

var shallowError = function(error) {
  console.log(error.toString());
}

var removeCss = function(array) {
  var files = []

  for (var file in array) {
    if (!/css$/.exec(array[file])) {
      files.push(array[file])
    }
  }
  return files
}

var removeJs = function(array) {
  var files = []

  for (var file in array) {
    if (!/js$/.exec(array[file])) {
      files.push(array[file])
    }
  }
  return files
}

var camelize = function(string) {
  var string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
    return chr ? chr.toUpperCase() : ''
  })
  // Ensure 1st char is always lowercase
  return string.replace(/^([A-Z])/, function(match, chr) {
    return chr ? chr.toLowerCase() : ''
  })
}


gulp.task('build', function() {
  runSequence('clean', 'minify', 'build-inject', 'clean-build')
})

gulp.task('jade2js', ['javascript', 'sass'], function() {
  gulp.src('app/index.jade')
    .on('error', shallowError)
    .pipe($.jade({doctype:'html'}))
    .pipe(gulp.dest('.tmp'))
  return gulp.src('app/modules/**/*.jade')
    .pipe($.jade({doctype: 'html'}))
    .pipe($.ngHtml2js({
      declareModule: false,
      moduleName: function(file) {
        var name = /modules\/(.+)\/.|$/.exec(file.path)[1]
        if (name.indexOf('/') != -1)
          name = name.replace(/[^/]+$/, '').replace('/', '')

        return 'personalSite.' + camelize(name)
      },
      prefix: 'modules/'
    }))
    .pipe($.concat('templates.js'))
    .pipe(gulp.dest('build/.tmp'))
})

gulp.task('tempJS', ['jade2js'], function() {
  gulp.src(removeCss(bowerFiles()))
    .pipe($.concat('vendor.js'))
    .pipe(gulp.dest('build/.tmp'))
  return gulp.src('.tmp/**/*.js')
    .pipe($.angularFilesort())
    .pipe($.concat('custom.js'))
    .pipe(gulp.dest('build/.tmp'))
})

gulp.task('minify', ['tempJS'], function() {
  var files = removeJs(bowerFiles())
  files.push('.tmp/**/*.css')

  gulp.src(['build/.tmp/vendor.js', 'build/.tmp/custom.js', 'build/.tmp/templates.js'])
    .pipe($.concat('all.js'))
    .pipe($.uglify())
    .pipe($.rev())
    .pipe(gulp.dest('build'))
  return gulp.src(files)
    .pipe($.concat('all.css'))
    .pipe($.minifyCss())
    .pipe($.rev())
    .pipe(gulp.dest('build'))
})
