const stylelint = require('stylelint')

const spaceBeforeImportant = stylelint.createPlugin('@rmarchet/space-before-important', (primaryOption, secondaryOptionObject, context) => {
  return (root, result) => {
    root.walkDecls(decl => {
      const declString = decl.toString();
      if (decl.raws.important && !decl.raws.important.includes(' ')) {
        if (context.fix) {
          decl.raws.important = " !important";
        } else {
          const index = declString.indexOf('!important');
          stylelint.utils.report({
            message: 'Expected a space before "!important"',
            node: decl,
            index,
            result,
            ruleName: '@rmarchet/space-before-important',
          });
        }
      }
    });
  };
});

spaceBeforeImportant.ruleName = '@rmarchet/space-before-important';
spaceBeforeImportant.messages = stylelint.utils.ruleMessages('@rmarchet/space-before-important', {
  expected: 'Expected a space before "!important"',
});

module.exports = spaceBeforeImportant
