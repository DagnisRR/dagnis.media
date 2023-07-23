/* @refresh reload */
import { render } from 'solid-js/web';
import App from './App';
import About from './About';
import Projects from './Projects';
import { Router, Routes, Route } from '@solidjs/router';

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Routes>
    </Router>
  ),
  document.getElementById('root')!
);
