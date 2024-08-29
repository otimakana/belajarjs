// // let uanganda 
// // let hutangAnda = 500000

// // uanganda = 5000000

// // const saldoSaya = uanganda - hutangAnda 

// // alert(`Saldo Anda saat ini adalah Rp ${saldoSaya}.`);

// const namaGuru = ['Tama', 'Kiano', 'Maila']
// for (let i=0; i<namaGuru.length; i++){
//     console.log(namaGuru[i])
// }

//mengubah document title
// document.title = 'WIDYA PRATAMA'
// const body = document.body
// body.append ('HELLOW')

// const h1 = document.createElement('h1')
// h1.textContent = 'Keren H1 Nih'

// //pada innerHTML teks bisa kita gerakkan
// const namaSaya = document.createElement('p')
// namaSaya.innerHTML = 'Pusing Juga Ya'

// const namaIstri = document.createElement('b')
// namaIstri.innerText = 'Cinta Sejatiku'

// body.append(h1)
// body.append(namaSaya)
// body.append(namaIstri)


document.title = 'BELAJAR WEB'

const btn1 = document.getElementById('btn1') //spesifik hanya pada id saja kalau getElementById
const btn2 = document.querySelector('btn2') //bisa mengambil class atau id. Class pakai . // Id pakai #

btn1.style.border = "none"
btn1.style.padding = '12px'
btn1.style.fontSize = '24px'
btn1.style.background = 'Aqua'


//event menambahkan saat berlangsugn
// onclick

function gantiWarna (){
 btn1.style.background = 'tomato'
 btn1.innerHTML = 'Anda Sudah Submit'
}


// onmouserover mengubah ketika mouse ada di atas button
function ubahText () {
    btn1.textContent = 'Anda Sudah Submit'
}

function oriText () {
    btn1.innerHTML = 'Terima Kasih Sudah Submit'
}