import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/Navbar/Navbar';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Crisis Sync",
  description: "Real-time crisis management and response platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="https://imgs.search.brave.com/elqeTdunpLTCRuxRVFB8xVI_8ygAY8jI88CzM1hBNts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzEwLzE5LzA0/LzM2MF9GXzgxMDE5/MDQ1N19MRTNLb1FP/d0RUSWhOSWlmWXZ2/dnlXMkk3eG1IeVJW/SC5qcGc" sizes="32x32" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
