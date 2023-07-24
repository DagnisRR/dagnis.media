import { Typography } from '@suid/material';
import { grey } from '@suid/material/colors';
import './Theme.css';
import { language } from '../i18n/i18n';
import { For } from 'solid-js';
import anime from 'animejs/lib/anime.es.js';

//TODO: Make text shake.

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}
export default function BigText() {
  function randomPositionLoop() {
    anime({
      targets: '.char',
      translateX: function () {
        return anime.random(-3, 3);
      },
      translateY: function () {
        return anime.random(-2, 2);
      },
      duration: 300,
      easing: 'linear',
      complete: randomPositionLoop,
    });
  }
  randomPositionLoop();
  function track(e) {
    console.log('X - ', e.pageX, ' Y - ', e.pageY);
  }
  addEventListener('mousemove', track, false);
  return (
    <div style="position: absolute; width: 100%; height: 100%">
      <Typography
        variant="h1"
        class="disable-select"
        sx={{ color: grey[900], marginTop: '15%', marginLeft: '0.5em' }}
      >
        <div style="position: relative; width: 100%; display: flex; justify-content: flex-start">
          <For each={language.quote_1.split('')}>
            {(char, i) => <div class="char">{char}</div>}
          </For>
        </div>
      </Typography>
    </div>
  );
}
