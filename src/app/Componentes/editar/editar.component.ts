import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona, PersonaService } from 'src/app/Servicio/persona.service';

declare function RellenarLista():any;

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id : String = "";
  
  personaActual : Persona = {
    id: '',
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    telefono: '',
    region: '',
    comuna: ''
  }

  constructor(private personaService: PersonaService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.personaService.getPersona(this.id).subscribe(
      res=>{this.personaActual = res;},
      err=>console.log(err)
    )
    RellenarLista();
  }

  guardar(){
    this.personaService.editarPersona(this.id, this.personaActual).subscribe(
      res=>{this.router.navigate(['/inicio'])},
      err=>console.log(err)
    )
  }

}
