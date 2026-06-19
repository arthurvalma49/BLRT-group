import { LanguageProvider } from "@/i18n/LanguageContext";
import { MemoryRouter } from "react-router-dom";

export function DesignProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </LanguageProvider>
  );
}
