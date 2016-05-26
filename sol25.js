//help taken from Rafase282 repository
//task is really amazing
function palindrome(str) {
  var nStr = str.replace(/[\W_]/g, '').toLowerCase();
  var rStr = nStr.split('').reverse().join('');
  return nStr === rStr;
}



palindrome("eye");
