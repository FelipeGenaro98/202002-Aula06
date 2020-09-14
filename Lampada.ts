class Lampada{
    private status:boolean = false;

    Ligar(): void{
        this.status = true;
    }

    Desligar(): void{
        this.status = false;
    }

    Observar(): void{
        this.status == false ? console.log("desligada") : console.log("ligada");
    }

}
export{Lampada}