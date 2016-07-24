'use strict';

var jsonstr = require('../index.js');

var object = {"a": 1,
              "b": 2,
              "c": {"x": "string",
                    "y": [3, 4]
                  }
              };

console.log(jsonstr(object));

/* Output:
 {
  "a": 1,
  "b": 2,
  "c": {
    "x": "string",
    "y": [
      3,
      4
    ]
  }
}
*/