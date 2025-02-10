import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor() {}
  private availableLanguages = ['en', 'ar', 'fr', 'zh', 'ko', 'ja', 'el'];
  private currentLanguage = new BehaviorSubject<string>('en');
  private direction = new BehaviorSubject<'ltr' | 'rtl'>('ltr');

  setLanguage(language: string) {
    if (this.availableLanguages.includes(language)) {
      this.currentLanguage.next(language);
      this.direction.next(language === 'ar' ? 'rtl' : 'ltr');
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
  }

  getDirection(): Observable<'ltr' | 'rtl'> {
    return this.direction.asObservable();
  }

  getAvailableLanguages(): string[] {
    return this.availableLanguages;
  }
  getCurrentLanguage(): Observable<string> {
    return this.currentLanguage.asObservable();
  }
}
