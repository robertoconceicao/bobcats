import { Usuario } from './usuario';
import { Municipio } from './municipio';

export class Sujeito {
    public usuario: Usuario;
    public municipio: Municipio;
    public nmSujeito: string;
    public dtNascimento: any;
    public flSexo: string;
    public nuTelefone: string;
    public deEmail: string; 
}