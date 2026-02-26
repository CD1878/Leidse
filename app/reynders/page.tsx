'use client';

import Image from 'next/image';
import VenueHeader from '@/components/VenueHeader';
import VenueFooter from '@/components/VenueFooter';
import { motion } from 'motion/react';

const navItems = [
  { label: 'Menu', href: '#menu' },
  { label: 'Gallerij', href: '#gallerij' },
  { label: 'Info', href: '#info' },
  { label: 'Vacatures', href: '#vacatures' },
];

export default function ReyndersPage() {
  return (
    <div className="min-h-screen bg-[#2c1e16] text-[#f4e4d8] font-serif selection:bg-amber-900">
      <VenueHeader
        logo="https://images.squarespace-cdn.com/content/v1/64ab1f357a5542028130c8d4/2c55354b-ee0c-4ab4-9340-b23162e0bdec/logo+reynders+amsterdam+wit.png"
        name="Café Reynders"
        phone="(020) 623 44 19"
        navItems={navItems}
        themeColor="amber-900"
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/64ab1f357a5542028130c8d4/a24f92d5-9cc4-4b1b-9c6f-458d3ae96acf/2020-01-16+New+York+Steakhouse+-+Le+Pub+Amsterdam+-74.jpg"
          alt="Café Reynders Interior"
          fill
          className="object-cover opacity-50 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c1e16] via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-[#e8b97d] mb-6 tracking-wide"
          >
            Welkom bij Café Reynders
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-[#d8c3b5] font-light italic"
          >
            Een traditioneel Nederlands café in het centrum van Amsterdam
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#2c1e16]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl leading-relaxed text-[#d8c3b5] mb-12">
            Reynders is een traditioneel Nederlands café gelegen in het centrum van Amsterdam. Het café werd opgericht in 1896 en is sindsdien nauwelijks veranderd. Binnen vind je zelfs foto&apos;s van hoe het eruitzag op het Leidseplein bijna 100 jaar geleden. Reynders zit vol verhalen en is bij de meeste Amsterdammers, jong en oud, goed bekend. Reynders zal je zeker verwelkomen met een warme Nederlandse begroeting en je een uitstekende selectie Nederlandse bieren, whisky, likeuren, jenever en andere Nederlandse gedistilleerde dranken aanbieden.
          </p>
          <div className="w-24 h-1 bg-[#e8b97d] mx-auto opacity-50" />
        </div>
      </section>

      {/* Beers Section */}
      <section className="py-24 bg-[#1f140e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-[600px] rounded-t-full overflow-hidden border-4 border-[#e8b97d]/20">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/64ab1f357a5542028130c8d4/e13c8ddf-578a-47ea-9d76-c6ef662e132e/2020-01-16+New+York+Steakhouse+-+Le+Pub+Amsterdam+-76.jpg"
                alt="Traditionele Nederlandse bieren"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-[#e8b97d] mb-6">Traditionele Nederlandse bieren</h2>
              <p className="text-[#d8c3b5] text-lg mb-8 leading-relaxed">
                Binnen bij Reynders kunt u kiezen om aan onze lange bar te zitten of plaats te nemen aan een meer afgelegen en privé tafel. Reynders is groot genoeg om even te ontsnappen aan de drukke straten van Amsterdam, maar biedt toch een levendige sfeer door de bruisende bar, zodat u zich zeker niet eenzaam zult voelen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#dranken" className="inline-block px-8 py-4 border border-[#e8b97d] text-[#e8b97d] font-bold uppercase tracking-wider hover:bg-[#e8b97d] hover:text-[#1f140e] transition-colors text-center text-sm font-sans">
                  Bier menu
                </a>
                <a href="#proeverij" className="inline-block px-8 py-4 bg-[#e8b97d] text-[#1f140e] font-bold uppercase tracking-wider hover:bg-white transition-colors text-center text-sm font-sans">
                  Boek een proeverij
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-24 bg-[#2c1e16] border-t border-[#e8b97d]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center font-sans">
          <div>
            <h3 className="text-[#e8b97d] font-bold uppercase tracking-widest mb-4 text-sm">Adres</h3>
            <p className="text-[#d8c3b5]">Leidseplein 6<br/>1017 PT Amsterdam</p>
            <a href="#" className="text-sm text-amber-500 hover:text-amber-400 mt-2 inline-block underline underline-offset-4">Routebeschrijving</a>
          </div>
          <div>
            <h3 className="text-[#e8b97d] font-bold uppercase tracking-widest mb-4 text-sm">Openingstijden</h3>
            <p className="text-[#d8c3b5]">Elke dag geopend.<br/>Maandag - Zondag<br/>10:00 - 02:00</p>
          </div>
          <div>
            <h3 className="text-[#e8b97d] font-bold uppercase tracking-widest mb-4 text-sm">Proeven?</h3>
            <p className="text-[#d8c3b5]">Nieuwsgierig naar andere mogelijkheden?<br/>Neem contact met ons op.</p>
            <p className="text-white mt-2">(020) 623 44 19</p>
            <p className="text-amber-500">info@leidseplein2468.com</p>
          </div>
        </div>
      </section>

      <VenueFooter name="Café Reynders Leidseplein" />
    </div>
  );
}
