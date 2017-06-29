/* eslint import/no-extraneous-dependencies: ["error", {"optionalDependencies": false}] */
/**
 * Linting CSS stylesheets with Stylelint
 * http://www.creativenightly.com/2016/02/How-to-lint-your-css-with-stylelint/
 */

import gulp from 'gulp';

import postcss from 'gulp-postcss';
import reporter from 'postcss-reporter';
import stylelint from 'stylelint';

gulp.task('css-lint', () => {

  // Stylelint config rules
  const stylelintConfig = {
    'rules': {
      'block-no-empty': true,
      'color-no-invalid-hex': true,
      'declaration-colon-space-after': 'always',
      'declaration-colon-space-before': 'never',
      'function-comma-space-after': 'always',
      'function-url-quotes': 'always',
      'string-quotes': 'single',
      'media-feature-colon-space-after': 'always',
      'media-feature-colon-space-before': 'never',
      'media-feature-name-no-vendor-prefix': true,
      'max-empty-lines': 5,
      'number-leading-zero': 'always',
      'number-no-trailing-zeros': true,
      'property-no-vendor-prefix': true,
      'declaration-block-no-duplicate-properties': [true, {
        ignore: ['consecutive-duplicates-with-different-values'],
      }],
      'declaration-block-trailing-semicolon': 'always',
      'selector-list-comma-space-before': 'never',
      'selector-list-comma-newline-after': 'always',
      'selector-no-id': true,
      'value-no-vendor-prefix': true,
    },
  };

  const processors = [
    stylelint(stylelintConfig),
    // Pretty reporting config
    reporter({
      clearMessages: true,
      throwError: true,
    }),
  ];

  return gulp.src(
    // Stylesheet source:
    [
      './app/assets/styles/**/*.css',
      // Ignore linting vendor assets:
      // (Useful if you have bower components)
      '!app/assets/css/vendor/**/*.css'],
    )
    .pipe(postcss(processors));
});
