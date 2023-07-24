import logo from '../assets/logo-greyscale.png';
import {
  Typography,
  Link,
  TextField,
  Button,
  CircularProgress,
} from '@suid/material';
import { onMount, Show, createSignal } from 'solid-js';
import { grey } from '@suid/material/colors';
import { language } from '../i18n/i18n';
import './Footer.css';
import './Theme.css';
import { A } from '@solidjs/router';

export default function Footer() {
  const [loading, setLoading] = createSignal(false);

  onMount(() => {
    var form = document.getElementById('contact-form');

    //BUG Form doesn't work.

    function submitForm(event) {
      console.log(loading);
      setLoading(true);
      setTimeout(() => {
        console.log(loading);
        setLoading(false);
      }, 5000);
      console.log(loading);
      event.preventDefault();
    }
    form.addEventListener('submit', submitForm);
  });
  return (
    <footer style="padding-top: 15em">
      <div>
        <div class="row">
          <div class="columm">
            <div class="row" style="justify-content: center">
              <div class="logo-column column">
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
                      display: 'block',
                      color: grey[500],
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
                      <li>
                        <Typography variant="subtitle1" component="div">
                          <A
                            href="/about"
                            class="link hover-underline-animation"
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
                            class="link hover-underline-animation"
                            color="inherit"
                            style="text-decoration: none"
                          >
                            {language.projects}
                          </A>
                        </Typography>
                      </li>
                    </ul>
                  </nav>
                  {/*
                  <div class="collumn column-padding" style="margin-top: 1em">
                    <Typography variant="subtitle1" sx={{ color: grey[500] }}>
                      {language.contact_us}
                    </Typography>

                    <form
                      style="display: flex; margin-top: 1em; text-align: center"
                      autocomplete="off"
                      name="contact"
                      id="contact-form"
                      //CHANGE netlify
                    >
                      <TextField
                        id="contact-message"
                        label={language.message}
                        defaultValue=""
                        variant="filled"
                        size="small"
                        style="margin-right: 1em; width: 15ch"
                        multiline
                        rows={4}
                      />
                      <div class="row">
                        <ul style="margin-top: 0px">
                          <li>
                            <TextField
                              id="contact-email"
                              label={language.email}
                              defaultValue=""
                              variant="filled"
                              size="small"
                              style="width: 15ch"
                            />
                          </li>

                          <li>
                            <Show
                              when={loading}
                              fallback={
                                <CircularProgress style="margin-top: 1em" />
                              }
                            >
                              <Button
                                variant="outlined"
                                type="submit"
                                style="width: 100%; margin-top: 1em"
                              >
                                {language.send}
                              </Button>
                            </Show>
                          </li>
                        </ul>
                      </div>
                    </form>
                  </div>
                            */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
