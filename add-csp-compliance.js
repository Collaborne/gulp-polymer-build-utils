'use strict';

const crisper = require('gulp-crisper');
const filter = require('gulp-filter');
const lazypipe = require('lazypipe');
const size = require('gulp-size');

const elementsFilter = filter(['elements/elements.html'], { restore: true });

/**
 * Splits the combined Polymer file for CSP compliance
 */
module.exports = lazypipe()
	.pipe(() => elementsFilter)
	.pipe(() => size({title: 'add-csp-compliance'}))
	.pipe(() => crisper({scriptInHead:false}))
	.pipe(() => elementsFilter.restore);
