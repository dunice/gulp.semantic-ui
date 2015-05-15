var gulp     = require('gulp');
var sequence = require('run-sequence');

gulp.task('default', function (callback) {
    sequence('clean', 'bower', ['less', 'images', 'react', 'icons'], 'browserify', callback);
});
