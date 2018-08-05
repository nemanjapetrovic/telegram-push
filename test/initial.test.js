const dotenv = require('dotenv');
const assert = require('chai').assert;
dotenv.load();

const telegramNotifier = require('./../index');

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
    })

    it('Sync send', async () => {
        assert.isNotEmpty(CHAT_ID);

        await telegramNotifier.sendAsync(CHAT_ID, 'Sync Message 1').catch(err => {
            assert.fail(err);
        });
        await telegramNotifier.sendAsync(CHAT_ID, 'Sync Message 2').catch(err => {
            assert.fail(err);
        });
        await telegramNotifier.sendAsync(CHAT_ID, 'Sync Message 3').catch(err => {
            assert.fail(err);
        });
        await telegramNotifier.sendAsync(CHAT_ID, 'Sync Message 4').catch(err => {
            assert.fail(err);
        });
        await telegramNotifier.sendAsync(CHAT_ID, 'Sync Message 5').catch(err => {
            assert.fail(err);
        });
    });

    it('Async send', async () => {
        assert.isNotEmpty(CHAT_ID);

        telegramNotifier.sendAsync(CHAT_ID, 'Async Message 1').catch(err => {
            assert.fail(err);
        });
        telegramNotifier.sendAsync(CHAT_ID, 'Async Message 2').catch(err => {
            assert.fail(err);
        });
        telegramNotifier.sendAsync(CHAT_ID, 'Async Message 3').catch(err => {
            assert.fail(err);
        });
        telegramNotifier.sendAsync(CHAT_ID, 'Async Message 4').catch(err => {
            assert.fail(err);
        });
        telegramNotifier.sendAsync(CHAT_ID, 'Async Message 5').catch(err => {
            assert.fail(err);
        });
    });

});