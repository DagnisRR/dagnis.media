// Not the best way to do translations

import en from './en/translations.json';
import lv from './lv/translations.json';

import { createStore } from 'solid-js/store';
import { createSignal } from 'solid-js';

export const [currentLanguage, setCurrentLanguage] = createSignal(0);

const languages = [en, lv];
const languageTemplate = {
  hello_world: '',
  source_code: '',
  about: '',
  projects: '',
};

export const [language, setLanguage] = createStore(languageTemplate);

if ((document.cookie = '')) {
  setLanguage(languages[0]);
  document.cookie = 'language=0';
} else {
  setLanguage(
    languages[Number(document.cookie.charAt(document.cookie.length - 1))]
  );
}

export const changeLanguage = (language: number) => {
  setLanguage(languages[language]);
  document.cookie = `language=${language.toString()}`;
};
