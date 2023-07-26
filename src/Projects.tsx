import { language } from './i18n/i18n';
import { theme } from './components/Theme';
import { ThemeProvider } from '@suid/material/styles';

import FooterDark from './components/FooterDark';
import BasicAppBar from './components/BasicAppBar';
import BigText from './components/BigText';

export default function Projects() {
  return (
    <ThemeProvider theme={theme}>
      <BasicAppBar />
      <div style="background: linear-gradient(0deg, rgba(255,0,100,1) 0%, rgba(244,67,54,1) 60%); top: 60.5px; position: absolute">
        <BigText {...{ text: 'coming_soon', variant: 'h1' }} />
        <FooterDark />
      </div>
    </ThemeProvider>
  );
}

//TODO Create Bingo and a menu to open it from projects
