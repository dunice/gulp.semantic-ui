var mv           = require('mv');
var cp           = require('cp');
var less         = require('gulp-less');
var gulp         = require('gulp');
var clean        = require('./clean');
var config       = require('../config');
var rename       = require('gulp-rename');
var minifyCSS    = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function() {
    var themeConfig = config.path.bower + '/semantic-ui/src/theme.config';
    var srcFolder   = config.path.bower + '/semantic-ui/src';

    // Remove public CSS folder
    clean([
        config.path.web + '/css'
    ]);

    // Rename theme.config.example to semantic-ui work
    cp.sync(config.path.less + '/theme.config', config.path.bower + '/semantic-ui/src/theme.config');

    return gulp.src(config.path.less + '/**/*.less')
        .pipe(less({
            paths : [
                config.path.less,
                config.path.bower + '/semantic-ui',
            ]
        }))
        .pipe(gulp.dest(config.path.web + '/css'))
        .pipe(rename({
            suffix : '.min'
        }))
        .pipe(minifyCSS({
            processImport: false
        }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(config.path.web + '/css'));
});
