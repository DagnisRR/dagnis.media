import { Typography } from '@suid/material';
import { language } from '../../i18n/i18n';

export default function AboutContent() {
  return (
    <Typography
      variant="subtitle1"
      style="margin-top: 20rem"
      sx={{ paddingLeft: '20%', paddingRight: '20%' }}
    >
      <b>{language.about_summary}</b>
      <br />
      {language.about_text1}
    </Typography>
  );
}
