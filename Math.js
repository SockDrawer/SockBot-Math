'use strict';
/**
 * Math
 * @module Math
 * @author RaceProUK
 * @license MIT
 */

const mathjs = require('mathjs');

/**
 * Prepare Plugin prior to login
 *
 * @param {*} plugConfig Plugin specific configuration
 * @param {SockBot.Config} config Overall bot configuration
 * @param {SockBot.Events.SockEvents} events EventEmitter used for the bot
 * @param {SockBot.Browser} browser Web browser for communicating with discourse
 */
exports.prepare = function (plugConfig, config, events, browser) { //eslint-disable-line no-unused-vars
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
 * @param {SockBot.Commands.Command} command Notification recieved
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
