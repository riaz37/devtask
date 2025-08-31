'use client';

import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/ui/Stats';
import Partners from '@/components/sections/Partners';
import CTA from '@/components/sections/CTA';

export default function Home() {
  useSmoothScroll();

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>
      
      {/* Stats Section */}
      <Stats />
      
      {/* Partners Section */}
      <section id="products">
        <Partners />
      </section>
      
      {/* CTA Section */}
      <section id="resources">
        <CTA />
      </section>
    </main>
  );
}
