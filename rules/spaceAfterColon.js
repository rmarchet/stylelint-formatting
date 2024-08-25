const stylelint = require('stylelint');

const spaceAfterColon = stylelint.createPlugin('@rmarchet/space-after-colon', (primaryOption, secondaryOptionObject, context) => {
  return (root, result) => {
    root.walkDecls(decl => {
      const declString = decl.toString();
      if (/:/.test(declString) && !/: /.test(declString)) {
        if (context.fix) {
          decl.raws.between = ': ';
        } else {
          const start = declString.indexOf(':');
          const end = start + 1;
          stylelint.utils.report({
            message: 'Expected a space after ":"',
            node: decl,
            index: start,
            end: end,
            result,
            ruleName: '@rmarchet/space-after-colon',
          });
        }
      }
    });
  };
});

spaceAfterColon.ruleName = '@rmarchet/space-after-colon';
spaceAfterColon.messages = stylelint.utils.ruleMessages('@rmarchet/space-after-colon', {
  expected: 'Expected a space after ":"',
});

module.exports = spaceAfterColon
