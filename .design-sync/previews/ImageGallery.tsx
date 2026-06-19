import { ImageGallery } from 'BLRT-group-website';

const images = [
  { src: 'https://picsum.photos/seed/ship-1/800/600', alt: 'Vessel in dry dock', caption: 'Baltic Star in dry dock, 2023' },
  { src: 'https://picsum.photos/seed/welding/800/600', alt: 'Welding operations', caption: 'Steel fabrication workshop' },
  { src: 'https://picsum.photos/seed/harbor-2/800/600', alt: 'Harbour view', caption: 'Tallinn harbour operations' },
  { src: 'https://picsum.photos/seed/crane/800/600', alt: 'Crane operations', caption: 'Heavy lift crane on site' },
  { src: 'https://picsum.photos/seed/propeller/800/600', alt: 'Propeller maintenance', caption: 'Propeller shaft alignment' },
  { src: 'https://picsum.photos/seed/offshore2/800/600', alt: 'Offshore platform', caption: 'Offshore module delivery' },
];

export const SixImages = () => (
  <div className="p-6 bg-background max-w-3xl">
    <ImageGallery images={images} />
  </div>
);

export const ThreeImages = () => (
  <div className="p-6 bg-background max-w-2xl">
    <ImageGallery images={images.slice(0, 3)} />
  </div>
);
