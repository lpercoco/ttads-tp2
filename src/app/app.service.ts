import { Component, Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Partido } from './componentes/partido.model';

@Injectable()

export class AppService {
    private apiUrl = "http://localhost:3000/api/";
    data: any = {};

    constructor(private http: Http) {

    }

  getPartidosActivos() {
    let url = this.apiUrl + "matchs/active";
    return this.http.get(url)
    .map((res: Response) => res.json());
    }

  getEventosPartido(partido: Partido) {
  	let id = partido.id;
  	let url = this.apiUrl + "matchs/${id}";
  	return this.http.get(url).map((res: Response) => res.json());
  }
}
