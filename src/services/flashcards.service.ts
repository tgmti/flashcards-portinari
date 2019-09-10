import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FlashcardsService {

  private collectionName = 'flashcards';
  private collection: any;

  constructor(private db: AngularFirestore) {
    this.collection = db.collection(this.collectionName);
  }

  public getFlashcards() {
    return this.collection.valueChanges();
  }
}