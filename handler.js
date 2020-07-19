const user = require('./user');

exports.handler = function(context, event) {
    var body = event.body.toString(); // event.body is a Buffer
    context.logger.info('reversing: ' + body);
    context.logger.info('contenuto uguale a: ' + user.getName());
    context.callback(body.split('').reverse().join(''));
};
