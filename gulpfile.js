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
var bower = require('gulp-bower');

// Define file path variables
var paths = {
    root: '',
    src:  'app/',
    dist:  'dist/',
    test: 'test/',
    node: 'node_modules/',
    bower: 'bower_components'
};

gulp.task('default', [
    'bower',
    'browserify'
]);

gulp.task('browserify', function () {
    return browserify(paths.src + 'app.js', {debug: true})
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(paths.dist))
        .pipe(gulpPlugins.connect.reload());
});

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(paths.bower));
});

