import mapImage from "@/assets/blrt-map.png";
import RevealSection from "@/components/RevealSection";

export default function PresenceMap() {
  return (
    <RevealSection as="section" className="py-20 bg-background border-t border-border/30">
      <div className="flex justify-center">
        <div className="w-full max-w-3xl overflow-hidden">
          <img
            src={mapImage}
            alt="BLRT Grupp operating locations across the Baltic Sea region"
            className="w-full h-auto block"
            style={{ filter: "brightness(0.77)", imageRendering: "crisp-edges" }}
            loading="lazy"
          />
        </div>
      </div>
    </RevealSection>
  );
}
