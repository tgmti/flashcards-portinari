import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { QuestionsService } from 'src/services/questions.service';
import { QuestionModel } from 'src/models/question.model';

@Component({
  selector: 'app-answers',
  templateUrl: 'answers.page.html',
  styleUrls: ['answers.page.scss'],
})
export class AnswersPage {

  questions: Observable<QuestionModel[]>;

  constructor(
    service: QuestionsService
  ) {
    this.questions = service.selectQuestionToAnswer();
  }
}
