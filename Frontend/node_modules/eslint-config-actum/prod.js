module.exports = {
  extends: ['airbnb-base', 'airbnb-base/legacy'],
  plugins: ['react', 'babel', 'import'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  /* Production rules */
  rules: {
    /* Visual */
    "indent": [1, 4, { "SwitchCase": 1 }],
    "max-len": 0,
    "padded-blocks": 0,

    /* Types */
    /* Referenes */
    "no-unused-expressions": 0,
    "no-unused-vars": 0,
    
    /* Variables */
    "no-use-before-define": ["error", { "functions": false }],

    /* Strings */
    /* Arrays */
    /* Objects */

    /* Functions */
    "space-before-function-paren": 0,
    "no-param-reassign": 0,

    /* Arrow functions */
    "arrow-body-style": 0,
    "no-return-assign": 0,

    /* Classes & Constructors */
    /* Modules */
    /*  */
    "no-alert": 2,
    "no-console": 2,

    /* Import */
    "strict": 0,
    "import/no-named-as-default": 0,
    "import/no-extraneous-dependencies": 0,
    "import/newline-after-import": 0,
    "import/extensions": 2, // Ensure consistent use of file extension.
  }
};
