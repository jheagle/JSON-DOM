const babel = require('gulp-babel')
const del = require('del')
const eslint = require('gulp-eslint')
const gulp = require('gulp')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify-es').default

gulp.task('dist', () => gulp.src('src/**/*.js')
  .pipe(babel())
  .pipe(eslint({ fix: true }))
  .pipe(eslint.format())
  .pipe(gulp.dest('dist'))
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest('dist'))
)

gulp.task('clean', () => del('dist'))

gulp.task('default', gulp.series('dist'))

gulp.task('build', gulp.series('clean', 'dist'))
