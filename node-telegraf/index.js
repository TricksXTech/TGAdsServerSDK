bot.on('message', (ctx) => {
  const userId = ctx.from.id;
  const bottIId = "here";
  //${chatId}
  fetch("https://tg.ads-server.site/?page=showads&id="+bottIId+"&action="+userId+"")
});
