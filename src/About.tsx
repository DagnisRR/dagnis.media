import { language } from './i18n/i18n';
import { theme } from './components/Theme';
import { ThemeProvider } from '@suid/material/styles';

import Footer from './components/Footer';
import Background from './components/Background';
import BasicAppBar from './components/BasicAppBar';
import BigText from './components/BigText';
import AboutContent from './components/about/AboutContent';

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <BasicAppBar />
      <Background />
      <BigText {...{ text: 'quote_2', variant: 'h2' }} />
      <AboutContent />
      <Footer />
    </ThemeProvider>
  );
}
