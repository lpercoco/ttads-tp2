export class Evento {
	public id: string;
    public eventType: string;
    public player: string;
    public team: string;
    public time: number;

    constructor(_id: string, clase_evento: string, equipo: string,  hora_evento: number, jugador: string){
    	this.id = _id;
    	this.eventType = clase_evento;
    	this.team = equipo;
    	this.time = hora_evento;
    	this.player = jugador;
    }
}