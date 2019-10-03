import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AnswersService } from 'src/services/answers.service';
import { QuestionModel, QuestionModelId } from 'src/models/question.model';

@Component({
  selector: 'app-answers',
  templateUrl: 'answers.page.html',
  styleUrls: ['answers.page.scss'],
})
export class AnswersPage {

  questions: QuestionModelId[];

  constructor(
    private service: AnswersService
  ) {
    this.service.selectQuestionToAnswer().subscribe(questions => this.questions = questions);
  }

  formatOptions(options) {
    console.log(options);
    return options.map(opt => ({ label: opt.description, value: opt.answerId }));
  }

  loadQuestions() {
    this.service.loadQuestions();
  }
}
