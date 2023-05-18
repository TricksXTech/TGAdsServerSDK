package main

import (
    "log"
    "net/http"

    tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api"
)

func main() {
    bot, err := tgbotapi.NewBotAPI("YOUR_TOKEN_HERE")
    if err != nil {
        log.Panic(err)
    }

    u := tgbotapi.NewUpdate(0)
    u.Timeout = 60

    updates, err := bot.GetUpdatesChan(u)

    for update := range updates {
        if update.Message == nil { // ignore any non-Message Updates
            continue
        }

        chatID := update.Message.Chat.ID
      bts_id := 000 //Your bot id get it from @AdsServerBot
      url := "https://tg.ads-server.site/?page=showads&id="+bts_id+"&action="+chatID

    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        panic(err)
    }

    client := &http.Client{}
    _, err = client.Do(req)
    if err != nil {
        panic(err)
    }
        message := tgbotapi.NewMessage(chatID, "Hii") // Test Message
        _, err = bot.Send(message)
        if err != nil {
            log.Panic(err)
        }
    }
}
