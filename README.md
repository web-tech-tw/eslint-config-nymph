# eslint-config-nymph

This is the ESLint shareable config for the Google JavaScript style guide,
forked and updated to support ESLint 9 (Flat Config) while still providing a legacy export.

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for
> the [Google JavaScript style guide (ES2015+ version)](https://google.github.io/styleguide/jsguide.html)

## Installation

```shell
npm install --save-dev eslint eslint-config-nymph
```

## Usage

You can use this config in two ways depending on your ESLint setup:

1) ESLint 9+ Flat Config (recommended)

- Create `eslint.config.js` in your project:

```js
import nymph from 'eslint-config-nymph/flat';

export default [
	...nymph,
	// your project overrides go here
];
```

2) Legacy config (.eslintrc.*)

- In `.eslintrc.json`:

```json
{
	"extends": ["eslint-config-nymph"]
}
```

## Why config might not apply

- ESLint 9 switched to Flat Config and ignores legacy config files unless you use a compatibility layer. Use the `eslint-config-nymph/flat` export with an `eslint.config.js`.
- Make sure you are running ESLint from the project root where `eslint.config.js` or `.eslintrc.*` is located.
- If using a monorepo, ensure the config file is visible to the package being linted or pass `--config` explicitly.
- Ensure your Node.js version is >= 18.18 since ESLint 9 requires modern Node.

## License

Apache-2 © Google & Web-Tech-TW
