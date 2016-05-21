
function reverseString(str) {
  var s = [];
  for (var i=0; i<str.length; i++){
    s[i] = str[str.length-i-1];
  }
  return s.reduce(function(previousVal, currentVal){
      return previousVal + currentVal;
  });
}

reverseString("hello");
