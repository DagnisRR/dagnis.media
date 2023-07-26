import logo from '../assets/logo-cropped.png';
import { Typography, Link } from '@suid/material';
import { language } from '../i18n/i18n';
import './Footer.css';
import { A } from '@solidjs/router';

export default function FooterDark() {
  return (
    <footer style="padding-top: 5em">
      <div>
        <div class="row">
          <div class="columm">
            <div class="row" style="justify-content: center">
              <div class="logo-column column">
                <div class="logo-container-dark">
                  <img src={logo} class="logo disable-select" />
                  <Typography
                    fontFamily={'Cinzel, serif'}
                    variant="h4"
                    class="disable-select"
                    sx={{
                      color: '#ffcdd2',
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
                      display: 'block',
                      color: '#ffcdd2',
                      maxWidth: '40%',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginTop: '1em',
                      textAlign: 'center',
                      lineHeight: 1,
                    }}
                  >
                    SIA Dagnis Media "Films" © Records™ Inc. Ltd. 2023
                  </Typography>
                </div>
              </div>
              <div class="content-column column">
                <div class="row">
                  <div class="collumn column-padding" style="margin-top: 1em">
                    <Typography variant="subtitle1" sx={{ color: '#ffcdd2' }}>
                      {language.email}
                    </Typography>
                    <ul>
                      <li>
                        <Typography style="color: #fff" variant="subtitle1">
                          drremesis@gmail.com
                        </Typography>
                      </li>
                    </ul>
                  </div>
                  <div class="collumn column-padding" style="margin-top: 1em">
                    <Typography variant="subtitle1" sx={{ color: '#ffcdd2' }}>
                      {language.colophon}
                    </Typography>
                    <ul style="color: #fff">
                      <li>
                        <Link
                          href="https://www.solidjs.com/"
                          target="popup"
                          variant="subtitle1"
                          color={'inherit'}
                          class="link-dark link-underline-dark"
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
                          class="link-dark link-underline-dark"
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
                          class="link-dark link-underline-dark"
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
                          class="link-dark link-underline-dark"
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
                          class="link-dark link-underline-dark"
                          sx={{ textDecoration: 'none' }}
                        >
                          Solid Router
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <nav class="collumn column-padding" style="margin-top: 1em">
                    <Typography variant="subtitle1" sx={{ color: '#ffcdd2' }}>
                      {language.navigation}
                    </Typography>
                    <ul>
                      <li>
                        <Typography variant="subtitle1" component="div">
                          <A
                            href="/"
                            class="link-dark link-underline-dark"
                            style="text-decoration: none"
                          >
                            dagnis.media
                          </A>
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitle1" component="div">
                          <A
                            href="/about"
                            class="link-dark link-underline-dark"
                            style="text-decoration: none"
                          >
                            {language.about}
                          </A>
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitle1" component="div">
                          <A
                            href="/projects"
                            class="link-dark link-underline-dark"
                            style="text-decoration: none"
                          >
                            {language.projects}
                          </A>
                        </Typography>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
