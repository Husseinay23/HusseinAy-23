// Tech Stack Icons using real logos from CDN
// Using simple-icons CDN: https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/

const iconBaseUrl = 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons';

interface TechIconProps {
  slug: string;
  className?: string;
  alt?: string;
}

const TechIcon = ({ slug, className = 'w-full h-full', alt = 'Tech logo' }: TechIconProps) => {
  return (
    <img
      src={`${iconBaseUrl}/${slug}.svg`}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        // Fallback to a generic icon placeholder if logo fails to load
        const target = e.target as HTMLImageElement;
        target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23999' d='M12 2L2 7v10l10 5 10-5V7L12 2z'/%3E%3C/svg%3E`;
      }}
    />
  );
};

import type { ReactNode } from 'react';

// Using proper simple-icons slugs
export const TechIcons: Record<string, ReactNode> = {
  // Core Frontend
  React: <TechIcon slug="react" alt="React logo" />,
  'Next.js': <TechIcon slug="nextdotjs" alt="Next.js logo" />,
  TypeScript: <TechIcon slug="typescript" alt="TypeScript logo" />,
  JavaScript: <TechIcon slug="javascript" alt="JavaScript logo" />,
  HTML5: <TechIcon slug="html5" alt="HTML5 logo" />,
  CSS3: <TechIcon slug="css3" alt="CSS3 logo" />,
  TailwindCSS: <TechIcon slug="tailwindcss" alt="Tailwind CSS logo" />,
  
  // Mobile
  'React Native': <TechIcon slug="react" alt="React Native logo" />,
  Expo: <TechIcon slug="expo" alt="Expo logo" />,
  'Android Studio': <TechIcon slug="androidstudio" alt="Android Studio logo" />,
  
  // Backend & CMS
  'Node.js': <TechIcon slug="nodedotjs" alt="Node.js logo" />,
  Firebase: <TechIcon slug="firebase" alt="Firebase logo" />,
  Directus: <TechIcon slug="directus" alt="Directus logo" />,
  'Medusa JS': <TechIcon slug="medusa" alt="Medusa JS logo" />,
  'Payload CMS': <TechIcon slug="payloadcms" alt="Payload CMS logo" />,
  
  // Database
  SQL: <TechIcon slug="mysql" alt="SQL logo" />,
  PostgreSQL: <TechIcon slug="postgresql" alt="PostgreSQL logo" />,
  MongoDB: <TechIcon slug="mongodb" alt="MongoDB logo" />,
  
  // Animation & 3D
  GSAP: <TechIcon slug="greensock" alt="GSAP logo" />,
  'Framer Motion': <TechIcon slug="framer" alt="Framer Motion logo" />,
  'Three.js': <TechIcon slug="threedotjs" alt="Three.js logo" />,
  
  // Languages
  Python: <TechIcon slug="python" alt="Python logo" />,
  Java: <TechIcon slug="java" alt="Java logo" />,
  
  // Tools & Platforms
  Git: <TechIcon slug="git" alt="Git logo" />,
  GitHub: <TechIcon slug="github" alt="GitHub logo" />,
  Vercel: <TechIcon slug="vercel" alt="Vercel logo" />,
  Figma: <TechIcon slug="figma" alt="Figma logo" />,
  
  // ML/AI
  TensorFlow: <TechIcon slug="tensorflow" alt="TensorFlow logo" />,
  PyTorch: <TechIcon slug="pytorch" alt="PyTorch logo" />,
};
