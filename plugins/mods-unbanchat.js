let handler = async (m, { conn }) => {
if (!(m.chat in global.db.data.chats)) return conn.reply(m.chat, '🍭 *¡ESTE CHAT NO ESTÁ REGISTRADO!*', m, fake)
let chat = global.db.data.chats[m.chat]
if (!chat.isBanned) return conn.reply(m.chat, '🍟 *¡𝗞𝗔𝗞𝗔𝗥𝗢𝗧𝗢-𝗕𝗢𝗧 NO ESTÁ BANEADA EN ESTE CHAT!*', m, fake)
chat.isBanned = false
await conn.reply(m.chat, '🚩 *¡𝗞𝗔𝗞𝗔𝗥𝗢𝗧𝗢-𝗕𝗢𝗧 YA FUÉ DESBANEADA EN ESTE CHAT!*', m, fake)
}
handler.help = ['unbanchat'];
handler.tags = ['mods'];
handler.command = ['unbanchat','desbanearchat','desbanchat']
handler.mods = true 
//handler.group = true

export default handler
