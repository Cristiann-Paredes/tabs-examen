import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page {
  a: number | undefined;
  b: number | undefined;
  c: number | undefined;
  resultado: string | undefined;

  calcularRaices() {
    // Validación: comprobar que los valores no sean undefined
    if (this.a === undefined || this.b === undefined || this.c === undefined) {
      this.resultado = 'Por favor, introduce valores válidos para a, b, y c.';
      return;
    }

    const discriminante = this.b * this.b - 4 * this.a * this.c;

    if (discriminante > 0) {
      const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
      const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
      this.resultado = `Raíces reales: x1 = ${raiz1}, x2 = ${raiz2}`;
    } else if (discriminante === 0) {
      const raiz = -this.b / (2 * this.a);
      this.resultado = `Raíz doble: x = ${raiz}`;
    } else {
      this.resultado = `No tiene raíces reales.`;
    }
  }
}
