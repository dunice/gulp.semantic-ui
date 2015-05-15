var del    = require('del');
var config = require('../config');
var gulp   = require('gulp');

function clean(folder, cb) {
    if(!folder) {
        folder = [
            config.path.web + '/js',
            config.path.web + '/css',
            config.path.web + '/fonts',
            config.path.web + '/images',
            config.path.jsbuild,
            config.path.bower,
        ];
    }

    del(folder, {
        force : true
    }, cb);
}

gulp.task('clean', function(cb) {
    clean(null, cb);
});

module.exports = clean;
