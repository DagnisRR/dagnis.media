import { Typography } from '@suid/material';
import { grey } from '@suid/material/colors';
import './Theme.css';
import { language } from '../i18n/i18n';

//TODO: Make text shake.

export default function BigText() {
  return (
    <div style="position: absolute; width: 100%; height: 100%">
      <Typography
        variant="h1"
        class="disable-select"
        sx={{ color: grey[900], marginTop: '15%', marginLeft: '0.5em' }}
      >
        {language.quote_1}
      </Typography>
    </div>
  );
}
