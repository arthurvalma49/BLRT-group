import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

export default function VideoBlock({
  embedUrl,
  poster,
  caption,
  className,
}: {
  embedUrl: string;
  poster?: string;
  caption?: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className={cn("flex flex-col gap-3", className)}>
      <div className="relative rounded-xl overflow-hidden bg-surface aspect-video">
        {playing ? (
          <iframe
            src={`${embedUrl}?autoplay=1`}
            title={caption ?? "Video"}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <>
            {poster && (
              <img
                src={poster}
                alt={caption ?? "Video thumbnail"}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center",
                poster ? "bg-black/30" : "bg-surface",
              )}
            >
              <button
                onClick={() => setPlaying(true)}
                className="group w-16 h-16 rounded-full bg-brand-red hover:bg-brand-red/90 flex items-center justify-center shadow-[var(--shadow-red)] transition-all duration-200 hover:scale-110"
                aria-label="Play video"
              >
                <Play className="w-6 h-6 text-white ml-1 fill-white" />
              </button>
            </div>
          </>
        )}
      </div>
      {caption && (
        <figcaption className="text-xs text-muted-foreground text-center">{caption}</figcaption>
      )}
    </figure>
  );
}
