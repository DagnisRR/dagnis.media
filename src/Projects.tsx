import { language } from './i18n/i18n';
import { theme } from './components/Theme';
import { ThemeProvider } from '@suid/material/styles';

import Footer from './components/Footer';
import Background from './components/Background';
import BasicAppBar from './components/BasicAppBar';

export default function Projects() {
  return (
    <ThemeProvider theme={theme}>
      <BasicAppBar />
      <Background />
      <Footer />
    </ThemeProvider>
  );
}

//TODO Create Bingo and way to open it from projects
