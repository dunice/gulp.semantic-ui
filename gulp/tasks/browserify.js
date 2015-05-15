var _          = require('lodash');
var gulp       = require('gulp');
var concat     = require('gulp-concat');
var browserify = require('browserify');
var transform  = require('vinyl-transform');
var uglify     = require('gulp-uglify');
var rename     = require('gulp-rename');
var config     = require('../config');
var clean      = require('./clean');

function loadLibs() {
    _.forEach(config.libs, function(lib) {
        gulp.src(lib.src)
            .pipe(gulp.dest(lib.dest))
            .pipe(concat(lib.name + '.js'))
            .pipe(gulp.dest(lib.dest))
            .pipe(rename({
                suffix : '.min'
            }))
            .pipe(uglify())
            .pipe(gulp.dest(lib.dest));
    });
}

gulp.task('browserify', function () {
    clean([
        config.path.web + '/js'
    ], function() {
        loadLibs();

        var browserified = transform(function(filename) {
                var b = browserify(filename);

            return b.bundle();
        });

        gulp.src([
                config.path.jsbuild + '/**/*.js'
            ])
            .pipe(browserified)
            .pipe(gulp.dest(config.path.web + '/js'))
            .pipe(rename({
                suffix : '.min'
            }))
            .pipe(uglify())
            .pipe(gulp.dest(config.path.web + '/js'));
    });
});
