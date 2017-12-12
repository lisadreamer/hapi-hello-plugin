'use strict';
const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  port: 3000
});

server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    return reply('Hello from hapi');
  }
});

server.register(
  [
    {
      register: require('./plugins/hello'),
      options: {
        message: 'Greetings from the server!'
      }
    },
    require('./plugins/dep')
  ],
  {
    routes: {
      prefix: '/v1'
    }
  },
  err => {
    if (err) {
      throw err;
    }

    // Starting the server
    server.start(err => {
      if (err) {
        throw err;
      }

      console.log('Server running at:', server.info.uri);
    });
  }
);
