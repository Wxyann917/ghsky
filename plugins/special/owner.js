exports.run = {
   usage: ['owner'],
   category: 'special',
   async: async (m, {
      client
   }) => {
      client.sendContact(m.chat, [{
         name: 'Contact Support',
         number: global.owner,
         about: 'Owner this bot!'
      }], m, {
         org: 'Hu Tao`s Bot Owner',
         website: 'https://s.id/rwdev',
         email: 'timzzdev@gmail.com'
      })
   },
   error: false,
   cache: true,
}