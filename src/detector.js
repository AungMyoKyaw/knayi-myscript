var whitespace = "[\\x20\\t\\r\\n\\f]";
var RULES = {
  unicode: [
    "ှ", "ဿ", "ည်", "န်", "င်", "ေး", "ော",
    "်း", "ဵ", "[ၐ-ၙ]", "^([က-အ]ြ|[က-အ]ေ)"
  ],
  zawgyi : [
    "ာ္", "်ာ", whitespace + "(ျ|ေ|[ၾ-ႄ])[က-အ]",
    "^(ျ|ေ|[ၾ-ႄ])[က-အ]", "[က-အ]္[^က-အ]", "ဥ္",
    "္း", "[ါ-ူေ်း](ျ|[ၾ-ႄ])[က-အ]", "ံု",
    "[က-အ]္ေ", "ၤ", "္" + whitespace, "ာေ",
    "[ါ-ူ်း]ေ[က-အ]", "ေေ", "ုိ", "္$"
  ]
};

RULES.unicode = RULES.unicode.map(function (rule) {
  return new RegExp(rule, "g");
});

RULES.zawgyi = RULES.zawgyi.map(function (rule) {
  return new RegExp(rule, "g");
});

/**
 * Search with detection specifice rules
 *
 * @param {[RegExp]} rules :Set or detection rules in RegExp
 * @param {String} paragraph :The words or paragraph to detect
 * @return {Number} :The total count of matches
 */
function searchWithRules(rules, paragraph) {
  return rules.map(function (rx_rule) {
    return rx_rule.test(paragraph) ? paragraph.match(rx_rule).length : 0;
  }).reduce(function (a, b) { return a + b; });
}

/**
 * Font Type Detector Method
 *
 * @param {String} paragraph :The words or paragraph to detect
 * @param {String} expectation :The expected type
 * @param {!String|undefined} The type of font or "undefined"
 */
function FontTypeDetector(paragraph, expectation) {
  var result = Object.keys(RULES).map(function (fontname) {
    return { type: fontname, count: searchWithRules(RULES[fontname], paragraph) };
  }).sort(function (a, b) {
    return +(a.count < b.count) || +(a.count === b.count) - 1;
  });

  if (expectation) {
    return result[0].type === expectation ? expectation : undefined;
  }

  return result[0].count !== 0 ? result[0].type : undefined;
}

/**
 * Debuging purpose only
 * 
 * @param {String} paragraph :The test paragraph
 * @param {String} fonttype :The font type
 */
FontTypeDetector.__debug = function (paragraph, fonttype) {
  var count = 0;
  RULES[fonttype].map(function (rx_rule) {
    paragraph = paragraph.replace(rx_rule, function (match) {
      count++;
      return "[[" + match + "]]";
    });
  });
  console.info("Match Count: %d", count);
  console.info("Paragraph: %s", paragraph);
};

if (module) { module.exports = FontTypeDetector; }