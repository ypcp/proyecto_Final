import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* ---------import componentes------------- */
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ListarComponent } from './listar/listar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path:'',redirectTo:"/home",pathMatch:"full"},
  {path:'usuarios',component: UsuariosComponent},
  {path:'contacto',component: ContactoComponent },
  {path:'listar',component:ListarComponent },
  {path:'modificar/:id',component: ModificarComponent },
  {path:'home',component: HomeComponent },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



