var dbConfig = {
  synchronize: false,
  cli: {
    migrationsDir: 'migrations'
  }
}

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['**/*.entity.js']
    })
    break;
  case 'test':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'teste.sqlite',
      entities: ['**/*.entity.ts']
    })
    break;
  case 'production':
    // Object.assign(dbConfig, {
    //   type: 'sqlite',
    //   database: 'db.sqlite',
    //   entities: ['**/*.entity.js']
    // })
    break;
  default:
    throw new Error("Unknown Environment")
}

module.exports = dbConfig