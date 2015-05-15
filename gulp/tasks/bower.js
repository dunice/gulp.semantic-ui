var bower  = require('gulp-bower');
var gulp   = require('gulp');
var config = require('../config');

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.path.bower));
});
