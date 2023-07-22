import LanguageSelect from './LanguageSelect';
import { language } from '../i18n/i18n';
import './BasicAppBar.css';
import { AppBar, Box, Button, Toolbar, Typography, Link } from '@suid/material';

export default function BasicAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div class="flex-container">
            <LanguageSelect />
            <Typography
              style="font-family:'Cinzel', serif;"
              variant="h6"
              component="div"
              sx={{ paddingTop: '1.2rem', marginLeft: 'auto' }}
            >
              <Link
                href="https://youtube.com"
                class="hover-underline-animation"
                color="inherit"
                sx={{ textDecoration: 'none' }}
              >
                {language.about}
              </Link>
            </Typography>
            <Typography
              class="disable-select"
              style="font-family:'Cinzel', serif; text-align:center; line-height:0.7;"
              variant="h4"
              component="div"
              sx={{ paddingTop: '1rem' }}
            >
              DAGNIS
              <br />
              MEDIA
            </Typography>

            <Typography
              class="disable-select"
              style="font-family:'Cinzel', serif;"
              variant="h6"
              component="div"
              sx={{ paddingTop: '1.2rem', marginRight: 'auto' }}
            >
              <Link
                href="https://youtube.com"
                class="hover-underline-animation"
                color="inherit"
                sx={{ textDecoration: 'none' }}
              >
                {language.projects}
              </Link>
            </Typography>
            {/* @ts-ignore */}
            <Button
              target="popup"
              href="https://github.com/DagnisRR/dagnis.media"
              color="secondary"
              variant="contained"
              size="small"
              sx={{
                marginTop: 'auto',
                marginBottom: 'auto',
                minWidth: '155px',
                maxHeight: '31px',
                whiteSpace: 'nowrap',
                borderRadius: '1em',
                paddingLeft: '1.4em',
                paddingRight: '1.4em',
              }}
            >
              <img
                width="18px"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                style="filter: invert(1); padding-right:0.8em"
              ></img>
              {language.source_code}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
