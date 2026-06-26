import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import AppRoutes from "./routes/AppRoutes";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
     <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;