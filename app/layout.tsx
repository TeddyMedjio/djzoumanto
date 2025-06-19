import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const ClashDisplayBold = localFont({
  src: "../app/fonts/ClashDisplay-Bold.woff",
  variable: "--font-clash-display",
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DJ ZOUMANTO",
  description:
    "Let’s keep your club packed with beats that move the crowd all night and create an unforgettable vibe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <!-- HTML Meta Tags --> */}
      <title>DJ ZOUMANTO</title>
      <meta
        name="description"
        content="Let’s keep your club packed with beats that move the crowd all night and create an unforgettable vibe."
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://djzoumanto.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="DJ ZOUMANTO" />
      <meta
        property="og:description"
        content="Let’s keep your club packed with beats that move the crowd all night and create an unforgettable vibe."
      />
      <meta
        property="og:image"
        content="https://opengraph.b-cdn.net/production/images/4f242a8d-74c5-4498-97a0-fc1878419d75.png?token=1rGCiDb_kvUDb2JIfxX5vbOF0hJRjyYQN9PUnKhHnRg&height=610&width=1200&expires=33286330337"
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="djzoumanto.vercel.app" />
      <meta property="twitter:url" content="https://djzoumanto.vercel.app/" />
      <meta name="twitter:title" content="DJ ZOUMANTO" />
      <meta
        name="twitter:description"
        content="Let’s keep your club packed with beats that move the crowd all night and create an unforgettable vibe."
      />
      <meta
        name="twitter:image"
        content="https://opengraph.b-cdn.net/production/images/4f242a8d-74c5-4498-97a0-fc1878419d75.png?token=1rGCiDb_kvUDb2JIfxX5vbOF0hJRjyYQN9PUnKhHnRg&height=610&width=1200&expires=33286330337"
      >
        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
      </meta>
      <body
        className={`${openSans.variable} ${ClashDisplayBold.variable}  antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
