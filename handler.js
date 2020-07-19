import {test} from '/test.js';

exports.handler = function(context, event) {
    var body = event.body.toString(); // event.body is a Buffer
    context.logger.info('reversing: ' + body);
    context.callback(body.split('').reverse().join('') + test);
};
