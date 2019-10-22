// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

/*
Converts JS object or value to a JSON string
* Optionally replaces values if a replacer function is specified
* Optionally includes only specificed properties if a replacer array is specified

Input: Object or value
Output: String
*/

var stringifyJSON = function(obj) {
  // if input is undefined
  if (obj === undefined) {
    return 'undefined';
  }

  // if input is string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  // if input is null, number, or boolean
  if (obj === null || typeof obj === 'number' || typeof obj === 'boolean') {
    return '' + obj;
  }

  // if input is an array
  if (Array.isArray(obj)) {
    // if input array is empty
    if (obj.length === 0) {
      return '[]';
    }

    // if input array is not empty
    // create container result array
    var result = [];
    // iterate over input array
    obj.forEach(function(element) {
      // use recursion to call stringifyJSON
      // push element into result array
      result.push(stringifyJSON(element));
    });

    // create the resultStr as final result
    // use for loop to iterate over result array
    // append each substring to the final result
    var resultStr = '[';
    for (var i = 0; i < result.length; i++) {
      if (i !== 0) {
        resultStr += ',';
      }
      resultStr += result[i].toString();
    }

    resultStr += ']';
    return resultStr;
  }

  // if input is an object
  if (typeof obj === 'object') {
    // if input obj is empty
    if (obj.length === 0) {
      return '{}';
    }

    // if input obj is not empty
    var result = [];

    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }

    return '{' + result.join(',') + '}';
  }
};
