import { theme } from './components/Theme';
import { ThemeProvider } from '@suid/material/styles';
import Footer from './components/Footer';
import Background from './components/Background';
import BasicAppBar from './components/BasicAppBar';
import BigText from './components/BigText';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BasicAppBar />
      <BigText />
      <Background />

      <Footer />
    </ThemeProvider>
  );
}

//TODO: Big text
