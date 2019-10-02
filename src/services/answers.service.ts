import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AnswerModel } from 'src/models/answer.model';

@Injectable()
export class AnswersService {

  private readonly collectionName = 'answers';

  constructor(private db: AngularFirestore) {
  }

  private collection(query?): AngularFirestoreCollection {
    return this.db.collection<AnswerModel>(this.collectionName, query);
  }

  public getQuestionAnswers(questionId) {
    return this.collection().valueChanges();
  }

  public getQuestion(id) {
    return this.db.doc(id).get();
  }

  public saveQuestion(question) {
    let { questionId } = question
 
    if (questionId) {
      return this.db.doc(questionId).set(question);
    } else {
      questionId = this.db.createId()
      return this.collection().add({questionId, ...question});
    }
  }

  public selectQuestionToAnswer() {
    return this.collection(ref => ref.limit(10)).valueChanges();
  }
}