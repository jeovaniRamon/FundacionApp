import { Component, OnInit } from '@angular/core';
import { UsersService } from "../usuarios/users.service";
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    constructor(public userService: UsersService) { }
    condicion = String;
    ngOnInit() {
        this.userService.info(this.condicion);

    }

}
