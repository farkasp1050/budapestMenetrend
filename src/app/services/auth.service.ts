import { Injectable } from '@angular/core';
import { Auth, User, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs'; 
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user = new BehaviorSubject<User | null>(null);
  constructor(private auth: Auth, private firestore: Firestore) {
    onAuthStateChanged(this.auth, (user) => {
      this.user.next(user);
    });
  }

  getUser(){
    return this.user.asObservable();
  }

  logOut(){
    return signOut(this.auth);
  }

  signUp(name: string, email: string, password: string){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  signIn(email: string, password: string){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async addUserData(user: { uid: string, name: string, email: string, password: string }){
    const userRef = collection(this.firestore, 'users');
    await addDoc(userRef, user);
  }
}
