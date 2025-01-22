import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Usuario } from './usuarios.model';

@Injectable()
export class UsuariosService {
  constructor(@InjectModel(Usuario) private usuarioModel: typeof Usuario) {}

  // Método para criar um novo usuário
  async criarUsuario(dados: { nome: string; email: string }): Promise<Usuario> {
    return await this.usuarioModel.create(dados as Usuario); // Garante que o registro seja criado antes de retornar
  }

  // Método para listar todos os usuários
  async listarUsuarios(): Promise<Usuario[]> {
    const usuarios = await this.usuarioModel.findAll();
    console.log('Usuários encontrados:', usuarios);
    return usuarios;
  }
}
