let mahasiswa = ['raisya zahwa nurul paslah', 'rio rivaldo', 'pinkan prasada'];
let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jmlhHuruf: nama.length}))
console.table(jumlahHuruf);