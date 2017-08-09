'use strict';

const addCacheBusting = require('./add-cache-busting.js');
const addCspCompliance = require('./add-csp-compliance.js');
const injectCustomElementsEs5Adapter = require('./inject-custom-elements-es5-adapter.js');
const lazypipe = require('lazypipe');
const optimizeAssets = require('./optimize-assets.js');
const polymerBuild = require('./polymer-build.js');

/**
 * Best practice build pipeline. This only only chains up the various build steps.
 * 
 * @param {Object} config Content of polymer.json
 * @return
 */
function build(config) {
	return lazypipe()
		.pipe(() => polymerBuild(config))
		.pipe(() => addCspCompliance())
		.pipe(() => addCacheBusting())
		.pipe(() => optimizeAssets())
		.pipe(() => injectCustomElementsEs5Adapter());
}

module.exports = build;

