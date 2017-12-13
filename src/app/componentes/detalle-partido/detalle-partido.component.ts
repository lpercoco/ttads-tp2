import { Component, Input, OnInit } from '@angular/core';
import { Partido } from '../partido.model';
import { AppService } from '../../app.service';

@Component({
  selector: 'detalle-partido',
  templateUrl: './detalle-partido.component.html',
  styleUrls: ['./detalle-partido.component.css'],
  providers: [AppService]
})
export class DetallePartidoComponent implements OnInit {

  private eventos = [];
	@Input() partidoActivo: Partido;
	private hola: string;

	constructor(private service: AppService){

	}

  ngOnInit() {
  }

}
