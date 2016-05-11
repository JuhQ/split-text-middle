(function() {
  module.exports = function(text) {
    var after, before, findSeparator, halfOfText, halfOfTextLength, middle, middleOfText;
    halfOfTextLength = Math.floor(text.length / 2);
    halfOfText = text.substr(0, halfOfTextLength);
    findSeparator = halfOfText.match(/[,|;|.]\s+/gi);
    middleOfText = findSeparator ? halfOfText.lastIndexOf(findSeparator[Math.floor(findSeparator.length - 1)]) : Math.floor(halfOfTextLength);
    before = text.lastIndexOf(' ', middleOfText);
    after = text.indexOf(' ', middleOfText + 1);
    middle = before === -1 || after !== -1 && middleOfText - before >= after - middleOfText ? after : before;
    return {
      first: text.substr(0, middle),
      last: text.substr(middle + 1)
    };
  };

}).call(this);
