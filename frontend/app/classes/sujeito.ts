export class Sujeito {
    public nuSeqsujeito: number;
    public cdUsuario: string;
    public cdMunicipio: string;
    public nmMunicipio: string;
    public nmSujeito: string;
    public dtNascimento: Date;
    public flSexo: string;
    public nuTelefone: string;
    public deEmail: string; 
    
    get toString(){
        return "nuSeqsujeito: "+this.nuSeqsujeito+" usuario: "+this.cdUsuario+" municipio: "+this.nmMunicipio+" flSexo: "+this.flSexo;        
    }
}