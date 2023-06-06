let key = {
prefix: "DetectBBAd",
id: bot.telegramid;
}
let uri = "https://tg.ads-server.site/?page=showads&id="+id+"&action="+request.from.id
function showAds(){
HTTP.get({
url:uri
})
}
