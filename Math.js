'use strict';
/**
 * Math plugin for [SockBot](https://sockbot.rtfd.org/en/latest/)
 * @module Math
 * @author RaceProUK
 * @license MIT
 */

const mathjs = require('mathjs');
let mBrowser;

const privateFns = {
    doMath: doMath
};

//Configure MathJS
mathjs.config({
    number: 'bignumber',
    precision: 4096
});

/**
 * Prepare plugin prior to login
 *
 * @param {*} pluginConfig Plugin specific configuration
 * @param {SockBot.Config} botConfig Overall bot configuration
 * (see [SockBot docs](https://sockbot.rtfd.org/en/latest/api/lib/config/) for more details)
 * @param {SockBot.SockEvents} events EventEmitter used for the bot
 * (see [SockBot docs](https://sockbot.rtfd.org/en/latest/api/external/events/#module_SockEvents) for more details)
 * @param {SockBot.Browser} browser Web browser for communicating with discourse
 * (see [SockBot docs](https://sockbot.rtfd.org/en/latest/api/lib/browser/) for more details)
 */
exports.prepare = function (pluginConfig, botConfig, events, browser) {
    mBrowser = browser;
    events.onCommand('math', 'Evaluate mathematical expressions', doMath, () => 0);
};

/**
 * Start the plugin after login
 */
exports.start = function () {};

/**
 * Stop the plugin prior to exit or reload
 */
exports.stop = function () {};

/**
 * Parse and evaluate the supplied methematical expression
 *
 * @param {SockBot.Command} command Notification recieved
 * (see [SockBot docs](https://sockbot.rtfd.org/en/latest/api/lib/commands/#module_commands..command) for more details)
 */
function doMath(command) {
    const expression = command.args.join(' ');
    try {
        const message = [
            'Expression:',
            expression.trim(),
            '', //Blank line for readibility
            'Result:',
            mathjs.eval(expression)
        ].join('\n');
        mBrowser.createPost(command.post.topic_id, command.post.post_number, message, () => 0);
    } catch (e) {
        const error = [
            'Unable to evaluate expression',
            expression.trim(),
            '', //Blank line for readibility
            'Reason:',
            e.message
        ].join('\n');
        mBrowser.createPost(command.post.topic_id, command.post.post_number, error, () => 0);
    }
};

/* istanbul ignore else */
if (typeof GLOBAL.describe === 'function') {
    //test is running
    exports.privateFns = privateFns;
}
