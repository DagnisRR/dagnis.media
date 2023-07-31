import { language } from './i18n/i18n';
import { theme } from './components/Theme';
import { ThemeProvider } from '@suid/material/styles';
import { onMount, onCleanup } from 'solid-js';

import FooterDark from './components/FooterDark';
import BasicAppBar from './components/BasicAppBar';
import BigText from './components/BigText';
//import './components/projects/Projects.css';

export default function Projects() {
  onMount(() => {
    document.body.style.background =
      'linear-gradient(0deg, rgba(244, 67, 30, 1) 0%, rgba(244, 67, 54, 1) 60%)';
  });
  onCleanup(() => {
    document.body.style.background = '#fff';
  });
  return (
    <ThemeProvider theme={theme}>
      <BasicAppBar />
      <div style="background-color: #f44336; width: 100%; height: 10px"></div>
      <BigText {...{ text: 'coming_soon', variant: 'h1' }} />
      <FooterDark />
    </ThemeProvider>
  );
}

//TODO Create Bingo and a menu to open it from projects
