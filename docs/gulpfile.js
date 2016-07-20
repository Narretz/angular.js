"use strict";

var gulp = require('gulp');
var log = require('gulp-util').log;
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');
var bower = require('bower');
var Dgeni = require('dgeni');
var merge = require('event-stream').merge;
var path = require('canonical-path');
var foreach = require('gulp-foreach');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

// We indicate to gulp that tasks are async by returning the stream.
// Gulp can then wait for the stream to close before starting dependent tasks.
// See clean and bower for async tasks, and see assets and doc-gen for dependent tasks below

var outputFolder = '../build/docs';
var bowerFolder = 'bower_components';

var src = 'app/src/**/*.js';
var ignoredFiles = '!src/angular.bind.js';
var assets = 'app/assets/**/*';


var getMergedEslintConfig = function(filepath) {
  return {
    configFile: filepath,
    baseConfig: '../.eslintrc.json',
    rules: {
      // Examples don't run in strict mode; accept that for now.
      strict: 'off',
      // Generated examples may miss the final EOL; ignore that.
      'eol-last': 'off'
    },
    ignore: false,
    useEslintrc: false
  };
};

var copyComponent = function(component, pattern, sourceFolder, packageFile) {
  pattern = pattern || '/**/*';
  sourceFolder = sourceFolder || bowerFolder;
  packageFile = packageFile || 'bower.json';
  var version = require(path.resolve(sourceFolder, component, packageFile)).version;
  return gulp
    .src(sourceFolder + '/' + component + pattern)
    .pipe(gulp.dest(outputFolder + '/components/' + component + '-' + version));
};


gulp.task('bower', function() {
  var bowerTask = bower.commands.install();
  bowerTask.on('log', function(result) {
    log('bower:', result.id, result.data.endpoint.name);
  });
  bowerTask.on('error', function(error) {
    log(error);
  });
  return bowerTask;
});


gulp.task('build-app', function() {
  var file = 'docs.js';
  var minFile = 'docs.min.js';
  var folder = outputFolder + '/js/';

  return gulp.src([src, ignoredFiles])
    .pipe(sourcemaps.init())
    .pipe(concat(file))
    .pipe(gulp.dest(folder))
    .pipe(rename(minFile))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(folder));
});


gulp.task('assets', ['bower'], function() {
  var JS_EXT = /\.js$/;
  return merge(
    gulp.src(['img/**/*']).pipe(gulp.dest(outputFolder + '/img')),
    gulp.src([assets]).pipe(gulp.dest(outputFolder)),
    gulp.src([assets])
      .pipe(foreach(function(stream, file) {
        if (JS_EXT.test(file.relative)) {
          var minFile = file.relative.replace(JS_EXT, '.min.js');
          return stream
            .pipe(sourcemaps.init())
            .pipe(concat(minFile))
            .pipe(uglify())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(outputFolder));
        }
      })),
    copyComponent('bootstrap', '/dist/**/*'),
    copyComponent('open-sans-fontface'),
    copyComponent('lunr.js', '/*.js'),
    copyComponent('google-code-prettify'),
    copyComponent('jquery', '/dist/*.js'),
    copyComponent('marked', '/**/*.js', '../node_modules', 'package.json')
  );
});


gulp.task('doc-gen', ['bower'], function() {
  var dgeni = new Dgeni([require('./config')]);
  return dgeni.generate().catch(function() {
    process.exit(1);
  });
});


// Lint the example and protractor test files
gulp.task('eslint', ['doc-gen'], function() {
  var examplesConfig = getMergedEslintConfig('../docs/app/test/.eslintrc.json');

  var protractorConfig = getMergedEslintConfig('../docs/app/e2e/.eslintrc.json');

  return merge(
    gulp.src([
      outputFolder + '/examples/**/*.js',
      '!' + outputFolder + '/examples/**/protractor.js'
    ])
      // eslint() attaches the lint output to the "eslint" property
      // of the file object so it can be used by other modules.
      .pipe(eslint(examplesConfig))
      // eslint.format() outputs the lint results to the console.
      // Alternatively use eslint.formatEach() (see Docs).
      .pipe(eslint.format())
      // To have the process exit with an error code (1) on
      // lint error, return the stream and pipe to failAfterError last.
      .pipe(eslint.failAfterError()),
    gulp.src([
      outputFolder + '/ptore2e/**/*.js',
      outputFolder + '/examples/**/protractor.js'
    ])
      .pipe(eslint(protractorConfig))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
  );
});


// The default task that will be run if no task is supplied
gulp.task('default', ['assets', 'doc-gen', 'build-app', 'eslint']);

gulp.task('watch', function() {
  gulp.watch([src, ignoredFiles, assets], ['assets', 'build-app']);
});
