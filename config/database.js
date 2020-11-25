module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD')
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
