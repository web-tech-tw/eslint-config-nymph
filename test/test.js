/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const assert = require('node:assert');
const {ESLint} = require('eslint');

// Runs the linter on the repo files and asserts no errors were found.
(async () => {
  // Use the rules defined in this repo to test against.
  // Prefer flat config entry. If it fails (e.g., compat missing), fall back to legacy.
  let eslint;
  try {
    eslint = new ESLint({ overrideConfigFile: 'flat.js' });
  } catch (e) {
    eslint = new ESLint({ overrideConfigFile: 'index.js' });
  }

  // The source files to lint.
  const sourceFiles = [
    'index.js',
    'test/test.js',
  ];

  const results = await eslint.lintFiles(sourceFiles);
  const errorCount = results.reduce(
      (acc, result) => acc + result.errorCount, 0,
  );
  const warningCount = results.reduce(
      (acc, result) => acc + result.warningCount, 0,
  );

  assert.equal(errorCount, 0);
  assert.equal(warningCount, 0);

  sourceFiles.forEach((file, index) => {
    assert(results[index].filePath.endsWith(file));
  });
})();
