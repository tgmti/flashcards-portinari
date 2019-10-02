import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { QuestionsService } from 'src/services/questions.service';

@Component({
  selector: 'app-questions-list',
  template: `
  <ion-list>
    <ion-list-header>
      <ion-label>Questions</ion-label>
    </ion-list-header>
    <ion-item *ngFor="let question of questions | async ">
      <ion-label>{{ question.title }}</ion-label>
    </ion-item>
  </ion-list>  
  `,
})
export class QuestionsListPage {

  questions: Observable<any[]>;

  constructor(
    service: QuestionsService
  ) {
    this.questions = service.getQuestions().pipe( tap( x => console.log(x) ) );
  }
}
