import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

interface VenueHeaderProps {
  logo: string;
  name: string;
  phone: string;
  navItems: { label: string; href: string }[];
  themeColor: string;
}

export default function VenueHeader({ logo, name, phone, navItems, themeColor }: VenueHeaderProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative w-32 h-16">
                <Image src={logo} alt={name} fill className="object-contain" />
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white hover:text-gray-300 font-medium tracking-wider uppercase text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className={`px-6 py-2 border border-white text-white font-bold tracking-wider uppercase text-xs rounded-full hover:bg-white hover:text-black transition-colors`}
            >
              Call {name}
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-gray-300">
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
