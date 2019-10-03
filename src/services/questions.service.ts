import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { QuestionModel, QuestionModelId } from 'src/models/question.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionsService {

  private readonly collectionName = 'questions';

  constructor(private db: AngularFirestore) {
  }

  private collection(query?): AngularFirestoreCollection {
    return this.db.collection<QuestionModel>(this.collectionName, query);
  }

  public getQuestions(): Observable<QuestionModelId[]> {
    return this.collection().snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as QuestionModel;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  public getQuestion(id) {
    return this.db.doc(id).get();
  }

  public saveQuestion(question) {
    const { questionId } = question;
    const questionData: QuestionModel = question;
 
    if (questionId) {
      return this.db.doc(questionId).set(questionData);
    } else {
      return this.collection().add(questionData).then(val => console.log(val));
    }
  }

}