import { languageType } from '@/store/selectedLanguageSlice';

type TypeLanguage = {
  id: number;
  language: languageType;
};

export const languages: TypeLanguage[] = [
  { id: 1, language: 'english' },
  { id: 2, language: 'ukrainian' },
  { id: 3, language: 'russian' },
];
