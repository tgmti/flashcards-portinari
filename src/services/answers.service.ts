import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { AnswerModel } from 'src/models/answer.model';
import { QuestionModel } from 'src/models/question.model';
import { QuestionsService } from './questions.service';

import { initQuestions } from 'src/assets/initquestions';
import { tap } from 'rxjs/operators';

@Injectable()
export class AnswersService {

  private readonly collectionName = 'answers';

  constructor(
    private db: AngularFirestore,
    private questionsService: QuestionsService,
  ) {
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
    return this.questionsService.getQuestions().pipe(
      tap(quests => console.log(quests))
    ) // this.collection(ref => ref.limit(10)).valueChanges();
  }

  public loadQuestions() {
    initQuestions.forEach(question => this.questionsService.saveQuestion(question) );
  }
}