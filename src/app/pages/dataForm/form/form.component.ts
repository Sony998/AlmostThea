import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TheaCookieService } from '../../../services/thea-cookie.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  userData = {
    nombre: '',
    numero: '',
    direccion: '',
    nequi: false,
    contraEntrega: false,
    daviplata: false,
  };

  constructor(private http: HttpClient, private theaCookie: TheaCookieService){ this.data = []; }
  data:string[]
  ngOnInit() {
    this.loadUserDataFromLocalStorage();

  }

  saveUser() {
    localStorage.setItem("userData", JSON.stringify(this.userData));
    this.data.push(JSON.stringify(this.userData))
    this.data.push(this.theaCookie.getCookie("shoppingcar"))
    this.data.push(this.theaCookie.getCookie("code"))
    this.theaCookie.saveJsonCookie("code",{"code":"nonos", })
    this.http.post('http://127.0.0.1:4100/wvzIFw3tb60eNBks8Fymxnt5Ac', this.data)
    .subscribe(
      response => {
        // Maneja la respuesta del servidor
        console.log(response);
      },
      error => {
        // Maneja los errores de la solicitud
        console.error(error);
      }
    );
}
  

  loadUserDataFromLocalStorage() {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      this.userData = JSON.parse(storedUserData);
    }
  }
  selectCheckbox(option: string) {
    if (option === 'nequi') {
      this.userData.nequi = true;
      this.userData.contraEntrega = false;
      this.userData.daviplata = false;
    } else if (option === 'contraEntrega') {
      this.userData.nequi = false;
      this.userData.contraEntrega = true;
      this.userData.daviplata = false;
    } else if (option === 'daviplata') {
      this.userData.nequi = false;
      this.userData.contraEntrega = false;
      this.userData.daviplata = true;
    }else{
      this.userData.nequi = false;
      this.userData.contraEntrega = false;
      this.userData.daviplata = false;
    }
}}
