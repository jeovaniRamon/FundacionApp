
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpHeaders} from '@angular/common/http';
import { Router }     from '@angular/router';
import { Jsonp } from "@angular/http";


@Injectable({
  providedIn: "root"
})
export class UsersService {

  access_token ;
  accesstoken = null;
  constructor(private http: HttpClient,private router:Router) {}

  login(user) {
    let headers = new HttpHeaders().set('Content-Type','application/json').set('X-Request-With','XMLHttpRequest').set("Access-Control-Allow-Origin", "*");
    return this.http.post("http://tecno-monster.com/paginas/public/api/auth/login", user,{headers : headers}).subscribe((resp: any) => {

   console.log(resp);
   localStorage.setItem('access_token', resp.access_token);
    console.log(localStorage.getItem('access_token'));
   this.accesstoken = localStorage.getItem('access_token');
    if(this.accesstoken !== null){
      this.router.navigate(['user-profile']);
    }
    /*var usuario =JSON.parse(user);
     if(usuario.name == "jeovani"){
       console.log('prueba');
      this.router.navigate(['user-profile']); 
     }*/
 
    });
  }

  estatus(){
    return this.accesstoken;
  }

  info(condicion){
    let headers = new HttpHeaders().set('Content-Type','application/json').set('X-Request-With','XMLHttpRequest').set("Authorization",'Bearer '+ localStorage.getItem('access_token'));
    return this.http.post("http://localhost/fundacionVida/public/api/auth/info", condicion,{headers : headers}).subscribe((resp:any) =>{
      console.log(resp);
    });
  }

  logout(){
    let headers = new HttpHeaders().set('Content-Type','application/json').set('X-Request-With','XMLHttpRequest').set("Authorization",'Bearer '+ this.accesstoken);
    return this.http.get("http://localhost/fundacionVida/public/api/auth/logout",{headers : headers}).subscribe((resp:any) =>{
      console.log(resp);
     this.accesstoken = null;
    });
  }
}