import { VideoBlock } from 'BLRT-group-website';

export const Default = () => (
  <div className="p-6 bg-background max-w-xl">
    <VideoBlock
      embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      caption="BLRT Group facility overview"
    />
  </div>
);

export const NoCaption = () => (
  <div className="p-6 bg-background max-w-lg">
    <VideoBlock embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" />
  </div>
);
