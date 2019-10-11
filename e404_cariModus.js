function cariModus(arr) {
  // you can only write your code here!
  var count = 0;
  var theNum = 0;
  for (var i=0;i<arr.length;i+=1){
    var countNow = 0;
    for (var j=0;j<arr.length;j+=1){
      if (arr[i] == arr[j]){
        countNow +=1
      }
    }
    if (countNow > count){
      count = countNow
      theNum = arr[i]
    }
  }
  if (count == 1 || count == arr.length){
    return -1
  } else {
    return theNum;
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
