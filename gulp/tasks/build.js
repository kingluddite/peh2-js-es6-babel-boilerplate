/* eslint import/no-extraneous-dependencies: ["error", {"optionalDependencies": false}] */
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import del from 'del';
import usemin from 'gulp-usemin';
import rev from 'gulp-rev';
import cssnano from 'gulp-cssnano';
import uglify from 'gulp-uglify';

const browserSync = require('browser-sync').create();

gulp.task('previewDist', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './src',
    },
  });
});

gulp.task('deleteDistFolder', () => del('./dist'));

gulp.task('copyGeneralFiles', ['deleteDistFolder'], () => {
  const pathsToCopy = [
    './src/**/*',
    '!./src/index.html',
    '!./src/assets/images/**',
    '!./src/assets/styles/**',
    '!./src/assets/scripts/**',
    '!./src/temp/*',
    '!./src/temp/**',
  ];

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest('./dist'));
});


gulp.task('optimizeImages', ['deleteDistFolder'], function () {
  return gulp.src(['./src/assets/images/**/*', '!./src/assets/images/icons', '!./src/assets/images/icons/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true,
    }))
    .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('useminTrigger', ['deleteDistFolder'], () => {
  gulp.start('usemin');
});

gulp.task('usemin', ['styles', 'scripts'], () =>
  gulp.src('./src/index.html')
    .pipe(usemin({
      css: [() => rev(), () => cssnano()],
      js: [() => rev(), () => uglify()],
    }))
    .pipe(gulp.dest('./dist')));

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);
