import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private router: Router) {}
  
  // Dati fittizi utente (temporanei)
  user = {
    username: 'Francesco Rossi',
    bio: 'Frontend Developer | Angular Enthusiast 🚀',
    email: 'francesco.rossi@example.com',
    location: 'Latina, Italia',
    avatarUrl: 'https://i.pravatar.cc/300' // avatar fittizio
  };
  

  // Implementeremo le funzioni dopo
  editProfile() {
    console.log('Funzione editProfile cliccata!');
  }

  logout() {
    localStorage.removeItem('token'); // Rimuovi il token di autenticazione
    this.router.navigate(['/login']); // Reindirizza alla pagina di login
  }
}