class Produto{
    codigo:number;
    descricao:string;
    unidade:string;
    qtde:number;

    constructor(codigo:number, descricao:string, unidade:string, qtde:number){
        this.codigo = codigo;
        this.descricao = descricao;
        this.unidade = unidade;
        this.qtde = qtde;
    }

    RetornaEstoque(): void{
        console.log(`quantidade em estoque do item é de ${this.qtde} ${this.unidade}`);  
    }

    ImplantaEstoque(valor:number): void{
        this.qtde+=valor;  
    }

    BaixaEstoque(valor:number): boolean{
        let res: boolean = this.qtde >= valor ? true : false;
        
        res == true ? this.qtde-=valor : console.log("baixa não realizada, estoque insuficiente");
            
        return res
    }

    ImprimirDados(): void{
        console.log(`codigo: ${this.codigo} \ndescrição: ${this.descricao} \nunidade: ${this.unidade} \nquantidade em estoque: ${this.qtde}`);
    }

}

export{}
let a:Produto = new Produto(1, "descrição", "ml", 10000);
a.BaixaEstoque(2000000);
a.ImplantaEstoque(100);
a.BaixaEstoque(10);
a.ImprimirDados();