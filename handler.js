const test = require('./test');

exports.handler = function(context, event) {
    var body = event.body.toString(); // event.body is a Buffer
    context.logger.info('reversing: ' + body);
    context.logger.info('contenuto uguale a: ' + test);
    context.callback(body.split('').reverse().join(''));
};
