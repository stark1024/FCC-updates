  var aStr = str.toLowerCase().split(" ");
  var nStr = [];
  for(var i=0; i<aStr.length; i++){
    aStr[i].split("")[0] = aStr[i].split("")[0].toUpperCase();
    //nStr.push(aStr);
  }
  str = aStr.join(" ");
  return str;
