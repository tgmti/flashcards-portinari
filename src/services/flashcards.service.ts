import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FlashcardsService {

  private collectionName = 'flashcards';
  private collection: any;

  constructor(private db: AngularFirestore) {
    this.collection = this.db.collection(this.collectionName);
  }

  public getFlashcards() {
    return this.collection.valueChanges();
  }

  public async postFlashcard(flashcard) {
    const ret = this.db.collection(this.collectionName).add(flashcard);
    console.log(ret);
    return true;
  }
}