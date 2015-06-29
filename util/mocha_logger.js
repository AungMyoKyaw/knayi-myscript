/**
 * Mocha Logger
 * Thuya Myo Nyunt
 */

module.exports = function Logger(describe){
  var space = "  ";
  while(describe.parent){
    space += "  ";
    describe = describe.parent;
  };

  function logger(type){
    return function(){
      var args = arguments;
      if(typeof args[0] === "string")
        args[0] = space + "\x1b[45m"+ type.toUpperCase() +":\x1b[0m " + args[0];
      else
        args.unshif(space + "\x1b[45m"+ type.toUpperCase() +":\x1b[0m ");

      console[type].apply(null, args);
    };
  }

  return {
    log: logger("log"),
    info: logger("info"),
    error: logger("error"),
    warn: logger("warn"),
    dir: logger("dir"),

    time: console.time,
    timeEnd: console.timeEnd,
    trace: console.trace,
    assert: console.assert
  };
};


/*
  // Example:

  describe("Mocha Logger", function(){
    var console = Logger(this);
    describe("#4Leading Space", function(){
      var console = Logger(this);

      it("console log should have 4 leading space"){
        console.log("This line of log will have 4 leading space");
      }
    })
  });
*/
