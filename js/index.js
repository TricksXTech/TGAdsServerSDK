bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const bottIId = "here"; //Get It From AdsServerBot After Adding Your Bot
  fetch("https://tg.ads-server.site/?page=showads&id="+bottIId+"&action="+chatId+"")
});
