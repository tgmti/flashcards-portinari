import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { FlashcardsService } from 'src/services/flashcards.service';

@Component({
  selector: 'app-answers',
  templateUrl: 'answers.page.html',
  styleUrls: ['answers.page.scss'],
})
export class AnswersPage {

  flashcards: Observable<any[]>;

  constructor(
    service: FlashcardsService
  ) {
    this.flashcards = service.getFlashcards();
  }
}
