function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var faktor = [];
  for (var i=0;i<=angka;i+=1){
    if (angka%i == 0){
      faktor.push(String(i)+String(angka/i))
    }
  }
  var min = faktor[0].length;
  for (var i = 0;i<faktor.length;i+=1){
    if (faktor[i].length < min){
      min = faktor[i].length
    }
  }
  return min
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2