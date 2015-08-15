'use strict';
/**
 * Math plugin for [SockBot](https://sockbot.rtfd.org/en/latest/)
 * @module Math
 * @author RaceProUK
 * @license MIT
 */

const mathjs = require('mathjs');

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
exports.prepare = function (pluginConfig, botConfig, events, browser) { //eslint-disable-line no-unused-vars
    events.onCommand('math', 'math <expression>', exports.doMath, () => 0);
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
 * @returns {string} The result of executing the command
 */
exports.doMath = function doMath(command) {
    const expression = command.args.join(' ');
    try {
        return [
            'Expression:',
            expression.trim(),
            'Result:',
            mathjs.eval(expression)
        ].join('\n');
    } catch (e) {
        return [
            'Unable to evaluate expression',
            expression.trim(),
            'Reason:',
            e.message
        ].join('\n');
    }
};
