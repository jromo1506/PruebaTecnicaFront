import { Component } from '@angular/core';
import { FormularioComponent } from '../../components/formulario/formulario.component';


import { trigger,transition,style,animate } from '@angular/animations';
@Component({
  selector: 'app-inicio',
  imports: [FormularioComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
  animations:[
    trigger('slideInUp',[
      transition(':enter',[
        style({opacity:0,transform:'translateY(-10px)'}),
        animate('500ms ease-out',style({opacity:1,transform:'translateY(0'}))
      ])
    ])
  ]
})
export class InicioComponent {

}
