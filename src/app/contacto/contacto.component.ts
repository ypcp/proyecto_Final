import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { crearUser } from 'src/firebaseConection/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  validacion: string ='';
  public userForm: FormGroup;
  constructor(public fb: FormBuilder, 
              private router: Router,
              private toastr: ToastrService){
      this.userForm = this.fb.group({
        dni: [0,[Validators.required]],
        nombre: ['',[Validators.required]],
        correo: ['',[Validators.required, Validators.email]],
        mensaje: ['',[Validators.required]],
      })
  }
  ngOnInit(){
    
  }
  get dni(){
    return this.userForm.get('dni') as FormGroup;
  }
  get nombre(){
    return this.userForm.get('nombre')as FormGroup;
  }
  get correo(){
    return this.userForm.get('correo')as FormGroup;
  }
  get mensaje(){
    return this.userForm.get('mensaje')as FormGroup;
  }
  ResetForm(){
    this.userForm.reset();
  }
  submitContactData(){

    crearUser(this.userForm.value).then((result)=>{
      console.log(result)
      this.toastr.success('Registrado', 'Usuario!');
      this.validacion = 'Gracias por Contactarnos';
      
      
      /* this.router.navigate(['listar']) */;
    }).catch(err => {
      console.log(err)
    });
    
  }
}
