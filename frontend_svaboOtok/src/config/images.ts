// Hero slideshow images (5 images)
export const HERO_IMAGES = [
  '/images/heroImages/hero-1.jpg',
  '/images/heroImages/hero-2.jpg',
  '/images/heroImages/hero-3.jpg',
  '/images/heroImages/hero-4.jpg',
  '/images/heroImages/hero-5.png'
];

export type GalleryCategory = 'pvc' | 'alu' | 'rolete';

export interface GalleryImage {
  src: string;
  category: GalleryCategory;
}

// Gallery images — assign a category to each image
export const GALLERY_IMAGES: GalleryImage[] = [
  { src: '/images/galleryImages/gallery-1.jpg', category: 'alu' },
  { src: '/images/galleryImages/gallery-2.jpg', category: 'rolete' },
  { src: '/images/galleryImages/gallery-3.jpg', category: 'rolete' },
  { src: '/images/galleryImages/gallery-4.jpg', category: 'rolete' },
  { src: '/images/galleryImages/gallery-5.jpg', category: 'pvc' },
  { src: '/images/galleryImages/gallery-6.jpg', category: 'rolete' },
  { src: '/images/galleryImages/gallery-7.jpg', category: 'alu' },
  { src: '/images/galleryImages/gallery-8.jpg', category: 'alu' },
  // Add more images here...
  // Supports: .jpg, .jpeg, .png, .webp, .avif
];
