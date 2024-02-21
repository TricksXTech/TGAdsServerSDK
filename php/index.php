<?php
error_reporting(0);
/*
$content = file_get_contents("php://input");
$update = json_decode($content, true);
$chat_id = $update["message"]["chat"]["id"];
*/
//$chat_id is used you can replace it which your variable.
$bott_iid = ""; //Get It From AdsServerBot After Adding Your Bot
file_get_contents("https://tg.ads-server.in/?page=showads&id=$bott_iid&action=$chat_id");
