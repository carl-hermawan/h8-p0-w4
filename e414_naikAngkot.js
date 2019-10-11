function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var res = [];
  var obj = {};
  for (var i = 0; i<arrPenumpang.length; i+=1){
    obj['penumpang'] = arrPenumpang[i][0]
    obj['naikDari'] = arrPenumpang[i][1]
    obj['tujuan'] = arrPenumpang[i][2]
    var awal = 0
    var tujuan = 0
    for (var j = 0; j < rute.length; j += 1){
      if (rute[j] == arrPenumpang[i][1]){
        awal = j
      }
      if (rute[j] == arrPenumpang[i][2]){
        tujuan = j
      }
    }
    var jarak = tujuan - awal
    if (jarak < 0){
      jarak = -jarak
    }
    // var jarak = Math.abs(rute.indexOf(arrPenumpang[i][1])-rute.indexOf(arrPenumpang[i][2]))
    obj['bayar'] = jarak * 2000
    res.push(obj)
    obj={}
  }
  return res
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]