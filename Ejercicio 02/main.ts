class Password {
    private longitud: number;
    private contrasena: string;

    constructor(longitud: number = 8) {
        this.longitud = longitud;
        this.contrasena = this.generarContrasena();
    }

    private generarContrasena = (): string => {
        const caracteresDisponibles = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let contrasenaGenerada = '';
        for (let i = 0; i < this.longitud; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteresDisponibles.length);          
            contrasenaGenerada += caracteresDisponibles.charAt(indiceAleatorio);
        }
       return contrasenaGenerada;
    }

    public getContrasena(): string {
        return this.contrasena;
    }
}

const contrasenaPorDefecto = new Password();
console.log(`Contraseña por defecto: ${contrasenaPorDefecto.getContrasena()}`);

const contrasenaTamanoDefinido = new Password(20);
console.log(`Contraseña 20 caracteres: ${contrasenaTamanoDefinido.getContrasena()}`);