import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { QuestionModel } from 'src/models/question.model';

@Injectable()
export class QuestionsService {

  private readonly collectionName = 'questions';

  constructor(private db: AngularFirestore) {
  }

  private collection(query?): AngularFirestoreCollection {
    return this.db.collection<QuestionModel>(this.collectionName, query);
  }

  public getQuestions() {
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