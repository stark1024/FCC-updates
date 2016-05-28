
function titleCase(str) {
  var aStr = str.toLowerCase().split(" ");
  var nStr;
  for(var i=0; i<aStr.ength; i++){
    aStr[i].split("")[0].toUpperCase();
  }
  str = aStr.join(" ");
  return str;
}

titleCase("I'm a little tea pot");
