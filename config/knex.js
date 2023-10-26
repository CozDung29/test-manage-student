const config = {
    development: {
      client: 'mysql',
      connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'student',
        charset: 'utf8',
      },
    },
    migrations: {
      tableName: 'knex_student'
    },
    debug: false, 
};

module.exports = config;
