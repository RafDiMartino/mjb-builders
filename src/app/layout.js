import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles'
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import theme from "./mui-theme";

const gotham = localFont({
  src: "./fonts/Gotham-Medium.woff2",
  variable: "--font-gotham-medium",
  weight: "100 900",
});
const poppins = localFont({
  src: "./fonts/Poppins-Medium.woff2",
  variable: "--font-poppins-medium",
  weight: "100 900",
});

export const metadata = {
  title: "MJB Builders",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gotham.variable} ${poppins.variable} antialiased`}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
