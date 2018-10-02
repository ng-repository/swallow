import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SwallowService {

    items: Observable<any[]>;

    constructor(
        public auth: AngularFireAuth,
        public db: AngularFirestore
    ) {
        try {
            this.items = db.collection('items').valueChanges();
        } catch (e) {
            console.log(e.message);
        }
    }



}
