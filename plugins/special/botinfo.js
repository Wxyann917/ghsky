exports.run = {
   usage: ['tnc', 'script'],
   hidden: ['sc'],
   category: 'special',
   async: async (m, {
      client,
      args,
      command
   }) => {
      if (command == 'script' || command == 'sc') return client.reply(m.chat, info(), m)
      if (command == 'tnc') return client.sendMessageModify(m.chat, tnc(), m, {
         largeThumb: true
      })
   },
   error: false,
   cache: true,
   location: __filename
}

let info = () => {
   return `This bot was created and developed with the purpose of *learning*.
   
Source :
- https://github.com/neoxr/neoxr-bot

65% of the data sent from this bot comes from Rest API: https://api.neoxr.my.id`
}

const tnc = () => {
   return `➠ Data user, grup, dan chat akan terhapus secara otomatis jika tidak ada aktivitas yang terdeteksi selama 7 hari (alasan: pembersihan database)

 ➠ Pengguna gratis mendapatkan 25 / hari dan akan diatur ulang setelah 12 jam

 ➠ Jangan spam, jeda setiap penggunaan perintah selama 3 detik

 ➠ Jangan melakukan panggilan suara atau video (Telepon & Panggilan Video), jika Anda melakukannya akan diblokir

 ➠ Jangan toxic bot karena kalian akan mendapatkan sanksi berupa banned dan block
 
 ➠ Jangan mencari & membuat konten dewasa (+18), misal: membuat stiker dari foto bugil atau mencari desahan ASMR.
 
 ➠ Jika ingin unblock dan unbanned, masing-masing akan dikenakan biaya sebesar Rp. 5.000,- 
 
 ➠ Spammer akan dilarang secara permanen untuk pengguna gratis dan premium (tidak ada pengembalian uang)
 
 ➠ Semua Syarat & Ketentuan dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.`
}