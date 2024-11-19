export class Empleado{
    constructor(nombre:string,apeliido:string,cargo:string,salario:number){

        this.nombre = nombre;
        this.apellido = apeliido;
        this.cargo = cargo;
        this.salario = salario;
    }


    nombre:string = "";
    apellido:string = "";
    cargo:string = "";
    salario:number = 0;
}