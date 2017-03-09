//
function largestOfFour(arr) {
  // You can do this!
  var arr1, i=0;
  while(arr[i] != {}){
    var max=0, j=0;
    while(arr[i][j] !== null){
      if(arr[i][j]>max){
        max=arr[i][j];
      }
      j++;
    }
    arr1[i]=max;
    i++;
  }
  return arr1;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
