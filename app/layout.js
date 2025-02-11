
import NavBar from "@/src/components/NavBar";
import "./globals.css";
import Footer from "@/src/components/Common/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       
      >
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
