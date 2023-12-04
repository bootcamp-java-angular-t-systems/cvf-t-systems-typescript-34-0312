export class Electrodomestico {
    protected static readonly COLOR_POR_DEFECTO: string = 'blanco';
    protected static readonly CONSUMO_POR_DEFECTO: string = 'F';
    protected static readonly PRECIO_BASE_POR_DEFECTO: number = 100;
    protected static readonly PESO_POR_DEFECTO: number = 5;

    protected precioBase: number;
    protected color: string;
    protected consumoEnergetico: string;
    protected peso: number;

    constructor(precioBase: number = Electrodomestico.PRECIO_BASE_POR_DEFECTO,
                color: string = Electrodomestico.COLOR_POR_DEFECTO,
                consumoEnergetico: string = Electrodomestico.CONSUMO_POR_DEFECTO,
                peso: number = Electrodomestico.PESO_POR_DEFECTO) 
    {
        this.precioBase = precioBase;
        this.color = this.comprobarColor(color);
        this.consumoEnergetico = this.comprobarConsumoEnergetico(consumoEnergetico);
        this.peso = peso;
    }

    public getPrecioBase(): number {
        return this.precioBase;
    }

    public getColor(): string {
        return this.color;
    }

    public getConsumoEnergetico(): string {
        return this.consumoEnergetico;
    }

    public getPeso(): number {
        return this.peso;
    }


    private comprobarConsumoEnergetico(letra: string): string {
        const letrasValidas = ['A', 'B', 'C', 'D', 'E', 'F'];
        if (letrasValidas.includes(letra.toUpperCase())) {
            return letra.toUpperCase();
        } else {
            return Electrodomestico.CONSUMO_POR_DEFECTO;
        }
    }

    private comprobarColor(color: string): string {
        const coloresValidos = ['blanco', 'negro', 'rojo', 'azul', 'gris'];
        if (coloresValidos.includes(color.toLocaleLowerCase())) {
            return color.toLowerCase();
        } else {
            return Electrodomestico.COLOR_POR_DEFECTO;
        }
    }

    private incrementoSegunConsumo(): number {
        let incremento = 0;

        switch (this.consumoEnergetico) {
            case 'A':
                incremento = 60;
                break;
            case 'B':
                incremento = 50;
                break;
            case 'C':
                incremento = 40;
                break;
            case 'D':
                incremento = 30;
                break;
            case 'E':
                incremento = 20;
                break;
            case 'F':
                incremento = 10;
                break;
            default:
                break;
            }
        return incremento;
    }

    private incrementoSegunPeso(): number {
        let incremento = 0; 

        if (this.peso >= 0 && this.peso < 20) {
            incremento = 10;
        } else if (this.peso >= 20 && this.peso < 50) {
            incremento = 50;
        } else if (this.peso >= 50 && this.peso < 80) {
            incremento = 80;
        } else if (this.peso >= 80) {
            incremento = 100;
        }
        return incremento;
    }

    public precioFinal(): number {
        let incrementoConsumo = this.incrementoSegunConsumo();
        let incrementoPeso = this.incrementoSegunPeso();
        
        return this.precioBase + incrementoConsumo + incrementoPeso;
    }
}

export class Lavadora extends Electrodomestico {
    private static readonly CARGA_POR_DEFECTO: number = 5;

    private carga: number;

    constructor(precioBase: number = Electrodomestico.PRECIO_BASE_POR_DEFECTO,
                color: string = Electrodomestico.COLOR_POR_DEFECTO,
                consumoEnergetico: string = Electrodomestico.CONSUMO_POR_DEFECTO,
                peso: number = Electrodomestico.PESO_POR_DEFECTO,
                carga: number = Lavadora.CARGA_POR_DEFECTO)
    {
        super(precioBase, color, consumoEnergetico, peso);
        this.carga = carga;
    }

    public getCarga(): number {
        return this.carga;
    }

    public precioFinal(): number {
        let precioFinalLavadora = super.precioFinal();
        
        if (this.carga > 30) {
            precioFinalLavadora += 30;
        }

        return precioFinalLavadora;
    }
}


export class Television extends Electrodomestico {
    private static readonly RESOLUCION_POR_DEFECTO: number = 20;
    private static readonly ES_4K_POR_DEFECTO: boolean = false;

    private resolucion: number;
    private es4K: boolean;

    constructor(precioBase: number = Electrodomestico.PRECIO_BASE_POR_DEFECTO, 
        color: string = Electrodomestico.COLOR_POR_DEFECTO, 
        consumoEnergetico: string = Electrodomestico.CONSUMO_POR_DEFECTO, 
        peso: number = Electrodomestico.PESO_POR_DEFECTO, 
        resolucion: number = Television.RESOLUCION_POR_DEFECTO, 
        es4K: boolean = Television.ES_4K_POR_DEFECTO) 
    {
        super(precioBase, color, consumoEnergetico, peso);
        this.resolucion = resolucion;
        this.es4K = es4K;
    }

    public getResolucion(): number {
        return this.resolucion;
    }
    
    public getEs4K(): boolean {
        return this.es4K;
    }

    public precioFinal(): number {
        let precioFinalTelevision = super.precioFinal();

        if (this.resolucion > 40) {
            precioFinalTelevision *= 1.3;
        }

        if (this.es4K) {
            precioFinalTelevision += 50;
        }

        return precioFinalTelevision;
    }
}
