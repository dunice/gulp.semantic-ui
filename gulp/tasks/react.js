var gulp   = require('gulp');
var react  = require('gulp-react');
var config = require('../config');
var clean  = require('./clean');

gulp.task('react', function() {
    clean([
        config.path.jsbuild + '/*'
    ]);

    return gulp.src(config.path.javascript + '/**/*.js')
        .pipe(react())
        .pipe(gulp.dest(config.path.jsbuild));
});
