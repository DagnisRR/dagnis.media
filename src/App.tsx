import { theme } from './components/Theme';
import { ThemeProvider } from '@suid/material/styles';

import Footer from './components/Footer';
import Background from './components/Background';
import BasicAppBar from './components/BasicAppBar';
import AppContent from './components/app/AppContent';
import BigText from './components/BigText';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BasicAppBar />
      <Background />
      <BigText {...{ text: 'quote_1', variant: 'h1' }} />
      <AppContent />
      <Footer />
    </ThemeProvider>
  );
}
