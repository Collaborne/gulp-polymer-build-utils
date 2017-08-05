'use strict';

const gulp = require('gulp');
const inline = require('gulp-inline');
const size = require('gulp-size');

/**
 * Inline referenced files into the index.html
 * 
 * gulp-inline can't work with stream but needs to have all files written to the file system
 */
gulp.task('inline-references', function() {
	return gulp.src('dist/index.html')
		.pipe(inline({
			base: 'dist/',
			ignore: [
				'config.js',
				'bower_components/webcomponentsjs/webcomponents-loader.js',
				'elements/elements.html',
			],
		}))
		.pipe(size({title: 'inline:'}))
		.pipe(gulp.dest('dist'));
});
