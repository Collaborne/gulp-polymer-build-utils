'use strict';

const gulp = require('gulp');
const wct = require('web-component-tester/runner/test');

const argv = require('yargs')
	.option('browsers', {
		describe: 'Browsers on which tests should run',
		default: ['chrome', 'firefox'],
		type: 'array',
	})
	.option('debug', {
		describe: 'True to keep browser open for debugging',
		default: false,
		type: 'boolean',
	})
	.option('suites', {
		describe: 'Test suite to executed',
		default: [''],
		type: 'array',
	})
	.help()
	.argv;

// Run tests
// NB: This is a copy of the wct:local task from web-component-tester, with additional logic to override some configuration settings.
gulp.task('polymer:test', function() {
	const suites = argv.suites.map(suite => `test/${suite}`);
	const wctConfig = {
		'root': 'app',
		'suites': suites,
		'plugins': {
			'local': {
				'browsers': argv.browsers
			},
			'sauce': false
		},
		'verbose': argv.debug,
		'persistent': argv.debug,
	};

	return wct.test(wctConfig).catch(function(error) {
		error = new Error(error.message || error);
		error.showStack = false;
		throw error;
	});
});
