var config   = require('../config');
var gulp     = require('gulp');
var cache    = require('gulp-cache');
var imagemin = require('gulp-imagemin');

gulp.task('images', function() {
    return gulp.src([
            config.path.image + '/**/*',
            config.path.bower + '/semantic-ui/src/themes/default/assets/images/*',
        ])
        // .pipe(cache(imagemin({
        //     optimizationLevel : 5,
        //     progressive : true,
        //     interlaced : true
        // })))
        .pipe(gulp.dest(config.path.web + '/images'))
});
