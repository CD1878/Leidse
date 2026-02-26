'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const venues = [
  {
    id: 'hoopman',
    name: 'Hoopman',
    subtitle: 'Irish Pub & Sports Bar',
    href: '/hoopman',
    image: 'https://images.squarespace-cdn.com/content/v1/64d3cece19ffe22ad08a8867/bd53c705-256b-4bf6-8f89-097d98be995c/2023-07-07+Kit+Leidseplein+%28highres%29+-3.jpg',
    logo: 'https://images.squarespace-cdn.com/content/v1/64d3cece19ffe22ad08a8867/f4f3e2c1-9c76-45d5-a8a6-97784fa13e33/Hoopman_F.C.png',
    color: 'bg-green-900',
  },
  {
    id: 'reynders',
    name: 'Café Reynders',
    subtitle: 'Traditioneel Nederlands Café',
    href: '/reynders',
    image: 'https://images.squarespace-cdn.com/content/v1/64ab1f357a5542028130c8d4/a24f92d5-9cc4-4b1b-9c6f-458d3ae96acf/2020-01-16+New+York+Steakhouse+-+Le+Pub+Amsterdam+-74.jpg',
    logo: 'https://images.squarespace-cdn.com/content/v1/64ab1f357a5542028130c8d4/2c55354b-ee0c-4ab4-9340-b23162e0bdec/logo+reynders+amsterdam+wit.png',
    color: 'bg-amber-900',
  },
  {
    id: 'holeinthewall',
    name: 'Hole In The Wall',
    subtitle: 'Late Night Karaoke & Sports',
    href: '/hole-in-the-wall',
    image: 'https://images.squarespace-cdn.com/content/v1/650a9c1d6cecdf22b9585384/07992296-6e09-45e9-b75c-41886553e2c0/brandi-alexandra-UqEJ1ojVXOY-unsplash.jpg',
    logo: 'https://images.squarespace-cdn.com/content/v1/650a9c1d6cecdf22b9585384/4a0084e6-3187-404e-afb5-303c3f41335d/Zonder+titel+%281080+x+400+px%29+%281%29.png',
    color: 'bg-fuchsia-900',
  },
];

export default function Portal() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-row h-screen w-full bg-black overflow-hidden"
    >
      {venues.map((venue, index) => {
        const isHovered = hoveredIndex === index;
        const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

        return (
          <motion.div
            key={venue.id}
            className="relative flex-1 h-full cursor-pointer group overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              flex: isHovered ? 1.5 : isOtherHovered ? 0.75 : 1,
            }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            <Link href={venue.href} className="absolute inset-0 block">
              <Image
                src={venue.image}
                alt={venue.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              <div className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${isHovered ? 'opacity-30' : 'opacity-60'}`} />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <motion.div
                  animate={{
                    y: isHovered ? -20 : 0,
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative w-48 h-48 md:w-64 md:h-64 mb-6"
                >
                  <Image
                    src={venue.logo}
                    alt={`${venue.name} logo`}
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </motion.div>
                
                <motion.div
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 20,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute bottom-1/4"
                >
                  <span className="px-6 py-3 border-2 border-white text-white font-bold tracking-widest uppercase text-sm rounded-full backdrop-blur-sm bg-black/20 hover:bg-white hover:text-black transition-colors duration-300">
                    Explore
                  </span>
                </motion.div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
