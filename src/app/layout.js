import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import SearchBox from "@/components/SearchBox";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "IMDb clone",
  description: "This is a movie database clone"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <SearchBox />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
