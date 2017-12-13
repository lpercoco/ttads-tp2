export class Evento {
	public id: string;
    public clase_evento: string;
    public jugador: string;
    public equipo: string;
    public hora_evento: number;

    constructor(_id: string, clase_evento: string, equipo: string,  hora_evento: number, jugador: string){
    	this.id = _id;
    	this.clase_evento = clase_evento;
    	this.equipo = equipo;
    	this.hora_evento = hora_evento;
    	this.jugador = jugador;
    }
}