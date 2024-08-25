# Stylelint-Formatting

This project contains formatting rules for Stylelint.

## Why these rules?

Starting from version 15 of Stylelint, 76 formatting rules have been deprecated. 

This project provides a minimal set of rules that can be used as replacements for some of those deprecated rules, helping to maintain consistent code formatting.

Alternatively, you can use **Prettier** for code formatting or use the deprecated rules directly from the separate project [@stylistic/stylelint-plugin](https://github.com/stylelint/stylelint-config-stylistic).

## Rules

This project includes the following Stylelint rules:

- `@rmarchet/block-opening-brace-space-before`: Ensures there is a space before the opening brace of a block.
- `@rmarchet/space-after-colon`: Ensures there is a space after a colon.
- `@rmarchet/space-around-combinator`: Ensures there is a space around a combinator.
- `@rmarchet/space-before-important`: Ensures there is a space before `!important`.
- `@rmarchet/trailing-spaces`: Ensures there are no trailing spaces.

## Installation

Follow these steps to install the project:

```bash
git clone https://github.com/rmarchet/stylelint-formatting.git
cd stylelint-formatting
```
The Stylelint rules are located in the `rules` directory. Manually copy the rules you want to use into your own project.

## Usage
This project is a set of `rules`  for Stylelint. To use it, include it in your Stylelint configuration file (see the included `.stylelintrc.json` as an example).


## TODO

- Add a rule to remove all lines that contain only spaces.
- Add autofix functionality to the `@rmarchet/trailing-spaces` rule.
- Create an npm package for easier distribution and usage.

## Contributing
Contributions are welcome. 
Please open an issue or submit a pull request.

## License

This project is licensed under the [Apache License 2.0](https://github.com/rmarchet/stylelint-formatting?tab=Apache-2.0-1-ov-file).