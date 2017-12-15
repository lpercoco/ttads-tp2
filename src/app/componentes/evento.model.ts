export class Evento {
	public id: string;
    public eventType: string;
    public player: string;
    public team: string;
    public time: number;

    constructor(_id: string, eventType: string, team: string,  time: number, player: string){
    	this.id = _id;
    	this.eventType = eventType;
    	this.team = team;
    	this.time = time;
    	this.player = player;
    }
}