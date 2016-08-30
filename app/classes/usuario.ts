import { Foto }               from './foto'
import { CodigoDescricao }    from './codigodescricao';

export class Usuario {
  id: number;
  nome: string;
  email: string;
  aparencia: string;
  senha: string;
  confirmaSenha: string;  
  fotos: Foto[] = [];
  estado: CodigoDescricao;
  cidade: CodigoDescricao;
  servicos: CodigoDescricao;
}