const blockOpeningBraceSpaceBefore = require('./blockOpeningBraceSpaceBefore')
const spaceAfterColon = require('./spaceAfterColon')
const spaceAroundCombinator = require('./spaceAroundCombinator')
const spaceBeforeImportant = require('./spaceBeforeImportant')
const trailingSpaces = require('./trailingSpaces')

module.exports = [
  blockOpeningBraceSpaceBefore,
  spaceAroundCombinator,
  spaceAfterColon,
  spaceBeforeImportant,
  trailingSpaces,
]
