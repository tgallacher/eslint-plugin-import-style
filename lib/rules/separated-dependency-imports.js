/**
 * @fileoverview Separate external and internal dependency imports
 * @author separated-dependency-imports
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Separate external and internal dependency imports",
      category: "Fill me in",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function (context) {
    const readFileSync = require('fs').readFileSync;
    const projPackagePath = readFileSync(require('app-root-path').resolve('/package.json'));
    const pkgJson = JSON.parse(projPackagePath);

    // TODO remove duplicates
    const deps = []
      .concat(Object.keys(pkgJson.dependencies))
      .concat(Object.keys(pkgJson.devDependencies));
    const depLocs = [];
    let lastNpmImportLine = -1;

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      ImportDeclaration(node) {
        const npmImportEndLineNum = node.source.loc.end.line;
        const npmImportStartLineNum = node.source.loc.start.line;

        // save the last line that our 3rd party plugin was imported
        if (deps.includes(node.source.value)) {
          depLocs.push(npmImportEndLineNum);

          lastNpmImportLine = Math.max(lastNpmImportLine, ...depLocs);
        } else {
          const localImportStartLine = node.source.loc.start.line;
          const endDiff = lastNpmImportLine != -1
            ? Math.abs(lastNpmImportLine - localImportStartLine)
            : 0;

          // Should have space
          if (endDiff === 1) {
            context.report(node, "Local and external import dependencies should be separated by 1 blank space");
          }
        }
      }
    };
  }
};
