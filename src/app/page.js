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
    <main className="bg-gray-900">
      {/* Header and Hero combined - Full page height */}
      <section id="home" className="h-screen relative">
        <Header />
        <Hero />
      </section>
      
      {/* Partners Section - Below hero */}
      <section id="products">
        <Partners />
      </section>
      
      {/* CTA Section - Below partners */}
      <section id="resources">
        <CTA />
      </section>
    </main>
  );
}
