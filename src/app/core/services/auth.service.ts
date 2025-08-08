import { Injectable } from "@angular/core";
import { Auth } from '@angular/fire/auth';
import { authState } from "@angular/fire/auth";
import { GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut } from "@angular/fire/auth";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    
    user$: Observable<any>;

    private adminEmail = 'jonathanbikuta05@gmail.com'

    constructor(private auth: Auth) {
        this.user$ = authState(this.auth)
    }

    async signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(this.auth, provider)
    }

    async signOut() {
        return firebaseSignOut(this.auth);
    }

    isAdmin$(){
        this.user$ = this.user$.pipe(map(u => !!u && u.email === this.adminEmail));
    }

    getUid(){
        return this.auth.currentUser?.uid ?? null
    }
}