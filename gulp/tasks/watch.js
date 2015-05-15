var gulp     = require('gulp');
var config   = require('../config');
var sequence = require('run-sequence');

gulp.task('watch', function (callback) {
    gulp.watch(config.path.less + '/**/*.less', ['less']);
    gulp.watch(config.path.jsbuild + '/**/*.js', ['browserify']);
    gulp.watch(config.path.javascript + '/**/*.js', ['react']);
    gulp.watch(config.path.image + '/**/*', ['images']);
});
