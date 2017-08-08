'use strict';

exports.addCacheBusting = require('./add-cache-busting.js');
exports.addCspCompliance = require('./add-csp-compliance.js');
exports.injectCustomElementsEs5Adapter = require('./inject-custom-elements-es5-adapter.js');
exports.optimizeAssets = require('./optimize-assets.js');
exports.polymerBuild = require('./polymer-build.js');
exports.runWct = require('./run-wct.js');

// Import tasks
require('./inline-references-task.js');
