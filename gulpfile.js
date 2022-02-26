const babel = require('gulp-babel')
const browserify = require('browserify')
const buffer = require('vinyl-buffer')
const del = require('del')
const gulp = require('gulp')
const rename = require('gulp-rename')
const source = require('vinyl-source-stream')
const standard = require('gulp-standard')
const uglify = require('gulp-uglify-es').default

gulp.task('clean', () => del(['dist', 'browser']))

gulp.task('dist:quick', () => gulp.src('src/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('dist'))
)

gulp.task('bundle:quick', () => browserify('dist/main.js')
  .bundle()
  .pipe(source('jsonDom.js'))
  .pipe(buffer())
  .pipe(gulp.dest('browser'))
)

gulp.task('dist', () => gulp.src('src/**/*.js')
  .pipe(babel())
  .pipe(standard({ fix: true }))
  .pipe(standard.reporter('default', {
    fix: true,
    quiet: true
  }))
  .pipe(gulp.dest('dist'))
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest('dist'))
)

gulp.task('bundle', () => browserify('dist/main.js')
  .bundle()
  .pipe(source('jsonDom.js'))
  .pipe(buffer())
  .pipe(standard({ fix: true }))
  .pipe(standard.reporter('default', {
    fix: true,
    quiet: true
  }))
  .pipe(gulp.dest('browser'))
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest('browser'))
)

gulp.task('default', gulp.series('dist:quick', 'bundle:quick'))

gulp.task('build', gulp.series('clean', 'dist', 'bundle'))
