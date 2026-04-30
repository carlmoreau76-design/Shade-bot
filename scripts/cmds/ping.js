module.exports = {
  name: "ping",
  version: "1.0.0",
  author: "Saebot",

  run: async ({ message }) => {
    const time = Date.now();

    message.reply("ʚ je vérifie... 💫 ɞ");

    const latency = Date.now() - time;

    message.reply(`✨ ʚ Pong ! ɞ ${latency}ms 🌸💖`);
  }
};
