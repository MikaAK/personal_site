'use strict'

var gulp        = require('gulp'),
    $           = require('gulp-load-plugins')(),
    runSequence = require('run-sequence')

require('require-dir')('./tasks')

gulp.task('default', ['serve']);
