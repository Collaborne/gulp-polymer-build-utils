# gulp-polymer-build-utils

[![Greenkeeper badge](https://badges.greenkeeper.io/Collaborne/gulp-polymer-build-utils.svg)](https://greenkeeper.io/)
Utils to simplify building Polymer applications

See this [blog post](https://medium.com/collaborne-engineering/building-polymer-app-with-gulp-dee266d348df) about the background and functionality of the gulp plugins.

## Usage

Install the build-utils:
```
npm install gulp-polymer-build-utils --save
```

Use the plugins and tasks in the Gulp config file `gulpfile.js`:

```
const gulp = require('gulp');
const polymerBuildUtils = require('gulp-polymer-build-utils');
const runSequence = require('run-sequence');

gulp.task('prepare-dist', function() {
  return polymerBuildUtils.polymerBuild(require('./polymer.json'))
    .pipe(polymerBuildUtils.addCspCompliance())
    .pipe(polymerBuildUtils.addCacheBusting())
    .pipe(polymerBuildUtils.optimizeAssets())
    .pipe(polymerBuildUtils.injectCustomElementsEs5Adapter())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', function(cb) {
  runSequence('prepare-dist', 'inline-references', cb);
});
```
