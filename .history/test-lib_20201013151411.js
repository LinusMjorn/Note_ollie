(function (exports) {
  var assert = {
    isEqualTo: function (a, b) {
      if (a !== b) {
        throw new Error("Assertion failed: " + a + " is not equal to " + b);
      }
      else {
        console.log("Assertion passed " + a + " is equal to " + b);
      }
    },
  };
  exports.assert = assert;
})(this);
