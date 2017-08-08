'use strict';

const gulp = require('gulp');
const wct = require('web-component-tester/runner/test');

/**
 * Runs the tests in Web Component Tester
 * 
 * @param options {Object} Configuration options for WCT
 * 
 * NB: This is a copy of the wct:local task from web-component-tester, with additional logic to override some configuration settings.
 */
module.exports = function runWct({ suites, browsers, debug } = options) {
	const suitesPaths = suites.map(suite => `test/${suite}`);
	const wctConfig = {
		root: 'app',
		suites: suitesPaths,
		plugins: {
			local: {
				browsers: browsers
			},
			sauce: false
		},
		verbose: debug,
		persistent: debug,
	};

	return wct.test(wctConfig).catch(function(error) {
		error = new Error(error.message || error);
		error.showStack = false;
		throw error;
	});
}
