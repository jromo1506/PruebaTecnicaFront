import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,FormGroup, Validators} from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { SwalService } from '../../services/swal.service';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  formulario:FormGroup;
  constructor(private fb:FormBuilder,private userService:UserServiceService,private swalService:SwalService){
    this.formulario= this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });

  }


  submitForm(){
    if(this.formulario.valid){
      console.log(this.formulario.value);
      this.swalService.confirmar("Exito","Exito al confirmar");

     /*
      this.userService.addUsuario(this.formulario.value).subscribe(data=>{
          
      }, error =>{

      });

      }
      */
    }
  }
}





