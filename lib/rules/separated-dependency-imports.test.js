'use strict';

const rule = require('./separated-dependency-imports');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

// FIXME need to stub the 'package.json' parse
ruleTester.run('separated-dependency-imports', rule, {
  valid: [
    {
      code: `
      import React from 'react';

      import bar from 'components/bar';
      import foo from './utils/foo';
      `,
      parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module',
      },
    }
  ],
  invalid: [
    {
      code: `
      import React from 'react';
      import bar from 'components/bar';
      import foo from './utils/foo';
      `,
      parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module',
      },
      errors: [{ message: /separated.*1 blank space/i }]
    },
  ]
});
