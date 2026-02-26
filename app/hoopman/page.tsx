'use client';

import Image from 'next/image';
import VenueHeader from '@/components/VenueHeader';
import VenueFooter from '@/components/VenueFooter';
import { motion } from 'motion/react';

const navItems = [
  { label: 'Menu', href: '#menu' },
  { label: 'Sports Agenda', href: '#sports' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Vacancies', href: '#vacancies' },
  { label: 'Info', href: '#info' },
];

export default function HoopmanPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans selection:bg-green-900">
      <VenueHeader
        logo="https://images.squarespace-cdn.com/content/v1/64d3cece19ffe22ad08a8867/f4f3e2c1-9c76-45d5-a8a6-97784fa13e33/Hoopman_F.C.png"
        name="Hoopman Irish Pub"
        phone="020 623 44 19"
        navItems={navItems}
        themeColor="green-900"
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/64d3cece19ffe22ad08a8867/bd53c705-256b-4bf6-8f89-097d98be995c/2023-07-07+Kit+Leidseplein+%28highres%29+-3.jpg"
          alt="Hoopman Irish Pub Interior"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-[#d4af37] mb-6 tracking-wide uppercase"
          >
            Welcome to the Irish Heart of Amsterdam
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            Right in the pulsating heart of Amsterdam, directly on the bustling Leidseplein, Hoopman Irish pub welcomes you with open arms. This establishment exudes the charm of a traditional Irish pub, blended with the excitement of a modern sports bar.
          </motion.p>
        </div>
      </section>

      {/* Live Sports Section */}
      <section id="sports" className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-[#d4af37] mb-6 uppercase">Live Sports at Hoopman!</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                At Hoopman Irish pub, you won&apos;t miss a beat of the action! We broadcast all major matches live on RTE, BBC and Sky sports. Whether you&apos;re a football fanatic, a rugby enthusiast, or a GAA head cheering on your county in the All Ireland final. Experience the thrill with us as if you&apos;re right there in the stadium.
              </p>
              <a href="#agenda" className="inline-block px-8 py-4 bg-[#d4af37] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors">
                Sports Agenda
              </a>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/64d3cece19ffe22ad08a8867/0d28d6c2-4721-4ae8-873f-74b8138fb7d6/2023-07-07+Kit+Leidseplein+%28highres%29+-44.jpg"
                alt="Live Sports"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-[#d4af37] mb-4 uppercase">Our Menu</h2>
          <p className="text-gray-400 mb-12">See our menu before you visit!</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Breakfast', 'Lunch & Dinner', 'Drinks', 'Daily Specials'].map((item) => (
              <a key={item} href="#" className="block group relative h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-green-900/20 group-hover:bg-green-900/40 transition-colors z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider group-hover:scale-110 transition-transform">{item}</h3>
                </div>
                <div className="absolute inset-0 border-2 border-[#d4af37]/30 m-4 rounded z-20 pointer-events-none" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-24 bg-[#111] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-[#d4af37] font-bold uppercase tracking-widest mb-4">Address</h3>
            <p className="text-gray-300">Leidseplein 4<br/>1017 PT Amsterdam</p>
            <a href="#" className="text-sm text-green-500 hover:text-green-400 mt-2 inline-block">Get directions</a>
          </div>
          <div>
            <h3 className="text-[#d4af37] font-bold uppercase tracking-widest mb-4">Opening Hours</h3>
            <p className="text-gray-300">Open every day.<br/>Monday - Sunday<br/>10:00 am - 02:00 am</p>
          </div>
          <div>
            <h3 className="text-[#d4af37] font-bold uppercase tracking-widest mb-4">Contact</h3>
            <p className="text-gray-300">Curious about other possibilities?<br/>Please contact us.</p>
            <p className="text-white mt-2">020 623 44 19</p>
            <p className="text-green-500">info@leidseplein2468.com</p>
          </div>
        </div>
      </section>

      <VenueFooter name="Hoopman Irish Pub & Sports Bar" />
    </div>
  );
}
