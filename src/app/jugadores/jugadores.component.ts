import { Component, OnInit } from '@angular/core';
import {Jugador} from '/home/vagrant/web-tennis/src/app/Models/Jugador'
import {JugadorServices} from '../Services/jugadores.services'

@Component({
    selector: 'app-jugadores',
    templateUrl: './jugadores.component.html',
    styleUrls: ['./jugadores.component.css']
  })

export class JugadoresComponent implements OnInit {
    jugadores: Array<Jugador>;
    constructor(private jugadorService:JugadorServices)
    {
        this.jugadores=new Array();
    }

    ngOnInit(){
        this.jugadores = this.jugadorService.crearJugador();
    }
    title = 'Jugadores-web';
  }
