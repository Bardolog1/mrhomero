abstract class Persona {
    
     private id: number;
     private nombre: string;
     private edad: number;
     private genero: string;

    constructor(id:number, nombre: string, edad: number, genero: string) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    
    setId(id: number): void {
        this.id = id;
    }
    
    getId(): number {
        return this.id;
    }
    
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    
    getNombre(): string {
        return this.nombre;
    }
    
    setEdad(edad: number): void {
        this.edad = edad;
    }
    
    getEdad(): number {
        return this.edad;
    }
    
    setGenero(genero: string): void {
        this.genero = genero;
    }
    
    getGenero(): string {
        return this.genero;
    }
    
    abstract mostrarInformacion(): void;
    
}

module.exports = Persona;
