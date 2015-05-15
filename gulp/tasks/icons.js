var gulp   = require('gulp');
var mkdirp = require('mkdirp');
var config = require('../config');

gulp.task('icons', function() {
    var fontsDir = config.path.web + '/fonts';

    mkdirp(fontsDir);

    return gulp.src([
            config.path.bower + '/semantic-ui/src/themes/default/assets/fonts/**.*',
        ])
        .pipe(gulp.dest(fontsDir));
});
