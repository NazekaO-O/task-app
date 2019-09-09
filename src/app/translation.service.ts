import { Injectable } from '@angular/core';
export class TranslationSet {
  public languange: string
  public values: { [key: string]: string } = {}
}
@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public languages = ['ru', 'en', 'kz']

  public language = 'ru'

  private dictionary: { [key: string]: TranslationSet } = {
    ru: {
      languange: 'ru',
      values: {
        content: 'content_ru',
      },
    },
    en: {
      languange: 'en',
      values: {
        content: 'content_en',
      },
    },
    kz: {
      languange: 'kz',
      values: {
        content: 'content_kz',
      },
    },
  }

  constructor() {}

  translate(value: string): string {
    if (this.dictionary[this.language] != null) {
      return this.dictionary[this.language].values[value];
    }
  }
}
