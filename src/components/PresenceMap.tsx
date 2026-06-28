import mapImage from "@/assets/blrt-map.png";
import RevealSection from "@/components/RevealSection";

export default function PresenceMap() {
  return (
    <RevealSection as="section" className="py-0 bg-background border-t border-border/30">
      <div className="flex justify-center">
        <div
          className="w-full max-w-3xl rounded-3xl overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskComposite: "destination-in",
            maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
            maskComposite: "intersect",
          }}
        >
          <img
            src={mapImage}
            alt="BLRT Grupp operating locations across the Baltic Sea region"
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
      </div>
    </RevealSection>
  );
}
