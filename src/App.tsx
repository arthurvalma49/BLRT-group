import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import SiteLayout from "@/components/SiteLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Contacts from "./pages/Contacts";
import OurValues from "./pages/OurValues";
import BusinessPage from "./pages/BusinessPage";
import ServicePage from "./pages/ServicePage";
import News from "./pages/News";
import Projects from "./pages/Projects";
import Careers from "./pages/Careers";
import Sustainability from "./pages/Sustainability";
import Companies from "./pages/Companies";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <LanguageProvider>
    <BrowserRouter>
      <ScrollToTop />
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/our-values" element={<OurValues />} />
          <Route path="/company/:slug" element={<BusinessPage />} />
          <Route path="/company/:slug/services/:serviceSlug" element={<ServicePage />} />
          <Route path="/news" element={<News />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/companies" element={<Companies />} />
          {/* Legacy group page — redirect to home */}
          <Route path="/group" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  </LanguageProvider>
);

export default App;
