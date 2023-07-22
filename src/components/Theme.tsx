import { red, grey } from "@suid/material/colors";
import { createTheme } from "@suid/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
        secondary: {
            main: grey[900],
        }
    },
})