import { Usuario } from './usuario';
import { Municipio } from './municipio';

export class Sujeito {
    public nuSeqsujeito: number;
    public usuario: Usuario;
    public municipio: Municipio;
    public nmSujeito: string;
    public dtNascimento: any;
    public flSexo: string;
    public nuTelefone: string;
    public deEmail: string; 
}