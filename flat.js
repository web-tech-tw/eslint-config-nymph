// ESLint 9+ Flat Config wrapper for eslint-config-nymph
// Usage in your project (eslint.config.js):
//   import nymph from 'eslint-config-nymph/flat';
//   export default [
//     ...nymph,
//   ];

'use strict';

const legacyConfig = require('./index.js');
const {FlatCompat} = require('@eslint/eslintrc');

const compat = new FlatCompat({baseDirectory: __dirname});

// Convert legacy rules-only config object to Flat Config array.
const flatFromLegacy = compat.config(legacyConfig);

// Ensure a default language options appropriate for modern Node/ESM if needed.
// Consumers can override in their own eslint.config.js.
module.exports = [
  ...flatFromLegacy,
];
