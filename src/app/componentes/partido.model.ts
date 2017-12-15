import { Evento } from './evento.model';

export class Partido {
    public id: string;
    public localTeam: string;
    public visitorTeam: string;
    public beginOfMatch: string;
    public eventos: Evento[];

    constructor(_id: string, localTeam: string, visitorTeam: string, beginOfMatch: string, eventos: Evento[]){
        this.id = _id;
        this.localTeam = localTeam;
        this.visitorTeam = visitorTeam;
        this.beginOfMatch = beginOfMatch;
        this.eventos = eventos;
    }
}
