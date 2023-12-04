class Persona {
  private static readonly SEXO_POR_DEFECTO: string = "H";

  private nombre: string;
  private edad: number;
  private DNI: string;
  private sexo: string;
  private peso: number;
  private altura: number;

  constructor(
    nombre: string = "",
    edad: number = 0,
    DNI: string,
    sexo: string = Persona.SEXO_POR_DEFECTO,
    peso: number = 0,
    altura: number = 0
  ) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
  }

  getNombre(): string {
    return this.nombre;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  getEdad(): number {
    return this.edad;
  }

  setEdad(edad: number): void {
    this.edad = edad;
  }

  getDNI(): string {
    return this.DNI;
  }

  getSexo(): string {
    return this.sexo;
  }

  setSexo(sexo: string): void {
    this.sexo = sexo;
  }

  getPeso(): number {
    return this.peso;
  }

  setPeso(peso: number): void {
    this.peso = peso;
  }

  getAltura(): number {
    return this.altura;
  }

  setAltura(altura: number): void {
    this.altura = altura;
  }
}

const persona1 = new Persona('Raquel', 34, '12345678E', 'M', 70, 1.80);
const persona2 = new Persona('Marta', 27, '98578584D', 'M', 80, 1.70);
const persona3 = new Persona('Alberto', 34, '987654321E', 'H', 90, 1.85);

console.log(persona1);
console.log(persona2);
console.log(persona3);