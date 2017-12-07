const config = require('../config');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const DEVELOPMENT = config.environment.isDevelopment;
const devSequence = ['clean', ['images', 'svg', 'styles', 'js'], 'tpl'];

if (config.environment.isApi) {
    devSequence.push('api');
}

const buildSequence = devSequence;
const sequence = DEVELOPMENT ? devSequence : buildSequence;

gulp.task('prepare', () => runSequence(...sequence));

module.exports = {
    buildSequence
};
