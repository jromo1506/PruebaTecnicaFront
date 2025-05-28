import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  formulario:FormGroup;
  constructor(private fb:FormBuilder){
    this.formulario= this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });

  }


  submitForm(){
    if(this.formulario.valid){
      console.log(this.formulario.value);
    }
  }



}

