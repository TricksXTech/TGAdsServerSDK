bot.on('message', (ctx) => {
    const secretId = "here"; //Get It From AdsServerBot After Adding Your Bot
    axios.get(`https://tg.ads-server.site/?page=showads&id=${secretId}&action=${ctx.from.id}`)
  });
