import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { obtenerUsuariosDetalles, editarUser } from 'src/firebaseConection/firestore';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit{
  dniUser:number = 0;
  editForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
  ){
    this.editForm =this.fb.group({
      nombre: ['',[Validators.required]],
      correo: ['',[Validators.required]],
      mensaje: ['',[Validators.required]],

    });
  }
  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id');
    console.log('id', id);
    obtenerUsuariosDetalles(id !==null ? parseInt(id.substring(1)):0)
    .then((result)=>{
      console.log(result)
      this.dniUser = result[0].dni
      this.editForm.setValue({
        nombre: result[0].nombre,
        correo: result[0].correo,
        mensaje: result[0].mensaje,

      });
    }).catch(err=>{
      console.log(err)
    });
  }
  get nombre(){
    return this.editForm.get('nombre');
  }
  get apellido(){
    return this.editForm.get('correo');
  }
  get correo(){
    return this.editForm.get('mensaje');
  }
  goBack(){
    this.location.back();
  }

  updateForm(){
    console.log('editar');
    editarUser(this.editForm.value, this.dniUser)
    .then((result)=>{
      console.log(result)
      this.router.navigate(['listar'])
    }).catch(err =>{
      console.log(err)
    });
  }

}
