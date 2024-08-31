/*
Apakah Array Saya Mengandung Buah2an
*/

const arrayBuah = ['semangka', 'alpukat', 'mangga', 'pisang', 'jambu']
const buahBerbiji = arrayBuah.includes('semangka')

//Memanggil dulu array.lenght nya yaitu : 5

const buahAkhir2 = arrayBuah[arrayBuah.length - 1]
console.log(buahAkhir2)





if (buahBerbiji) {
    const posisiSemangka = arrayBuah.indexOf('semangka')
    const indexBefore = posisiSemangka - 1
    const indexAfter = posisiSemangka + 1
    const before = arrayBuah[indexBefore]
    const after = arrayBuah[indexAfter]
    console.log(`buah sebelum semangka adalah ${before}`)
    console.log(`buah setelah semangka adalah ${after}`)

    //mendeteksi array paling pertama
    const buahAwal = arrayBuah.shift()
    console.log(buahAwal)

    //mendeteksi array paling akhir
    const buahAkhir = arrayBuah.pop()
    console.log(buahAkhir)


} else {
    console.log(`Ternyata buah ${buahBerbiji} yang dicari tidak ada`)
}