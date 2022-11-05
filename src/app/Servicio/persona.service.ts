import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url='http://localhost:8080/api/personas';
  constructor(private http: HttpClient) { }

  getPersonas():Observable<any>{
    return this.http.get(this.url);
  }

  getPersona(id: String):Observable<any>{
    return this.http.get(this.url + '/' + id);
  }

  savePersona(persona: Persona):Observable<any>{
    return this.http.post(this.url, persona);
  }

  editarPersona(id: String, persona: Persona):Observable<any>{
    return this.http.put(this.url + '/' + id, persona);
  }

  deletePersona(id: String):Observable<any>{
    return this.http.delete(this.url + '/' + id)
  }
}

export interface Persona {
  id: string;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  telefono: string;
  region: string;
  comuna: string;
}
