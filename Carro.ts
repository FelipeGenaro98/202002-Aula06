class Carro{
    marca:string;
    modelo:string;
    placa:string;
    v:number;
    vMax:number;

    constructor(marca:string, modelo:string, placa:string, v:number, vMax:number){
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.v = v;
        this.vMax = vMax;
    }

    Acelerar(aceleracao:number): void{
        if(aceleracao <= 10){
            for(let i=0; i < Math.floor(this.vMax/aceleracao); i++){
                this.v+=aceleracao;
            }   
            console.log(`velocidade máxima atingida ${this.v}`);

        }else{
            console.log("velocidade de aceleração acima do permitido");
        }
    }

    Frear(): void{
        let t:number = this.v/10;
        console.log(`o carro irá parar em ${t} segundos`);
    }

    ImprimirDados(): void{
        console.log(`marca: ${this.marca} \nmodelo: ${this.modelo} \nplaca: ${this.placa} \nvelocidade: ${this.v} \nvelocidade máxima: ${this.vMax}`);
    }

}
export{}
let a:Carro = new Carro("marca", "modelo", "placa", 0, 100);
a.Acelerar(10);
a.Frear();
a.ImprimirDados();