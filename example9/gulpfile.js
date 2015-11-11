"use strict";

//gulpfile.js

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
  browserify('./src/main.js')
    .transform(babelify)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('master.js'))
    .pipe(gulp.dest('./dist'));
});