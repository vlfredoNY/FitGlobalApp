import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonItem, IonCard, IonCardContent, IonLabel, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonHeader, IonCardHeader, IonCardTitle, IonItem, IonCard, IonCardContent, IonLabel, IonButton]
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Aquí puedes implementar la lógica de autenticación
    console.log('Correo:', this.email);
    console.log('Contraseña:', this.password);

    // Lógica de autenticación pendiente
  }

  goToRegister() {
    // Navegar a la página de registro
    this.router.navigate(['/register']);
  }
}

