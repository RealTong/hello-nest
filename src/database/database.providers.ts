import {Connection, createConnection} from "typeorm";

const mysql = require('mysql2');

export const createDatabaseProviders = (options, entities) => {
  return [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => await createConnection({
        type: 'mysql', // 数据库类型
        host: '127.0.0.1', // 数据库地址
        port: 3306, // 数据库端口号
        username: 'root', // 数据库用户名
        password: '123456', // 密码
        database: 'test', // 数据库名
        entities: entities, // 引入实体
        synchronize: true,
      }),
    },
  ];
}