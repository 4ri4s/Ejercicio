export class Jugador{
    _nombre : string;
    _idJugador : number;
    _puntos : number;
    constructor(nombre:string,idJugador:number,puntos:number){
        this._nombre=nombre;
        this._idJugador=idJugador;
        this._puntos=puntos;
    }
    get nombre(){
        return this._nombre;
    }
    get idJugador(){
        return this._idJugador;
    }
    get puntos(){
        return this._puntos;
    }
    set nombre(nombre:string){
        this._nombre = nombre;
    }
    set idJugador(idJugador:number){
        this._idJugador = idJugador;
    }
    set puntos(puntos:number){
        this._puntos = puntos;
    }
}