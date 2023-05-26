exports.run = {
   usage: ['start', 'next', 'leave'],
   category: 'games', 
  async: async(m, { command, isPrefix, client }) {
    client.anonymous = client.anonymous ? client.anonymous : {}
    switch (command) {
        case 'next':
        case 'leave': {
            let room = Object.values(client.anonymous).find(room => room.check(m.sender))
            if (!room) return client.sendMessage(m.chat, `_Kamu tidak sedang berada di anonymous chat_\n\n.start ( untuk memulai )\n.next ( untuk skip )\n.leave ( untuk berhenti )`, m)
            m.reply('Ok')
            let other = room.other(m.sender)
            if (other) await  client.sendMessage(m.chat, `_Kamu tidak sedang berada di anonymous chat_\n\n.start ( untuk memulai )\n.next ( untuk skip )\n.leave ( untuk berhenti )`, m)
            delete client.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(client.anonymous).find(room => room.check(m.sender))) return client.sendMessage(m.chat, `_Kamu masih berada di dalam anonymous chat, menunggu partner_\n\n.next ( untuk selanjutnya )\n.leave ( untuk keluar )`, m)
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                await  client.sendMessage(room.a, `_Partner ditemukan!_\n\n.start ( untuk memulai )\n.next ( untuk skip )\n.leave ( untuk berhenti )`, m)
                room.b = m.sender
                room.state = 'CHATTING'
                await  client.sendMessage(room.a, `_Partner ditemukan!_\n\n.start ( untuk memulai )\n.next ( untuk skip )\n.leave ( untuk berhenti )`, m)
            } else {
                let id = + new Date
                client.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [client.a, client.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === client.a ? client.b : who === client.b ? client.a : ''
                    },
                }
                await client.sendMessage(m.chat, `_Menunggu partner..._\n\n.leave ( untuk keluar )`, m)
            }
            break
        }
    }, 
      private: true
}
