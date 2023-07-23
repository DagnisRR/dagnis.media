import { compile, morph } from 'svg-path-morph';
import anime from 'animejs/lib/anime.es.js';
import { onMount, onCleanup } from 'solid-js';

function easeInOutSine(
  delta: number,
  start: number,
  end: number,
  duration: number
) {
  return (-end / 2) * (Math.cos((Math.PI * delta) / duration) - 1) + start;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function Background() {
  let wave;

  onMount(() => {
    const waves = [
      'M0 250L22.8 255.3C45.7 260.7 91.3 271.3 137 277C182.7 282.7 228.3 283.3 274 286C319.7 288.7 365.3 293.3 411.2 287.3C457 281.3 503 264.7 548.8 267.2C594.7 269.7 640.3 291.3 686 285.8C731.7 280.3 777.3 247.7 823 242.2C868.7 236.7 914.3 258.3 937.2 269.2L960 280L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z',
      'M0 281L22.8 282.3C45.7 283.7 91.3 286.3 137 287C182.7 287.7 228.3 286.3 274 288.7C319.7 291 365.3 297 411.2 300.8C457 304.7 503 306.3 548.8 299.2C594.7 292 640.3 276 686 268.5C731.7 261 777.3 262 823 269.7C868.7 277.3 914.3 291.7 937.2 298.8L960 306L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z',
      'M0 281L22.8 282.3C45.7 283.7 91.3 286.3 137 287C182.7 287.7 228.3 286.3 274 288.7C319.7 291 365.3 297 411.2 300.8C457 304.7 503 306.3 548.8 299.2C594.7 292 640.3 276 686 268.5C731.7 261 777.3 262 823 269.7C868.7 277.3 914.3 291.7 937.2 298.8L960 306L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z',
      'M0 318L22.8 316.8C45.7 315.7 91.3 313.3 137 301.5C182.7 289.7 228.3 268.3 274 267.3C319.7 266.3 365.3 285.7 411.2 295.8C457 306 503 307 548.8 309C594.7 311 640.3 314 686 310.2C731.7 306.3 777.3 295.7 823 284.3C868.7 273 914.3 261 937.2 255L960 249L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z',
      'M0 287L22.8 275.8C45.7 264.7 91.3 242.3 137 244.8C182.7 247.3 228.3 274.7 274 283.7C319.7 292.7 365.3 283.3 411.2 274.3C457 265.3 503 256.7 548.8 259.2C594.7 261.7 640.3 275.3 686 273.8C731.7 272.3 777.3 255.7 823 253.2C868.7 250.7 914.3 262.3 937.2 268.2L960 274L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z',
    ];

    const compiled = compile(waves);
    const values = [0.0, 0.0, 0.0, 0.0, 0.0];

    let currentWave = getRandomInt(5);
    values[currentWave] = 1;
    let delta = 0;
    let duration = 500;

    let frame = requestAnimationFrame(loop);
    function loop() {
      delta++;

      //Reduce FPS for performance
      if (delta % 2 == 1) {
        frame = requestAnimationFrame(loop);
        return;
      }

      if (currentWave != 4) {
        values[currentWave] = 1 - easeInOutSine(delta, 0.0, 1.0, duration);
        values[currentWave + 1] = easeInOutSine(delta, 0.0, 1.0, duration);
      } else {
        values[currentWave] = 1 - easeInOutSine(delta, 0.0, 1.0, duration);
        values[0] = easeInOutSine(delta, 0.0, 1.0, duration);
      }
      if (values[currentWave] < 0.01) {
        delta = 0;
        values[currentWave] = 0.0;
        if (currentWave != 4) {
          currentWave++;
        } else {
          currentWave = 0;
        }
      }

      try {
        wave.setAttribute('d', morph(compiled, values));
      } catch (error) {}
      frame = requestAnimationFrame(loop);
    }
    onCleanup(() => cancelAnimationFrame(frame));
  });
  return (
    <div style="width:100%; height:100%">
      <svg
        id="visual"
        viewBox="0 0 960 540"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <path
          ref={wave}
          d=""
          fill="#f44336"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg>
    </div>
  );
}
