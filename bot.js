const TelegramBot = require('node-telegram-bot-api');
const token = '<bot token from botfather >';

//polling function inneficient and unrealiable
//7/5/18 1:35PM try webhook function so that telegram api sends a message
// to our application each time a user sends a message in the chat
//- much faster and reliable in message heavy groups



//const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});




