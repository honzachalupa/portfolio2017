const config = require('../config');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const merge = require('merge-stream');
const argv = require('yargs').argv;

gulp.task('copy', () => {
    const css = gulp.src(`${config.CSS_BUILD}/*`)
        .pipe(gulp.dest(`${config.BE_DEST}/Styles`));

    const js = gulp.src(`${config.JS_BUILD}/*`)
        .pipe(gulp.dest(`${config.BE_DEST}/Scripts`));

    const gfx = gulp.src(`${config.GFX_BUILD}/**/*`)
        .pipe(gulp.dest(`${config.BE_DEST}/Images`));

    return merge(css, js, gfx);
});
