import { Injectable } from '@angular/core';

@Injectable()
export class FlashcardsService {

  constructor() {

  }

  public getFlashcards() {
    return [
      {title: "teste"},
      {title: "teste2"},
      {title: "teste3"},
    ];
  }
}