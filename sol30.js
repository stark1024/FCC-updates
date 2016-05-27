
function titleCase(str) {
  var aStr = str.toLowerCase().split(" ");
  for(var i=1; i<aStr.length; i++){
    aStr[i].split("")[0].toUpperCase();
  }
  str = aStr.join(" ");
  return aStr;
}

titleCase("I'm a little tea pot");
