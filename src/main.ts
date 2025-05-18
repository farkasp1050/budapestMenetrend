import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({
    apiKey: "AIzaSyBuirgbD4gavtVakJZ-Yyro9rN2QHwz39A",
    authDomain: "budapestimenetrendapp-adee0.firebaseapp.com",
    projectId: "budapestimenetrendapp-adee0",
    storageBucket: "budapestimenetrendapp-adee0.firebasestorage.app",
    messagingSenderId: "637420216803",
    appId: "1:637420216803:web:e9a888e7ac1c365d5f80d6"
    })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
});
