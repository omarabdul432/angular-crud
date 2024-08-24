import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"angular-firebase-crud-c54f7","appId":"1:800189337557:web:cd4af919d4c6dcac4bb75c","storageBucket":"angular-firebase-crud-c54f7.appspot.com","apiKey":"AIzaSyAW15bUuniycl4n56JOPlNIVH7funt3LLU","authDomain":"angular-firebase-crud-c54f7.firebaseapp.com","messagingSenderId":"800189337557"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
