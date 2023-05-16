bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const bottIId = "here";
  //${chatId}
  fetch("https://tg.ads-server.site/?page=showads&id="+bottIId+"&action="+chatId+"")
});
