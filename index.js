'use strict';

// Combined build pipeline
exports.build = require('./integrated-build.js');

// Individual build steps
exports.addCacheBusting = require('./add-cache-busting.js');
exports.addCspCompliance = require('./add-csp-compliance.js');
exports.injectCustomElementsEs5Adapter = require('./inject-custom-elements-es5-adapter.js');
exports.optimizeAssets = require('./optimize-assets.js');
exports.polymerBuild = require('./polymer-build.js');

// Testing
exports.runWct = require('./run-wct.js').runWct;
exports.addYargs = require('./run-wct.js').addYargs;

// Import tasks
require('./inline-references-task.js');
