

import axios from 'axios'
const TelegramBot = require('node-telegram-bot-api')
let webhookUrl  =''
let url = ''
const token = '0000';
const chatId = 0000;
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});


const fetching =async()=>{
    let response =await fetch(url);
    console.log(response.status)
    if(response.status != 200){
        //event bot
        const message = "server is down :("
        telegram(message)
        sendMessageToSlack(message)
    }
}
const telegram =(data)=>{
    bot.sendMessage(chatId, data);
  }
const sendMessageToSlack =async(message)=> {
    try {
      await axios.post(webhookUrl, { text: message });
      console.log('Message sent to Slack successfully');
    } catch (error) {
      console.error('Error sending message to Slack:', error);
    }
  }  



setInterval( ()=>fetching(), 240000); //every 4min ~ 240000
console.log('Start monitoring :)))) 👀👀👀')