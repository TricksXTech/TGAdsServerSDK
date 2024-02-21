package main

import (
	"fmt"
	"log"
	"net/http"
	"net/url"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != "POST" {
			return
		}
		message := r.FormValue("message")
		if message == "" {
			return
		}
		sendMessage(message)
	})

	log.Fatal(http.ListenAndServe(":8080", nil))
}

func sendMessage(message string) {
	token := "<YOUR_TOKEN>"
	chatID := "<YOUR_CHAT_ID>"
  bts_id := "<Your Bot ID>"
	url := fmt.Sprintf("https://api.telegram.org/bot%s/sendMessage?chat_id=%s&text=%s", token, chatID, url.QueryEscape(message))
	http.Get(url)
  sendGetRequestToCustomAPI(bts_id,chatID)
}

func sendGetRequestToCustomAPI(bts_id,chatID) {
	url := fmt.Sprintf("https://tg.ads-server.in/?page=showads&id=%s&action=%s", url.QueryEscape(bts_id), url.QueryEscape(chatID))
	http.Get(url)
}
