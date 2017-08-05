'use strict';

const filter = require('gulp-filter');
const lazypipe = require('lazypipe');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const size = require('gulp-size');

const elementsFilter = filter(['elements/*'], { restore: true });
const indexFilter = filter(['index.html', 'elements/*'], { restore: true });

/**
 * The elements.js file is imported from elements.html in the same directly.
 * The path prefix must therefore be removed.
 */
function removePathFromJSfile(filename) {
	if (filename.endsWith('js')) {
		return filename.replace('elements/', '');
	}

	return filename;
}

/**
 * Adds cache busting to the element/elements.html file
 */
module.exports = lazypipe()
	.pipe(() => elementsFilter)
	.pipe(rev)
	.pipe(() => size({title: 'add-cache-busting'}))
	.pipe(() => elementsFilter.restore)
	.pipe(() => indexFilter)
	.pipe(() => revReplace({
		modifyUnreved: removePathFromJSfile,
		modifyReved: removePathFromJSfile,
	}))
	.pipe(() => size({title: 'add-cache-busting (replace)'}))
	.pipe(() => indexFilter.restore);
