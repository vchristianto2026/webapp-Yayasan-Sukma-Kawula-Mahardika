import React from 'react';
import { BookOpen, FileDown, HeartHandshake, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface HeroProps {
  currentLang: Language;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onNavigate }) => {
  const t = UI_TRANSLATIONS[currentLang];

  return (
    <section id="hero" className="relative py-16 lg:py-24 border-b border-stone-200/80 bg-[#FAF8F5]">
      {/* Subtle background ambient styling */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e0d8_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Curatorial Header Ribbon (Strictly clean text with separators, NO PILLS) */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-medium text-stone-600 mb-6">
          <span className="text-amber-900 font-semibold tracking-wide uppercase">Yayasan Sukma Kawula Mahardika</span>
          <span aria-hidden="true" className="text-stone-400">·</span>
          <span>{t.established}</span>
          <span aria-hidden="true" className="text-stone-400">·</span>
          <span className="inline-flex items-center gap-1 text-stone-600">
            <ShieldCheck className="w-4 h-4 text-emerald-700" aria-hidden="true" />
            <span>Pendampingan Kasih & Iman Kristiani</span>
          </span>
        </div>

        {/* Display Headline */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 max-w-4xl mx-auto leading-tight text-balance">
          {t.heroHeadline}
        </h1>

        {/* Official Introduction Quote Box with Curatorial Typography */}
        <div className="mt-8 bg-stone-50 border border-stone-200/90 rounded-xl p-6 sm:p-8 max-w-3xl mx-auto shadow-xs text-left">
          <div className="text-xs uppercase tracking-widest text-amber-900 font-semibold mb-3">
            Pernyataan Resmi Yayasan / Official Declaration
          </div>
          <blockquote className="font-serif text-lg sm:text-xl text-stone-800 leading-relaxed italic border-b border-stone-200/70 pb-6 mb-6">
            &ldquo;{t.heroOfficialQuote}&rdquo;
          </blockquote>

          {/* Key Founding Officers Summary inline */}
          <div className="text-xs sm:text-sm text-stone-600 leading-relaxed space-y-1">
            <div className="font-medium text-stone-800">
              <span className="text-amber-900 font-semibold">Dewan & Pengurus:</span> Penasihat: dr. Kasan Susilo, MTh. · Ketua: Pdm. Dr. Sori Tjandrah Simbolon · Sekretaris: Ev. Victor Christianto · Bendahara: Ibu Caecilia Titin · Anggota: Pdt. Dr. Isak Suria, Pdt. L. Harumia Tedja, MTh, dan Ibu Elyse.
            </div>
            <div className="text-stone-500 text-xs pt-1">
              {t.heroSubquote}
            </div>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('articles')}
            className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-amber-950 hover:bg-stone-900 rounded-lg transition-colors shadow-sm cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-amber-300" aria-hidden="true" />
            <span>{t.readOfficialPapers}</span>
          </button>

          <a
            href="/assets/aistudio/ilovepdf_merged__51__9424f379.pdf"
            download="Kompilasi_YSKM_Prolog_HIV_LGBTQ_Kedaulatan_Batin.pdf"
            className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors shadow-2xs cursor-pointer"
          >
            <FileDown className="w-4 h-4 text-stone-600" aria-hidden="true" />
            <span>{t.downloadPdf}</span>
          </a>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-stone-700 hover:text-amber-900 hover:bg-amber-50/60 rounded-lg transition-colors cursor-pointer"
          >
            <HeartHandshake className="w-4 h-4 text-amber-700" aria-hidden="true" />
            <span>{t.consultPrivate}</span>
          </button>
        </div>

        {/* Scriptural Anchor Banner */}
        <div className="mt-12 pt-8 border-t border-stone-200/60 max-w-2xl mx-auto text-xs sm:text-sm text-stone-500 font-serif italic">
          &ldquo;Dan kamu akan mengetahui kebenaran, dan kebenaran itu akan memerdekakan kamu... Jadi jika Anak itu memerdekakan kamu, kamupun benar-benar merdeka.&rdquo;
          <span className="not-italic font-sans text-xs font-semibold text-stone-700 block mt-1">
            — Yohanes 8:32, 36
          </span>
        </div>
      </div>
    </section>
  );
};
