import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonItem, IonCard, IonCardContent, IonLabel, IonButton } from '@ionic/angular/standalone';
import { Router, Routes } from '@angular/router';
// import { LoginPage } from '../login/login.page';

// const routes: Routes = [
//   { path: 'login', component: LoginPage },
//   // Otras rutas aquí
// ];

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonHeader, IonCardHeader, IonCardTitle, IonItem, IonCard, IonCardContent, IonLabel, IonButton, ],
})

export class RegisterPage  {

  email: string = '';
  password: string = '';
  password2: string = '';

  constructor(private router: Router) {}

  register() {
    // Aquí puedes implementar la lógica de autenticación
    console.log('Correo:', this.email);
    console.log('Contraseña:', this.password);
    console.log('Contraseña:', this.password2);

    // Lógica de autenticación pendiente
  }

  goToLogin() {
    if (this.router.url !== '/login') {
      this.router.navigate(['/login']);
    }
  }
}

