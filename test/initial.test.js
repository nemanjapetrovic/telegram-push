/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
const dotenv = require('dotenv');
const assert = require('chai').assert;
dotenv.config();

const telegramPush = require('./../index');

/**
 * Please change this CHAT_ID in order to run the tests for this repository.
 * This CHAT_ID represents created chat between some person and your telegram bot.
 * To find this CHAT_ID you can go to the next url:
 * https://api.telegram.org/bot{YOUR_BOT_TOKEN_HERE}/GetUpdates
 *
 * Example fake url:
 * https://api.telegram.org/bot124124124:AFHFASajsa9dasjajksdaldasd/GetUpdates
 */
const CHAT_ID = process.env.MY_CHAT_ID || '';

describe('Send messages test', () => {
  it('Validate chatId', () => {
    assert.isNotEmpty(CHAT_ID);
  });

  it('[Sync] send', async () => {
    assert.isNotEmpty(CHAT_ID);
    try {
      await telegramPush.sendAsync(CHAT_ID, '[Sync] Message 1.1');
      await telegramPush.sendAsync(CHAT_ID, '[Sync] Message 1.2');
      await telegramPush.sendAsync(CHAT_ID, '[Sync] Message 1.3');
      await telegramPush.sendAsync(CHAT_ID, '[Sync] Message 1.4');
      await telegramPush.sendAsync(CHAT_ID, '[Sync] Message 1.5');
    } catch (err) {
      assert.fail(err);
    }
  });

  it('[Async] send', async () => {
    assert.isNotEmpty(CHAT_ID);
    try {
      telegramPush.sendAsync(CHAT_ID, '[Async] Message 1');
      telegramPush.sendAsync(CHAT_ID, '[Async] Message 2');
      telegramPush.sendAsync(CHAT_ID, '[Async] Message 3');
      telegramPush.sendAsync(CHAT_ID, '[Async] Message 4');
      telegramPush.sendAsync(CHAT_ID, '[Async] Message 5');
    } catch (err) {
      assert.fail(err);
    }
  });
});
