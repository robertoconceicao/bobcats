export class Sujeito {
    public nuSeqsujeito: number;
    public cdUsuario: number;
    public cdMunicipio: number;
    public nmMunicipio: string;
    public nmSujeito: string;
    public dtNascimento: any;
    public flSexo: string;
    public nuTelefone: string;
    public deEmail: string; 
    
    get toString(){
        return "nuSeqsujeito: "+this.nuSeqsujeito+" usuario: "+this.cdUsuario+" municipio: "+this.nmMunicipio+" flSexo: "+this.flSexo;        
    }
}