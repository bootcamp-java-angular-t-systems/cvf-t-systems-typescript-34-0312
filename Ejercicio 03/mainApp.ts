import { Electrodomestico, Television, Lavadora } from "./Eloctrodomesticos";

class mainApp {
  public static main(): void {
    const electrodomesticos: Electrodomestico[] = new Array(10);

    electrodomesticos[0] = new Television(500, "negro", "A", 35, 50, true);
    electrodomesticos[1] = new Lavadora(300, "blanco", "B", 25, 7);
    electrodomesticos[2] = new Electrodomestico(150, "rojo", "C", 15);
    electrodomesticos[3] = new Television(600, "azul", "B", 40, 55, true);
    electrodomesticos[4] = new Lavadora(400, "gris", "A", 30, 8);
    electrodomesticos[5] = new Electrodomestico(200, "negro", "F", 10);
    electrodomesticos[6] = new Television(700, "blanco", "A", 50, 60, false);
    electrodomesticos[7] = new Lavadora(250, "rojo", "C", 20, 5);
    electrodomesticos[8] = new Electrodomestico(180, "azul", "D", 12);
    electrodomesticos[9] = new Television(800, "gris", "E", 65, 70, true);

    let precioTotalElectrodomesticos = 0;
    let precioTotalLavadoras = 0;
    let precioTotalTelevisiones = 0;

    for (const electrodomestico of electrodomesticos) {
      if (electrodomestico instanceof Electrodomestico) {
        precioTotalElectrodomesticos += electrodomestico.precioFinal();
      }

      if (electrodomestico instanceof Lavadora) {
        precioTotalLavadoras += electrodomestico.precioFinal();
      }

      if (electrodomestico instanceof Television) {
        precioTotalTelevisiones += electrodomestico.precioFinal();
      }
    }

    console.log(
      "Precio total de Eloctrodomesticos: " + precioTotalElectrodomesticos
    );
    console.log("Precio total de Lavadoras: " + precioTotalLavadoras);
    console.log("Precio total de Televisiones: " + precioTotalTelevisiones);
  }
}

mainApp.main();
