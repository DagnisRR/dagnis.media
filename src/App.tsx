import Button from '@suid/material/Button';
import BasicAppBar from './components/BasicAppBar';
import { theme } from './components/Theme';
import { ThemeProvider } from '@suid/material/styles';
import { language } from './i18n/i18n';
import Background from './components/Background';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BasicAppBar />
      <Background />
      <Button
        onClick={() => {
          //animation();
        }}
        variant="contained"
      >
        {language.hello_world}
      </Button>
    </ThemeProvider>
  );
}
