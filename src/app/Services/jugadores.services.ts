import { Injectable } from "@angular/core";
import {Jugador} from '../Models/Jugador'

@Injectable({
    providedIn:'root'
})
export class JugadorServices{
    private jugadoresService: Array<Jugador>;
    Nnombre
    NidJugador;
    Npuntos;
    constructor(){
        this.jugadoresService=new Array();
    }
    crearJugador()
    {
        let nuevojugador = new Jugador(this.Nnombre,this.Npuntos, this.NidJugador);
        this.jugadoresService.push(nuevojugador);
            
    }
 
    
}