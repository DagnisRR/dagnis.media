import { Typography } from '@suid/material';
import { grey } from '@suid/material/colors';
import './Theme.css';
import { language } from '../i18n/i18n';
import { For, onMount, onCleanup } from 'solid-js';
import anime from 'animejs/lib/anime.es.js';

//TODO Clean this up, maybe in a class and with OOP?

function getTop(el) {
  return el.offsetTop + (el.offsetParent && getTop(el.offsetParent));
}

function getLeft(el) {
  return el.offsetLeft + (el.offsetParent && getLeft(el.offsetParent));
}

function getX(el) {
  return getLeft(el) + el.offsetWidth / 2;
}

function getY(el) {
  return getTop(el) + el.offsetHeight / 2;
}

export default function BigText() {
  onMount(() => {
    let cleanup = false;
    function randomPositionLoop() {
      if (cleanup) {
        return;
      }
      anime({
        targets: '.char',
        translateX: function () {
          return anime.random(-5, 5);
        },
        translateY: function () {
          return anime.random(-5, 5);
        },
        rotate: function () {
          return anime.random(-10, 10);
        },
        duration: 2000,
        easing: 'linear',
        complete: randomPositionLoop,
      });
    }
    randomPositionLoop();
    onCleanup(() => {
      cleanup = true;
    });
  });
  //CHANGE Calculate vectors
  //function track(mouse) {
  //  anime({
  //    targets: '.char',
  //    translateX: function (char) {
  //      let offsetX = mouse.pageX - getX(char);
  //      offsetX = 0 ? 1 : offsetX;
  //      return 100 / -offsetX;
  //    },
  //    translateY: function (char) {
  //      let offsetY = mouse.pageY - getY(char);
  //      offsetY = 0 ? 1 : offsetY;
  //      return 100 / -offsetY;
  //    },
  //    duration: 1000,
  //    autoplay: true,
  //    loop: false,
  //  });
  //}
  //addEventListener('mousemove', track, false);
  return (
    <div style="position: absolute; width: 100%; height: 100%">
      <Typography
        variant="h1"
        class="disable-select"
        sx={{ color: grey[900], marginTop: '15%' }}
      >
        <div style="padding-left: 0.5em; padding-right: 0.5em; position: relative; width: calc(100% - 1em); display: flex; justify-content: flex-start; flex-wrap: wrap">
          <For each={language.quote_1.split('')}>
            {(char, i) => <div class="char">{char}</div>}
          </For>
        </div>
      </Typography>
    </div>
  );
}
