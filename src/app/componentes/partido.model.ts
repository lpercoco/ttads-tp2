import { Evento } from './evento.model';

export class Partido {
    public id: string;
    public equipo1: string;
    public equipo2: string;
    public resultado: string;
    public fecha_hora_inicio: string;
    //public eventos: string[];
    public eventos: Evento[];

    constructor(_id: string, equipo1: string, equipo2: string, resultado: string, fecha_hora_inicio: string, eventos: Evento[]){
        this.id = _id;
        this.equipo1 = equipo1;
        this.equipo2 = equipo2;
        this.resultado = resultado;
        this.fecha_hora_inicio = fecha_hora_inicio;
        this.eventos = eventos;
    }
}
