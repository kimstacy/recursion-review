// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// Use document.body, element.childNodes, and element.classList

// Input: className
// Output: Array of matching classes (elements)

var getElementsByClassName = function(className) {
  var results = [];

  var findElement = function(element) {
    if (element.classList && element.classList.contains(className)) {
      results.push(element);
    }

    // for (var i = 0; i < element.childNodes.length; i++) {
    //   findElement(element.childNodes[i]);
    // }

    if (element.childNodes) {
      element.childNodes.forEach(function(subelement) {
        findElement(subelement);
      });
    }
  };
  findElement(document.body);
  return results;
};
