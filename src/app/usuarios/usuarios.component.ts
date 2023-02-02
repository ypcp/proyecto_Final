import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  arrayList:any=[];
  constructor( private configservice:ConfigService){}
  ngOnInit(): void {
    this.configservice.listUser().subscribe((result:any)=>{
      this.arrayList = result;
    })
  }

}
