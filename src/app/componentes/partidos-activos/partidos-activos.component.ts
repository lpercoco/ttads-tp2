import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Partido } from '../partido.model';
import { AppService } from '../../app.service';
import { Observable } from 'rxjs/Observable';

@Component ({
    selector: 'partidos-activos',
    templateUrl: './partidos-activos.component.html',
    styleUrls: ['./partidos-activos.component.css'],
    providers: [AppService]
})

export class PartidosActivosComponent implements OnInit {
    //private matchs : Partido[];
    partidoElegido: Partido;
    result: any;

    constructor(private service: AppService) {

    }

    ngOnInit() {
        this.service.getPartidosActivos().subscribe(data => this.result = data)
    }

   seleccionarPartido(match) {
        this.partidoElegido = match;
    }
}
