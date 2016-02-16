module.exports = {
  parser: 'babel-eslint',
  extends: 'google',
  rules: {
    'no-var': 2,
    'max-len': [2, 120, 2],
    'require-jsdoc': 0
  },
  plugins: [
    'react'
  ]
};
