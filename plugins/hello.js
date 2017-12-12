'use strict';

exports.register = function(server, options, next) {
  server.route({
    method: 'GET',
    path: '/plugin',
    handler: function(request, reply) {
      return reply('Hello from plugin. and: ' + options.message);
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'hello',
  dependencies: 'dep'
};
