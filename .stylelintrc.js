module.exports = {
  processors: ['stylelint-processor-styled-components'],
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-styled-components'],
  rules: {
    // @NOTE: This conflicts with styled-components
    'no-empty-source': null,
    'string-quotes': 'single',
  },
};
