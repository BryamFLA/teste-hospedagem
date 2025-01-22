import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'usuarios', timestamps: false }) // Desativa timestamps
export class Usuario extends Model<Usuario> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;
}
