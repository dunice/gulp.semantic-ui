module.exports =  {
    path : {
        jsbuild    : './gulp/.jsbuild',
        javascript : './gulp/src/js',
        image      : './gulp/src/images',
        less       : './gulp/src/less',
        bower      : './bower_components',
        web        : './web/assets'
    },
    libs : [
        {
            name : 'semantic-ui',
            src  : './bower_components/semantic-ui/src/definitions/**/*.js',
            dest : './web/assets/js/libs/semantic-ui'
        },
        {
            name : 'jquery',
            src  : './bower_components/jquery/dist/jquery.js',
            dest : './web/assets/js/libs/jquery'
        }
    ]
};
