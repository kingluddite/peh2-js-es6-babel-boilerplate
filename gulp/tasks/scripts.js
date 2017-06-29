/* eslint import/no-extraneous-dependencies: ["error", {"optionalDependencies": false}] */
import gulp from 'gulp';
import webpack from 'webpack';

gulp.task('scripts', ['modernizr'], (callback) => {
  // tell webpack where our config file is
  webpack(require('../../webpack.config.js'), (err, stats) => {
    if (err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback();
  });
});
