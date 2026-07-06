import mapImage from "@/assets/blrt-map.png";
import RevealSection from "@/components/RevealSection";

const core = ["Estonia", "Latvia", "Lithuania", "Finland"];
const additional = ["Norway", "Poland", "Brazil"];

export default function PresenceMap() {
  return (
    <RevealSection as="section" className="py-20 bg-background border-t border-border/30">
      <div className="container-pro">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
          {/* Text panel */}
          <div className="relative z-10 flex flex-col gap-8 lg:pl-10 lg:pt-0 pt-0" style={{ transform: "translateX(50px)" }}>
            <div>
              <p className="overline mb-3">Our Reach</p>
              <h2 className="text-2xl font-bold tracking-tighter text-foreground">
                Baltic roots,<br />international reach
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  Present in
                </p>
                <div className="flex flex-wrap gap-2">
                  {core.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-xs font-semibold text-foreground"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  Additional presence in
                </p>
                <div className="flex flex-wrap gap-2">
                  {additional.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1 rounded-full bg-muted/50 border border-border text-xs font-medium text-muted-foreground"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full overflow-hidden">
            <img
              src={mapImage}
              alt="BLRT Grupp operating locations across the Baltic Sea region"
              className="w-full h-auto block"
              style={{ filter: "brightness(0.77)", imageRendering: "crisp-edges", transform: "translateX(-50px)" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
