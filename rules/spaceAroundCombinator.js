const stylelint = require('stylelint')

const spaceAroundCombinator = stylelint.createPlugin('@rmarchet/space-around-combinator', (primaryOption, secondaryOptionObject, context) => {
  return (root, result) => {
    root.walkRules(rule => {
      const combinators = ['>', '+', '~'];
      combinators.forEach(combinator => {
        const regex = new RegExp(`\\S\\${combinator}|\\${combinator}\\S`, 'g');
        let match;
        while ((match = regex.exec(rule.selector)) !== null) {
          if (context.fix) {
            rule.selector = rule.selector.replace(/(?<=\S)([>+~])/g, ' $1'); // Add space before
            rule.selector = rule.selector.replace(/([>+~])(?=\S)/g, '$1 '); // Add space after
         } else {
            stylelint.utils.report({
              message: `Expected a space before and after "${combinator}"`,
              node: rule,
              index: rule.raws.between ? rule.raws.between.length : 0,
              result,
              ruleName: rule.selector,
            });
          }
        }
      });
    });
  };
});

spaceAroundCombinator.ruleName = '@rmarchet/space-around-combinator';
spaceAroundCombinator.messages = stylelint.utils.ruleMessages('@rmarchet/space-around-combinator', {
  expected: combinator => `Expected a space before and after "${combinator}"`,
});

module.exports = spaceAroundCombinator
