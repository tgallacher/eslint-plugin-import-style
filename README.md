# eslint-plugin-test-plugin-id

Plugin description

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-test-plugin-id`:

```
$ npm install eslint-plugin-test-plugin-id --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-test-plugin-id` globally.

## Usage

Add `test-plugin-id` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "test-plugin-id"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "test-plugin-id/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





