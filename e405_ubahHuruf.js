function ubahHuruf(kata) {
  // you can only write your code here!
  var alp = 'abcdefghijklmnopqrstuvwxyza'
  var temp = ''
  for (var i = 0;i<kata.length;i+=1){
    for (var j = 0;j<alp.length-1;j+=1){
      if (kata[i]==alp[j]){
        temp += alp[j+1]
      }
    }
  }
  return temp
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu