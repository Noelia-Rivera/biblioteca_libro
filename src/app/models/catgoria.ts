export class Catgoria {
    id: number;
    nombre: string;
    estado: string;

    constructor(
        id: number = 0, nombre: string = '', estado: string = ''
    ){
        this.id = id;
        this.nombre = nombre;
        this.estado = estado;
    }
}
