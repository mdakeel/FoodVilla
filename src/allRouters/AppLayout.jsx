
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";


export function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}