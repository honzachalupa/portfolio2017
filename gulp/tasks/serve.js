const config = require('../config');
const DEVELOPMENT = config.environment.isDevelopment;
const gulp = require('gulp');
const gutil = require('gulp-util');
const gwatch = require('gulp-watch');
const browserSync = require('browser-sync');
const copyToClipboard = require('copy-paste').copy;
const runSequence = require('run-sequence');
const historyFallback = require('connect-history-api-fallback');
const port = config.PORT;

gulp.task('serve', ['prepare'], () => {
    const baseDir = DEVELOPMENT ? [
        config.BUILD_BASE,
        config.NPM

    ] : config.BUILD_BASE;

    browserSync({
        port,
        server: {
            baseDir,
            middleware: [
                historyFallback()
            ]
        },
        open: false
    }, (unknown, bs) => {
        const finalPort = bs.options.get('port');
        copyToClipboard(
            `localhost:${finalPort}`,
            () => gutil.log(gutil.colors.green('Local server address has been copied to your clipboard'))
        );
    });

    const watch = (glob, tasks) => gwatch(glob, () => runSequence(...tasks));

    if (DEVELOPMENT) {
        watch(config.CSS_ALL, ['styles']);
        watch(config.JS_ALL, ['eslint:app']);
        watch(config.IMAGES_ALL, ['images', 'tpl']);
        watch(config.SVG_SPRITE_ALL, ['svg', 'tpl']);
        watch(config.TEMPLATE_ALL, ['tpl']);
        watch(config.API, ['api-reload']);
    }
});
