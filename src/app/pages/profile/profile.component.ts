import { Component, OnInit } from '@angular/core';
import { Firestore, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  userData: any = { name: '', email: '' };
  userId: string = '';

  constructor(private authService: AuthService, private firestore: Firestore) {}

  async ngOnInit(){
    this.authService.getUser().subscribe(async (user) => {
      if (user){
        this.userId = user.uid;
        await this.loadUserData();
      }
    });
  }

  async loadUserData(){
    if(!this.userId){
      return;
    }

    const userRef = doc(this.firestore, 'users', this.userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()){
      this.userData = userSnap.data();
    } else{
      console.log('User data not found!');
    }
  }

  async updateProfile(){
    if (this.userId){
      const userRef = doc(this.firestore, 'users', this.userId);
      await updateDoc(userRef, this.userData);
      alert('A profil módosítása megtörtént!');
    }
  }
}
