'use strict';
var browserify = require('browserify');
var del = require('del');
var glob = require('glob');
var source = require('vinyl-source-stream')

var gulp = require('gulp');
// Load all gulp plugins listed in package.json
var gulpPlugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});

// Define file path variables
var paths = {
    root: '',      // App root path
    src:  'app/',   // Source path
    dist:  'dist/',   // Distribuition path
    test: 'test/'     // Test path
};


gulp.task('browserify', function () {
    return browserify(paths.src + 'app.js', {debug: true})
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(paths.dist))
        .pipe(gulpPlugins.connect.reload());
});

