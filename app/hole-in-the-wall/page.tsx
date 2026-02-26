'use client';

import Image from 'next/image';
import VenueHeader from '@/components/VenueHeader';
import VenueFooter from '@/components/VenueFooter';
import { motion } from 'motion/react';

const navItems = [
  { label: 'Karaoke', href: '#karaoke' },
  { label: 'Sports', href: '#sports' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Info', href: '#info' },
  { label: 'Vacancies', href: '#vacancies' },
];

export default function HoleInTheWallPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-fuchsia-600 selection:text-white">
      <VenueHeader
        logo="https://images.squarespace-cdn.com/content/v1/650a9c1d6cecdf22b9585384/4a0084e6-3187-404e-afb5-303c3f41335d/Zonder+titel+%281080+x+400+px%29+%281%29.png"
        name="Hole In The Wall"
        phone="020 623 44 19"
        navItems={navItems}
        themeColor="fuchsia-600"
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/650a9c1d6cecdf22b9585384/07992296-6e09-45e9-b75c-41886553e2c0/brandi-alexandra-UqEJ1ojVXOY-unsplash.jpg"
          alt="Hole In The Wall Party"
          fill
          className="object-cover opacity-60 mix-blend-screen"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-fuchsia-900/20 to-black" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 mb-6 uppercase tracking-tighter"
            style={{ textShadow: '0 0 40px rgba(217, 70, 239, 0.5)' }}
          >
            Welcome to the Party Heart of Amsterdam
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide max-w-3xl mx-auto"
          >
            Situated in center of Amsterdam’s Leidseplein, Hole in the Wall is your perfect party destination. Offering a unique blend of private karaoke, dancing, pool and sports-we serve up unforgettable moments.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12"
          >
            <a href="#book" className="inline-block px-10 py-5 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-black uppercase tracking-widest rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(192,38,211,0.6)] transition-all duration-300">
              Book Karaoke
            </a>
          </motion.div>
        </div>
      </section>

      {/* Karaoke Section */}
      <section id="karaoke" className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-fuchsia-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tight">
                Karaoke <span className="text-fuchsia-500">Nights</span>
              </h2>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                At Hole in the Wall, you&apos;re the star! Our four state-of-the-art private karaoke rooms offer you and your friends the chance steal the spotlight. Whether you&apos;re a karaoke veteran or you&apos;ll need some Dutch courage first - the stage is yours. A great option for birthdays, hen nights, stag parties or team building.
              </p>
              <div className="flex gap-4">
                <a href="#book" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded hover:bg-gray-200 transition-colors">
                  Book Room
                </a>
                <a href="#gallery" className="px-8 py-4 border-2 border-white/20 text-white font-bold uppercase tracking-wider rounded hover:border-white transition-colors">
                  See More
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(217,70,239,0.2)]">
                  <Image src="https://images.squarespace-cdn.com/content/v1/650a9c1d6cecdf22b9585384/9f9e98c0-a327-4cd8-9780-b0921835cd6f/2023-07-07+Kit+Leidseplein+%28highres%29+-69+%281%29.jpg" alt="Karaoke Room" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                  <Image src="https://images.squarespace-cdn.com/content/v1/650a9c1d6cecdf22b9585384/07992296-6e09-45e9-b75c-41886553e2c0/brandi-alexandra-UqEJ1ojVXOY-unsplash.jpg" alt="Party" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                  <Image src="https://images.squarespace-cdn.com/content/v1/650a9c1d6cecdf22b9585384/9f9e98c0-a327-4cd8-9780-b0921835cd6f/2023-07-07+Kit+Leidseplein+%28highres%29+-69+%281%29.jpg" alt="Karaoke Room" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(236,72,153,0.2)]">
                  <Image src="https://images.squarespace-cdn.com/content/v1/650a9c1d6cecdf22b9585384/07992296-6e09-45e9-b75c-41886553e2c0/brandi-alexandra-UqEJ1ojVXOY-unsplash.jpg" alt="Party" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-24 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-fuchsia-500 font-bold uppercase tracking-widest mb-4">Address</h3>
            <p className="text-gray-300">Leidseplein 8<br/>1017 PT Amsterdam</p>
            <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 mt-2 inline-block">Get directions</a>
          </div>
          <div>
            <h3 className="text-fuchsia-500 font-bold uppercase tracking-widest mb-4">Opening Hours</h3>
            <p className="text-gray-300">Monday - Thursday<br/>16:00 pm - 03:00 am<br/><br/>Friday - Sunday<br/>16:00 pm - 04:00 am</p>
          </div>
          <div>
            <h3 className="text-fuchsia-500 font-bold uppercase tracking-widest mb-4">Special Occasion?</h3>
            <p className="text-gray-300">Curious about other possibilities?<br/>Please contact us.</p>
            <p className="text-white mt-2">020 623 44 19</p>
            <p className="text-cyan-400">info@leidseplein2468.com</p>
          </div>
        </div>
      </section>

      <VenueFooter name="Karaoke & Bar Hole In The Wall Leidseplein" />
    </div>
  );
}
