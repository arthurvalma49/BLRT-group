import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-clip">
      <SiteHeader />
      <main key={location.pathname} className="flex-1 page-fade">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
