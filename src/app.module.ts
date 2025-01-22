import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // Usuário do PostgreSQL
      password: 'lpscxt23', // Senha configurada no banco local
      database: 'teste_hospedagem', // Nome do banco criado localmente
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
