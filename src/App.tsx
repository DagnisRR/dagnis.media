import BasicAppBar from './components/BasicAppBar';
import { theme } from './components/Theme';
import { ThemeProvider } from '@suid/material/styles';
import Footer from './components/Footer';
import Background from './components/Background';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BasicAppBar />
      <Background />
      <Footer />
    </ThemeProvider>
  );
}

//TODO: Big text
