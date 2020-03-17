const gulp = require('gulp')
const uglify = require('gulp-uglify-es').default
const gulpIf = require('gulp-if')
const del = require('del')
const babel = require('gulp-babel')

// Development Tasks
// -----------------

// Optimizing CSS and JavaScript
gulp.task('destination', () => gulp.src('src/**/*')
  .pipe(gulpIf('*.js', babel({
    presets: ['@babel/preset-env']
  })))
  .pipe(gulpIf('*.js', uglify()))
  .pipe(gulp.dest('dist'))
)

// Cleaning
gulp.task('clean', () => del('dist'))

gulp.task('clean:dist', () => del(['dist/**/*']))

gulp.task('default', gulp.series('destination'))

gulp.task('build', gulp.series('clean:dist', 'destination'))
