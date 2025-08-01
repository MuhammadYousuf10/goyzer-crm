import theme from "@/theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export const metadata = {
  title: "Goyzer App",
  description: "Goyzer Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
