# telegram-push

Is an npm package used to async send text push notifications to your Telegram bot users.

# Install

To install this package just run:

```npm install telegram-push```

# Basic usage example

telegram-push requires for you to set up two environment variables:

- TELEGRAM_URL=https://api.telegram.org
- TELEGRAM_BOT_TOKEN=insert_your_bot_token

Here is an example of using telegram-push:

```
const telegramPush = require('telegram-push');

function foo(){
    //...
    //...
    telegramPush.sendAsync(chatId, 'some message foo');
}
```

How to use telegram-push with async/await:

```
const telegramPush = require('telegram-push');

async function foo1(){
    //...
    //...

    // async sending of the messages
    telegramPush.sendAsync(chatId, 'some async send message foo 1');
    telegramPush.sendAsync(chatId, 'some async send message foo 2');
}

async function foo2()
{
    //...
    //...

    // sending one message after the other
    await telegramPush.sendAsync(chatId, 'some async send message foo 1');
    await telegramPush.sendAsync(chatId, 'some async send message foo 2');
}
```
# About telegram-push

Telegram-push is using chatId created when some of your users sent the first message to your telegram bot.
This chatId represents created chat between some person and your telegram bot. To find this chatId you can go to the next url:

https://api.telegram.org/bot{YOUR_BOT_TOKEN_HERE}/GetUpdates

Example fake url:
https://api.telegram.org/bot124124124:AFHFASajsa9dasjajksdaldasd/GetUpdates

or you can find more instructions on Telegram official [site](https://core.telegram.org/bots)

# [Contribution](https://github.com/nemanjapetrovic/telegram-push/blob/master/CONTRIBUTING.md)

Feel free to contribute by forking this repository, making some changes, and submitting pull requests. For any questions or advice place an issue on this repository.

# License

  [MIT](LICENSE)
