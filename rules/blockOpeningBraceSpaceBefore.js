const stylelint = require('stylelint')

const blockOpeningBraceSpaceBefore = stylelint.createPlugin('@rmarchet/block-opening-brace-space-before', (primaryOption, secondaryOptionObject, context) => {
  return (root, result) => {
    root.walkRules(rule => {
      const { selector, raws } = rule

      if (!raws.between || !raws.between.endsWith(' ')) {
        stylelint.utils.report({
          message: 'Expected space before opening brace',
          node: rule,
          index: selector.length,
          result,
          ruleName: '@rmarchet/block-opening-brace-space-before',
        })
      }
    })
  }
})

blockOpeningBraceSpaceBefore.ruleName = '@rmarchet/block-opening-brace-space-before'
blockOpeningBraceSpaceBefore.messages = stylelint.utils.ruleMessages('@rmarchet/block-opening-brace-space-before', {
  expected: 'Expected space before opening brace',
})

module.exports = blockOpeningBraceSpaceBefore
