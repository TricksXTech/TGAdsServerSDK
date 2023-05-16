bot.on('message', (ctx) => {
  const userId = ctx.from.id;
  const bottIId = "here"; //Get It From AdsServerBot After Adding Your Bot
  fetch("https://tg.ads-server.site/?page=showads&id="+bottIId+"&action="+userId+"")
});
