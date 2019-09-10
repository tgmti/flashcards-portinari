import { Component } from '@angular/core';

import { FlashcardsService } from 'src/services/flashcards.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  flashcards

  constructor(
    service: FlashcardsService
  ) {
    this.flashcards = service.getFlashcards();
  }
}
