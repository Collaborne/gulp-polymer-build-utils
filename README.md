# gulp-polymer-build-utils
Utils to simplify building Polymer applications

## Usage

Install the build-utils:
```
npm install gulp-polymer-build-utils --save
```

Use the plugins and tasks in the `gulpfile.js`:

```
const gulp = require('gulp');
const polymerBuildUtils = require('gulp-polymer-build-utils');
const runSequence = require('run-sequence');

gulp.task('prepare-dist', ['fetch-git-rev'], function() {
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
