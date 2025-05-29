import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }


  exito(titulo:string,texto:string){
    Swal.fire({
      icon: 'success',
      title:titulo,
      text:texto,
      confirmButtonText: 'Aceptar'
    });
  }

  error(titulo:string,texto:string){
    Swal.fire({
      icon: 'error',
      title:titulo,
      text:texto,
      confirmButtonText: 'Aceptar'
    });
  }

  informacion(titulo:string,texto:string){
    Swal.fire({
      icon: 'info',
      title:titulo,
      text:texto,
      confirmButtonText: 'Aceptar'
    });
  }

  advertencia(titulo:string,texto:string){
    Swal.fire({
      icon: 'warning',
      title:titulo,
      text:texto,
      confirmButtonText: 'Aceptar'
    });
  }

  confirmar(titulo:string,texto:string):Promise<boolean>{
    return Swal.fire({
      title:titulo,
      text:texto,
      icon: 'question',
      showCancelButton: false,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar"
    }).then(result => result.isConfirmed);
  }
}
