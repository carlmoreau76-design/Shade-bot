module.exports = {
  name: "ping",
  description: "Ping kawaii",

  run: async (client, message, args) => {
    const msg = await message.reply("ʚ je vérifie... 💫 ɞ");
    const ping = msg.createdTimestamp - message.createdTimestamp;

    msg.edit(`✨ ʚ Pong ! ɞ ma réactivité est de ${ping}ms 🌸💖`);
  }
};
