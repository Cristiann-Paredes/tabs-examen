import { Component } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  texto: string | undefined;
  mensaje: string | undefined;

  constructor() {}

  // Método para guardar el texto en un archivo
  async guardarTexto() {
    try {
      if (this.texto) {
        await Filesystem.writeFile({
          path: 'textoGuardado.txt',
          data: this.texto,
          directory: Directory.Documents,
          encoding: Encoding.UTF8,
        });
        this.mensaje = 'Texto guardado exitosamente en textoGuardado.txt';
      } else {
        this.mensaje = 'Por favor, introduce algún texto antes de guardar.';
      }
    } catch (e) {
      this.mensaje = 'Error al guardar el archivo: ' + e;
    }
  }
}
