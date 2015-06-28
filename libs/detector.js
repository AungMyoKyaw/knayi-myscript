(function(exports){
  /**
   * Font Detecter
   */
  var __whitespace = "[\\x20\\t\\r\\n\\f]";
  var __breakpoint = "\u200B";
  var LIBRARY = {
    detect: {
      unicode: [
        'ှ', 'ဿ', 'ည်', 'န်', 'င်', 'ေး', 'ော',
        '်း', 'ဵ', '[ၐ-ၙ]', '^([က-အ]ြ|[က-အ]ေ)', __whitespace+'([က-အ]ြ|[က-အ]ေ)'
      ],
      zawgyi: [
        'ာ္', '်ာ', __whitespace+'(ျ|ေ|[ၾ-ႄ])[က-အ]'
        ,'^(ျ|ေ|[ၾ-ႄ])[က-အ]', '[က-အ]္[^က-အ]', 'ဥ္'
        ,'္း' ,'[ါ-ူေ်း](ျ|[ၾ-ႄ])[က-အ]' ,'ံု'
        ,'[က-အ]္ေ' , 'ၤ','္'+__whitespace, 'ာေ'
        ,'[ါ-ူ်း]ေ[က-အ]', 'ေေ', 'ုိ', '္$'
      ]
    }
  };

  /**
   * Font Detector on supply context
   * @param context [String] The context
   * @return The formated Object Array, which already sorted most match first.
   */
  function detector(context, detail){
    var results = [];
    // Trim and Remove break points "\u200B"
    var text = context.trim().replace(__breakpoint, "", "g");
    var lib = LIBRARY.detect;

    if( detail )
      detail = [];

    for(var font in lib) {
      var result = { type: font, matchTimes: 0 };
      var matches;
      lib[font].forEach(function(rule){
        if( matches = context.match( rule ) )
          result.matchTimes += matches.length;
      });

      results.push(result);
    }

    // Sort most possible first
    results.sort(function(a,b){
      if(a.matchTimes < b.matchTimes)
        return 1;
      if(a.matchTimes > b.matchTimes)
        return -1;
      return 0;
    });

    return results;
  }

  exports.detector = detector;

}(this));
