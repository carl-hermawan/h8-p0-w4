function urutkanAbjad(str) {
  // you can only write your code here!
  // return str.split('').sort().join('')
  var arr = [];
  var res = ''
  for (var i = 0;i<str.length;i+=1){
    arr.push(str[i])
  }
  for (var i = 0;i<arr.length;i+=1){
    for (var j = i; j<arr.length;j+=1){
      if (arr[i] > arr[j]){
        var temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
  }
  for (var i = 0;i<arr.length;i+=1){
    res += arr[i]
  }
  return res
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'