import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: '`/cloudsql/kdbackend-8f04e:southamerica-east1:teste-hospedagem`',
      username: process.env.DB_USERNAME, // Variáveis de ambiente
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadModels: true,
      synchronize: true, // Sincroniza os modelos com o banco (ideal para desenvolvimento)
      logging: console.log, // Habilita logs SQL
    }),
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
