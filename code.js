const pertanyaan = document.getElementById('pertanyaan')
const jawaban = document.getElementById('jawaban')

let init = 0

const botSay = (data) => {
  return [
    
    "Haiii kenalin aku RizkiBot, utusan dari masa depan, kalo boleh tau nama kamu siapa?",
    `Ooh ${data?.nama} ,kamu apa kabar?`,
    `Mmm ${data?.kabar} ya, btw kamu lagi apa?`,
    `Ohhh ${data?.lagiapa}, bagus deh, eh iya dari data 1000 Tahun lalu, aku dapetin data yang bilang kalo kamu itu cantik banget, emang iya?`,
    `Hihi, tapi yasudahlah kita lupakan saja, RizkiBot mau nanya, kamu punya pacar gak?`,
    `Oooh ${data?.pacar}, ya udah kalau gitu. Sekian dulu ya hari ini, daaa`,
  ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
init++
if (init === 1) {
  botDelay({ nama: jawaban.value})
} else if (init === 2) {
  botDelay({ kabar: jawaban.value})
} else if (init === 3) {
  botDelay({ lagiapa: jawaban.value})
} else if (init === 4) {
  botDelay({ hobi: jawaban.value})
} else if (init === 5) {
  botDelay({ pacar : jawaban.value})
} else if (init === 6) {
  finishing()
} else {
  botEnd()
}
}

function botDelay(jawabanUser) {
  console.log({ usersData: usersData })
  setTimeout(() => {
  pertanyaan.innerHTML = botSay(jawabanUser)[init]
  }, [1250])
  usersData.push(jawaban.value)
  jawaban.value=""
}

function finishing() {
  pertanyaan.innerHTML = `Thank u ya udah mau nemenin RizkiBot, kali-kali kita jalan bareng ya :)`
  jawaban.value = "Thanks juga RizkiBot, boleh tuh"
}

function  botEnd() {
  window.location.reload()
}
