const del = require('del')
const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify-es').default

// Development Tasks
// -----------------

// Optimizing JavaScript
gulp.task('distribute', () => gulp.src('src/**/*')
  .pipe(babel({
    presets: ['@babel/preset-env']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('dist'))
)

// Prepare browser bundle
gulp.task('browser-bundle', () => gulp.src([
  'src/core/core.js',
  'src/core/dom/objects.js',
  'src/core/dom/core.js',
  'src/matrix/objects.js',
  'src/matrix/core.js',
  'src/browser-main.js'
])
  .pipe(concat('json-dom.js'))
  .pipe(babel({
    presets: ['@babel/preset-env']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('browser'))
)

// Cleaning
gulp.task('clean:dist', () => del('dist'))

gulp.task('clean:browser', () => del('browser'))

gulp.task('clean', gulp.series('clean:dist', 'clean:browser'))

gulp.task('default', gulp.series('distribute'))

gulp.task('build', gulp.series('clean', 'distribute', 'browser-bundle'))
