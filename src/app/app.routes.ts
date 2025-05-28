import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DebugComponent } from './components/debug/debug.component';

export const routes: Routes = [
    {path:"Inicio",component:InicioComponent},
    {path:"Seccion1",component:DebugComponent},
    {path:"",redirectTo:"Inicio",pathMatch:"full"}

];
