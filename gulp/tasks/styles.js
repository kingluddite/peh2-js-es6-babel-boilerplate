/* eslint import/no-extraneous-dependencies: ["error", {"optionalDependencies": false}] */
import gulp from 'gulp';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssvars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssImport from 'postcss-import';
import mixins from 'postcss-mixins';

gulp.task('styles', () => gulp.src('./src/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on('error', function (error) {
      console.log(error.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./src/temp/styles')));
