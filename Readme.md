# jsonstr

return a formatted JSON string

## Example

```
var jsonstr = require('jsonstr');

var myObj = {"a": 1, "b": 2};

var myObj = jsonstr(myObj);

console.log(myObj);

// instead of this, (which is hard to read for large nested objects):
{"a":1,"b":2,"c":{"x":"string","y":[3,4]}}

// it will be output:
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

// A formatted JSON is much easier to read.
````
