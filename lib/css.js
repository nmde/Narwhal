'use strict';

const parserlib = require('parserlib');

class Rule {
  constructor() {
    this.properties = {};
  }
}

module.exports = css => new Promise((resolve, reject) => {
  const parser = new parserlib.css.Parser();
  const rules = {};
  let target = null;
  parser.addListener('startrule', (event) => {
    for (let i = 0; i < event.selectors.length; i += 1) {
      const selector = event.selectors[i];
      for (let j = 0; j < selector.parts.length; j += 1) {
        if (selector.parts[j] instanceof parserlib.css.SelectorPart) {
          let string = selector.parts[j].elementName || '';
          for (let k = 0; k < selector.parts[j].modifiers.length; k += 1) {
            string += selector.parts[j].modifiers[k].text;
          }
          if (!rules[string]) {
            rules[string] = new Rule();
            target = string;
          }
        } else {
          console.log(`Combinator: ${selector.parts[j]}`);
        }
      }
    }
  });
  parser.addListener('property', (event) => {
    if (target !== null) {
      rules[target].properties[event.property.text] = event.value.text;
    }
  });
  parser.addListener('endrule', () => {
    resolve(rules);
  });
  try {
    parser.parse(css);
  } catch (e) {
    reject(e);
  }
});
