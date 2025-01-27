import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'kdbackend-8f04e:southamerica-east1:teste-hospedagem',
      username: 'postgres', // Variáveis de ambiente
      password: 'lpscxt23',
      database: 'banco-teste-hospedagem',
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
