'use strict';

const lazypipe = require('lazypipe');
const replace = require('gulp-replace');
const size = require('gulp-size');

/**
 * Creates a gulp.pipe() function that replaces the custom-elements-es5-adapter
 * placeholder with the code loading the adapter.
 * 
 * @returns 
 */
function injectCustomElementsES5Adaptor() {
	return replace(
		'<!-- inject:custom-elements-es5-adapter -->',
		'<script src="bower_components/webcomponentsjs/custom-elements-es5-adapter.js"></script>'
	);
};

module.exports = lazypipe()
	.pipe(injectCustomElementsES5Adaptor)
	.pipe(() => size({title: 'inject-custom-elements-es5-adapter'}));
