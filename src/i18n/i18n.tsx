// TODO Translations could be loaded on the server (not important for a small app)
import en from './en/translations.json';
import lv from './lv/translations.json';

import { createStore } from 'solid-js/store';
import { createSignal } from 'solid-js';

export const [currentLanguage, setCurrentLanguage] = createSignal(1);

const languages = [en, lv];
const languageTemplate = {
  hello_world: '',
  source_code: '',
  about: '',
  projects: '',
  email: '',
  colophon: '',
  navigation: '',
  contact_us: '',
  message: '',
  send: '',
  quote_1: '',
  quote_2: '',
  about_summary: '',
  about_text1: '',
  coming_soon: '',
};

export const [language, setLanguage] = createStore(languageTemplate);

//INFO language[0] = en, language[1] = lv
if (document.cookie == '') {
  setLanguage(languages[1]);
  document.cookie = 'language=1';
} else {
  setLanguage(
    languages[Number(document.cookie.charAt(document.cookie.length - 1))]
  );
}

export const changeLanguage = (language: number) => {
  setLanguage(languages[language]);
  document.cookie = `language=${language.toString()}`;
};
