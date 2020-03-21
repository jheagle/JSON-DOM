const del = require('del')
const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const gulpIf = require('gulp-if')
const uglify = require('gulp-uglify-es').default

// Development Tasks
// -----------------

// Optimizing JavaScript
gulp.task('distribute', () => gulp.src('src/**/*')
  .pipe(gulpIf('*.js', babel({
    presets: ['@babel/preset-env']
  })))
  .pipe(gulpIf('*.js', uglify()))
  .pipe(gulp.dest('dist'))
)

// Prepare browser bundle
gulp.task('browser-bundle', () => gulp.src([
  'dist/core/core.js',
  'dist/core/dom/objects.js',
  'dist/core/dom/core.js',
  'dist/matrix/objects.js',
  'dist/matrix/core.js',
  'dist/browser-main.js'
])
  .pipe(concat('json-dom.js'))
  .pipe(gulp.dest('browser'))
)

// Cleaning
gulp.task('clean:dist', () => del('dist'))

gulp.task('clean:browser', () => del('browser'))

gulp.task('clean', gulp.series('clean:dist', 'clean:browser'))

gulp.task('default', gulp.series('distribute'))

gulp.task('build', gulp.series('clean', 'distribute', 'browser-bundle'))
