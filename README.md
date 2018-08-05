# telegram-push

Is an npm package used to async send text push notifications to your Telegram bot users.

# Install

To install this package just run:

```npm install telegram-push```

# Basic usage example

Here is an example of using telegram-push:

```
const telegramPush = require('telegram-push');

function foo(){
    //...
    //...
    telegramPush.sendAsync(CHAT_ID, 'some message foo');
}
```

How to use telegram-push with async/await:

```
const telegramPush = require('telegram-push');

async function foo1(){
    //...
    //...

    // async sending of the messages
    telegramPush.sendAsync(CHAT_ID, 'some async send message foo 1');
    telegramPush.sendAsync(CHAT_ID, 'some async send message foo 2');
}

async function foo2()
{
    //...
    //...

    // sending one message after the other
    await telegramPush.sendAsync(CHAT_ID, 'some async send message foo 1');
    await telegramPush.sendAsync(CHAT_ID, 'some async send message foo 2');
}
```

# [Contribution](https://github.com/nemanjapetrovic/telegram-push/blob/master/CONTRIBUTING.md)

Feel free to contribute by forking this repository, making some changes, and submitting pull requests. For any questions or advice place an issue on this repository.

# License

  [MIT](LICENSE)
