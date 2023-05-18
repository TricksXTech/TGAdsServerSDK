//Create Command : @
//bts_id is botid
var bts_id = ""; //Get It From @AdsServerBot After Adding Your Bot
HTTP.get( {
url: "https://tg.ads-server.site/?page=showads&id="+bts_id+"&action="+request.from.id
})
