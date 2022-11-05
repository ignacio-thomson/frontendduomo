import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/Servicio/persona.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  lista: any[] = [];
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.listarPersonas();
  }

  listarPersonas(){
    this.personaService.getPersonas().subscribe(
      res=>{this.lista = res;
      console.log(res)},
      err=>console.log(err)
    )
  }

  eliminar(id: String){
    this.personaService.deletePersona(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    );

  }

}
