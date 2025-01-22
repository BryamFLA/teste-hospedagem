import { Controller, Post, Get, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async criar(@Body() dados: { nome: string; email: string }) {
    return this.usuariosService.criarUsuario(dados);
  }

  @Get()
  async listar() {
    return this.usuariosService.listarUsuarios();
  }
}
