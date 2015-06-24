var gulp = require('gulp'); 
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
  gulp.src('./index.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
  gulp.src(['./index.js'])
    .pipe(concat('index.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/'));
});