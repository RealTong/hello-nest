import {DynamicModule, Module} from "@nestjs/common";
import {ConnectionProvider} from "./connection.provider";
import {createDatabaseProviders} from "./database.providers";

@Module({
  providers: [ConnectionProvider]
})
export class DatabaseModule{
  static forRoot(entities= [], options?):DynamicModule {
    const providers = createDatabaseProviders(options,entities);
    return {
      module: DatabaseModule,
      providers: providers,
      exports: providers,
    }
  }
}