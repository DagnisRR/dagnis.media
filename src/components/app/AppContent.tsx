import { language } from '../../i18n/i18n';
import { Button } from '@suid/material';
import { A } from '@solidjs/router';
import { SouthRounded } from '@suid/icons-material';
import anime from 'animejs/lib/anime.es.js';
import { onMount } from 'solid-js';

export default function AppContent() {
  let target;
  onMount(() => {
    anime({
      targets: target,
      translateY: 20,
      duration: 1000,
      easing: 'easeInElastic(1, .5)',
      loop: true,
      direction: 'alternate',
      autoplay: true,
    });
  });
  return (
    <div style="display: block; margin-top: 20rem">
      <div
        ref={target}
        style="display: flex; justify-content:center; font-weight: 100"
      >
        <SouthRounded
          sx={{
            color: '#f44336',
            fontSize: '3rem',
            marginBottom: '1.5rem',
          }}
        />
      </div>
      <div style="display: flex; justify-content:center">
        <A href="/projects" style="text-decoration: none; color: #f44336">
          <Button
            variant="outlined"
            size="large"
            style="height: 4.5rem; font-size: 1.5rem"
            sx={{ borderRadius: '1em', width: '10em' }}
          >
            {language.projects}
          </Button>
        </A>
      </div>
    </div>
  );
}
