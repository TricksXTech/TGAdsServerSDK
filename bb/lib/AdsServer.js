let lib_prefix = 'AdsServer';
let API_URL = 'https://tg.ads-server.site/';

function showAds(){
  let parameter = {
    url: lib_prefix + '?page=showads&id=' + bot.telegramid + '&action=' + request.from.id,
    success: lib_prefix + 'onApiResponse',
    error: lib_prefix + 'onApiError'
  }
  HTTP.get(paramter)
}

function onApiResponse(){ return; }
function onApiError(){ return; }

publish({
  showAds: showAds
})

on(libPrefix + "onApiAnswer", onApiAnswer)
on(libPrefix + "onApiError", onApiError)
