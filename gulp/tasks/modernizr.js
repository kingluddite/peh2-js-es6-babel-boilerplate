/* eslint import/no-extraneous-dependencies: ["error", {"optionalDependencies": false}] */
import gulp from 'gulp';
import modernizr from 'gulp-modernizr';

gulp.task('modernizr', () =>
  gulp.src(['./src/assets/styles/**/*.css', './src/assets/scripts/**/*.js'])
    .pipe(modernizr({
      'options': [
        'setClasses',
      ],
    }))
    .pipe(gulp.dest('./src/temp/scripts/')));
