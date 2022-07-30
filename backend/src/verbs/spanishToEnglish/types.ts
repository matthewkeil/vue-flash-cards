export interface SpanishToEnglishExample {
  sp: string;
  en: string[];
}

export interface SpanishToEnglishTranslation extends SpanishToEnglishExample {
  related?: string[];
  phrases?: SpanishToEnglishExample[];
}
