import anime from 'animejs/lib/anime.es.js';
import Button from '@suid/material/Button/Button';
import { language } from './i18n/i18n';
import { onMount, onCleanup } from 'solid-js';

export default function About() {
  let target;
  let animation;
  onMount(() => {
    animation = anime({
      targets: target,
      translateX: 250,
      backgroundColor: '#000',
      duration: 8000,
      autoplay: true,
      easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)',
    });
  });

  return (
    <>
      <div
        ref={target}
        style="width:500px; height:500px; background-color:red"
      ></div>
      <Button
        onClick={() => {
          animation.play();
        }}
        variant="contained"
      >
        {language.hello_world}
      </Button>
    </>
  );
}

//TODO: Coming soon big text with background
