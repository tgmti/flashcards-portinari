import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AnswersService } from 'src/services/answers.service';
import { QuestionModel } from 'src/models/question.model';

@Component({
  selector: 'app-answers',
  templateUrl: 'answers.page.html',
  styleUrls: ['answers.page.scss'],
})
export class AnswersPage {

  questions$: Observable<any>;

  constructor(
    private service: AnswersService
  ) {
    this.questions$ = this.service.selectQuestionToAnswer();
  }

  loadQuestions() {
    this.service.loadQuestions();
  }
}
