let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [082365089294]
│ • Dana [082365089294]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282365089294
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
