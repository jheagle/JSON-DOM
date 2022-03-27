const babel = require('gulp-babel')
const browserify = require('browserify')
const fs = require('fs')
const del = require('del')
const { dest, parallel, series, src, watch } = require('gulp')
const filenames = require('gulp-filenames')
const { runCLI: jest } = require('jest')
const jsdoc2md = require('jsdoc-to-markdown')
const rename = require('gulp-rename')
const source = require('vinyl-source-stream')
const standard = require('gulp-standard')
const uglify = require('gulp-uglify-es').default

const dist = () => src('src/**/!(*.test).js')
  .pipe(babel())
  .pipe(dest('dist'))

const bundle = () => browserify('dist/main.js')
  .bundle()
  .pipe(source('jsonDom.js'))
  .pipe(dest('browser'))

exports.default = series(dist, bundle)

const testFull = async () => await jest({}, ['./src'])
const testQuick = async () => await jest({ onlyChanged: true }, ['./src'])

exports.test = testFull
exports['test:quick'] = testQuick

exports.watch = () => watch('src/**/*.js', { ignoreInitial: false }, parallel(testQuick, series(dist, bundle)))
exports['watch:tests'] = () => watch('src/**/*.js', { ignoreInitial: false }, series(testQuick))

const clean = () => del(['dist', 'browser'])

const distLint = () => src('dist/**/*.js')
  .pipe(standard({ fix: true }))
  .pipe(standard.reporter('default', {
    fix: true,
    quiet: true
  }))
  .pipe(dest('dist'))

const distMinify = () => src('dist/**/*.js')
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(dest('dist'))

const bundleLint = () => src('browser/jsonDom.js')
  .pipe(standard({ fix: true }))
  .pipe(standard.reporter('default', {
    fix: true,
    quiet: true
  }))
  .pipe(dest('browser'))

const bundleMinify = () => src('browser/jsonDom.js')
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(dest('browser'))

const readmeTemplate = () => src('MAIN.md')
  .pipe(rename('README.md'))
  .pipe(dest('.'))

const addToReadme = () => src('src/**/!(*.test).js')
  .pipe(filenames('readme'))
  .on('end', () => {
    const readme = jsdoc2md.renderSync({ files: filenames.get('readme').map(file => `src/${file}`) })
    fs.appendFileSync('README.md', readme, 'utf8')
    return readme
  })

const readme = series(readmeTemplate, addToReadme)

exports.readme = readme

exports.build = parallel(
  series(clean, dist, parallel(distLint, distMinify), bundle, parallel(bundleLint, bundleMinify)),
  readme,
  testFull
)
