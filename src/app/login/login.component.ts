import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UsersService } from "../usuarios/users.service";
import { mainModule } from 'process';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  usuario : String;
  password : String;
  email = "correito@gmail.com";
  constructor(public userService: UsersService
    ) { }


    login() {
      
      console.log(this.usuario);
      console.log(this.password);
      console.log(this.email);
      const user = {name: this.usuario, email:this.email, password: this.password};
      let json = JSON.stringify(user);
      let params = "json="+json;
      this.userService.login(json);
    }

    logout(){
     
      this.userService.logout();
    }
   /* login(){
.subscribe( data => {
       
        console.log(data);
      })
      if(user.name = "admin"){
          this.router.navigate(['landing']);
        }
      console.log(this.usuario);
      console.log(this.password);
      /*
      let json = JSON.stringify();
      let params = "json="+json;
      let headers = new HttpHeaders().set('Content-Type','application/json');
       
      return this.http.post(this.url+'productos', params, {headers: headers});
  }
*/
  ngOnInit() {
  }

}
