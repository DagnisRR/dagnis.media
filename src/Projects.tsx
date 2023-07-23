import BasicAppBar from './components/BasicAppBar';
import { theme } from './components/Theme';
import { ThemeProvider } from '@suid/material/styles';
import Footer from './components/Footer';
import Background from './components/Background';
import { Container, Box } from '@suid/material';

export default function Projects() {
  return (
    <ThemeProvider theme={theme}>
      {/* 
      <BasicAppBar />
      <Container>
        <Box></Box>
      </Container>
  */}
      <Footer />
    </ThemeProvider>
  );
}

//TODO: Create Bingo and way to open it from projects
