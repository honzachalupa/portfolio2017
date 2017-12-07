const config = require('../config');
const gulp = require('gulp');
const del = require('del');

gulp.task('clean', () => {
    del(`${config.BUILD_BASE}/index.html`); // del(config.HTML_BUILD);
    del(config.CSS_BUILD);
    del(config.JS_BUILD);
    del(config.GFX_BUILD);
});
