module.exports = {
  name: "ping",

  run: async (event, api) => {
    const start = Date.now();

    api.sendMessage("ʚ je vérifie... 💫 ɞ", event.threadID, (err, info) => {
      const latency = Date.now() - start;

      api.sendMessage(
        `✨ ʚ Pong ! ɞ ${latency}ms 🌸💖`,
        event.threadID,
        info.messageID
      );
    });
  }
};
