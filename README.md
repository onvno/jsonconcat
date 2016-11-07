# jsonconcat
concat json file



合并json多种方法，此为最简易的。



另：

* [python合并json文件](https://www.v2ex.com/t/169978)

* jquery合并方法

  ```
  var object1 = {name: "John",key:{value:123,num:234}};
  var object2 = {name: "San Jose"};

  var objectA = $.extend({}, object1, object2);
  ```

* lodash合并方法:[api](http://lodashjs.com/docs/#_assignobject-sources-customizer-thisarg)

  ```
  _.merge(object, [sources], [customizer], [thisArg])

  var users = {
    'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
  };

  var ages = {
    'data': [{ 'age': 36 }, { 'age': 40 }]
  };

  _.merge(users, ages);
  // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
  ```

  ​