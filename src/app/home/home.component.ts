import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
    ayudar: boolean;

    focus;
    focus1;
    constructor() { }
    mostrarTexto(){
       this.ayudar = !this.ayudar;
       console.log(this.ayudar);
    }

    ngOnInit() {
        
    }
}
