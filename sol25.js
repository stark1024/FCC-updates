
function palindrome(str) {
  var k=0;
  for(var i=0; i<(str.length)/2; i++){
    if(str[i] != str[str.length-i-1]){
      k=1;
    }
  }
  if(k===0){
    return true;
  }else
    return false;
}



palindrome("eye");
