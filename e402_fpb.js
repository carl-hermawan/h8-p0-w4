function fpb(angka1, angka2) {
  // you can only write your code here!
  var small = angka2
  if (angka2>angka1){
    small = angka1
  }
  for (var i = small; i > 0; i-= 1){
    if (angka1%i == 0 && angka2%i == 0){
      return i
    }
  }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1