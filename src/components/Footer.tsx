//TODO: Make a footer.

import logo from '../assets/logo-greyscale.png';
import { Typography, Link } from '@suid/material';
import { grey } from '@suid/material/colors';
import { language } from '../i18n/i18n';
import './Footer.css';
import './Theme.css';

export default function Footer() {
  return (
    <footer>
      <div>
        <div class="row">
          <div class="col">
            <div class="row">
              <div class="column">
                <div class="logo-container">
                  <img src={logo} class="logo disable-select" />
                  <Typography
                    fontFamily={'Cinzel, serif'}
                    variant="h4"
                    class="disable-select"
                    sx={{
                      color: grey[500],
                      lineHeight: 0.7,
                      textAlign: 'center',
                    }}
                  >
                    DAGNIS
                    <br />
                    MEDIA
                  </Typography>
                  <Typography
                    fontFamily={'Cinzel, serif'}
                    variant="subtitle1"
                    class="disable-select"
                    style="text-wrap: wrap"
                    sx={{
                      color: grey[500],
                      textAlign: 'center',
                    }}
                  >
                    SIA Dagnis Media "Films" © Records™ Inc. Ltd.
                  </Typography>
                </div>
              </div>
              <div class="collumn column-padding" style="margin-top: 1em">
                <Typography variant="subtitle1" sx={{ color: grey[500] }}>
                  {language.email}
                </Typography>
                <ul>
                  <li>
                    <Typography variant="subtitle1">
                      drremesis@gmail.com
                    </Typography>
                  </li>
                </ul>
              </div>
              <div class="collumn column-padding" style="margin-top: 1em">
                <Typography variant="subtitle1" sx={{ color: grey[500] }}>
                  {language.colophon}
                </Typography>
                <ul>
                  <li>
                    <Link
                      href="https://www.solidjs.com/"
                      target="popup"
                      variant="subtitle1"
                      color={'inherit'}
                      class="link hover-underline-animation"
                      sx={{ textDecoration: 'none' }}
                    >
                      SolidJS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.suid.io/"
                      target="popup"
                      variant="subtitle1"
                      color={'inherit'}
                      class="link hover-underline-animation"
                      sx={{ textDecoration: 'none' }}
                    >
                      SUID
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.animejs.com/"
                      target="popup"
                      variant="subtitle1"
                      color={'inherit'}
                      class="link hover-underline-animation"
                      sx={{ textDecoration: 'none' }}
                    >
                      anime.js
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/Minibrams/svg-path-morph"
                      target="popup"
                      variant="subtitle1"
                      color={'inherit'}
                      class="link hover-underline-animation"
                      sx={{ textDecoration: 'none' }}
                    >
                      svg-path-morph
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/solidjs/solid-router"
                      target="popup"
                      variant="subtitle1"
                      color={'inherit'}
                      class="link hover-underline-animation"
                      sx={{ textDecoration: 'none' }}
                    >
                      Solid Router
                    </Link>
                  </li>
                </ul>
              </div>
              <nav class="collumn column-padding" style="margin-top: 1em">
                <Typography variant="subtitle1" sx={{ color: grey[500] }}>
                  {language.navigation}
                </Typography>
                <ul>
                  <li></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
