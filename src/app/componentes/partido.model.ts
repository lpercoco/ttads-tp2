import { Evento } from './evento.model';

export class Partido {
    public id: string;
    public localTeam: string;
    public visitorTeam: string;
    public beginOfMatch: string;
    public eventos: Evento[];

    constructor(_id: string, equipo1: string, equipo2: string, resultado: string, fecha_hora_inicio: string, eventos: Evento[]){
        this.id = _id;
        this.localTeam = equipo1;
        this.visitorTeam = equipo2;
        this.beginOfMatch = fecha_hora_inicio;
        this.eventos = eventos;
    }
}
