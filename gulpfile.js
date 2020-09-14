const babel = require('gulp-babel')
const browserify = require('browserify')
const buffer = require('vinyl-buffer')
const del = require('del')
const eslint = require('gulp-eslint')
const gulp = require('gulp')
const rename = require('gulp-rename')
const source = require('vinyl-source-stream')
const uglify = require('gulp-uglify-es').default

gulp.task('clean', () => del('dist', 'browser'))

gulp.task('dist', () => gulp.src('src/**/*.js')
  .pipe(babel())
  .pipe(eslint({ fix: true }))
  .pipe(eslint.format())
  .pipe(gulp.dest('dist'))
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest('dist'))
)

gulp.task('bundle', () => browserify('dist/main.js')
  .bundle()
  .pipe(source('jsonDom.js'))
  .pipe(buffer())
  .pipe(eslint({ fix: true }))
  .pipe(eslint.format())
  .pipe(gulp.dest('browser'))
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest('browser'))
)

gulp.task('default', gulp.series('dist'))

gulp.task('build', gulp.series('clean', 'dist', 'bundle'))
