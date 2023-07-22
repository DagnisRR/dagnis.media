import { Box, FormControl, MenuItem, Select } from '@suid/material';
import { SelectChangeEvent } from '@suid/material/Select';
import {
  changeLanguage,
  currentLanguage,
  setCurrentLanguage,
} from '../i18n/i18n';

if (document.cookie != '') {
  setCurrentLanguage(
    Number(document.cookie.charAt(document.cookie.length - 1))
  );
}

export default function LanguageSelect() {
  const handleChange = (event: SelectChangeEvent) => {
    changeLanguage(Number(event.target.value));
    setCurrentLanguage(Number(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 50, marginTop: 'auto', marginBottom: 'auto' }}>
      <FormControl fullWidth variant="standard">
        <Select
          value={currentLanguage()}
          onChange={handleChange}
          label="Language"
        >
          <MenuItem value={0}>en</MenuItem>
          <MenuItem value={1}>lv</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
