import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { FlashcardsService } from 'src/services/flashcards.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  flashcards: Observable<any[]>;

  constructor(
    service: FlashcardsService
  ) {
    this.flashcards = service.getFlashcards();
  }
}
