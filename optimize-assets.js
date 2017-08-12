'use strict';

const babel = require('gulp-babel');
const gulpIf = require('gulp-if');
const htmlmin = require('gulp-htmlmin');
const lazypipe = require('lazypipe');
const minifyCss = require('gulp-minify-css');
const uglify = require('gulp-uglify');

const size = require('gulp-size');
const gutil = require('gulp-util');

function logError(err) {
	gutil.log(gutil.colors.red('[Error]'), err.toString());
	this.emit('end');
}

module.exports = lazypipe()
	// Convert ES6 -> ES5 code for IE11
	.pipe(() => gulpIf('*.js', babel({
		presets: [ [ 'es2015', { modules: false } ] ],
		compact: true,
		ignore: 'custom-elements-es5-adapter.js,webcomponents-*.js'
	})))
	.pipe(() => size({title: 'Babel ES6->ES5'}))

	// Minify code and HTML
	.pipe(() => gulpIf(['elements/*.js', 'scripts/*.js' ], uglify().on('error', logError))))
	.pipe(() => size({title: 'Uglify JavaScript'}))
	.pipe(() => gulpIf('*.css', minifyCss()))
	.pipe(() => size({title: 'Minimize CSS'}))
	.pipe(() => gulpIf('*.html', htmlmin({
		removeAttributeQuotes: false,
		removeEmptyAttributes: false,
		removeRedundantAttributes: false
	})))
	.pipe(() => size({title: 'Minimize HTML'}));
