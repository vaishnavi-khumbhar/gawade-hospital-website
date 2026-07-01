import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import AppRoutes from "./routes/AppRoutes";

import ScrollToTop from "./components/ScrollToTop";
import EmergencySideTab from "./components/EmergencySideTab";

function App() {
  return (
    <>
    
     <ScrollToTop />
      <Navbar />
      <EmergencySideTab />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;