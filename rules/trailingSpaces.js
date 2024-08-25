const stylelint = require('stylelint')

const trailingSpaces = stylelint.createPlugin('@rmarchet/trailing-spaces', (primaryOption, secondaryOptionObject, context) => {
  return (root, result) => {
    root.walk(node => {
      const matches = [];
      const re = /[ \t]+$/gm; // matches spaces or tabs at the end of a line
      let match;
      while ((match = re.exec(node.toString())) !== null) {
        matches.push({
          index: match.index,
          line: node.toString().substring(0, match.index).split('\n').length,
        });
      }
      matches.forEach(match => {
        stylelint.utils.report({
          message: 'Unexpected trailing spaces',
          node,
          index: match.index,
          line: node.source.start.line + match.line - 1,
          result,
          ruleName: '@rmarchet/trailing-spaces',
        });
      });
    });
  };
});

trailingSpaces.ruleName = '@rmarchet/trailing-spaces'
trailingSpaces.messages = stylelint.utils.ruleMessages('@rmarchet/trailing-spaces', {
  expected: 'Unexpected trailing spaces',
})

module.exports = trailingSpaces
