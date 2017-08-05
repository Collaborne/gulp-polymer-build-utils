'use strict';

const build = require('polymer-build');
const merge = require('merge-stream');
const size = require('gulp-size');

/**
 * Executes the polymer-build, which a.o. vulcanizes and minifies the HTML
 * 
 * @returns 
 */
function polymerBuild(config) {
	const project = new build.PolymerProject(config);

	const bundler = project.bundler({
		// XXX: sourcemaps makes V8 run out of memory
		sourcemaps: false,
		stripComments: true,
	}).on('error', e => console.error(e));

	return merge(project.sources(), project.dependencies())
		.pipe(bundler)
		.pipe(size({title: 'polymer-bundler'}));
};

module.exports = polymerBuild;
