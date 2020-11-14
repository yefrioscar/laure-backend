module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', ''),
        password: env('DATABASE_PASSWORD', '')
      },
      options: {
        ssl: false,
        pool: {
          min: 0,
          max: 10,
          idleTimeoutMillis: 50000,
          createTimeoutMillis: 50000,
          acquireTimeoutMillis: 50000
        }
      }
    }
  }
})
