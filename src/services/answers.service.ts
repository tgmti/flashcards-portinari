import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AnswerModel } from 'src/models/answer.model';
import { QuestionModel } from 'src/models/question.model';

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

  public async saveAnswer(questionId, selectedAnswer) {
 
    this.db.doc<QuestionModel>(questionId).get()
    .subscribe(question => {
      const { answers } = question.data();
      const correctAnswer = answers.find(answer =>  answer.correctAnswer);
      const selectedCorrectAnswer = correctAnswer.answerId == selectedAnswer.answerId
      
      return this.collection().add({questionId, selectedCorrectAnswer});
    });
  
  }

  public selectQuestionToAnswer() {
    return this.collection(ref => ref.limit(10)).valueChanges();
  }
}