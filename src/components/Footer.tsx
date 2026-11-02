import React from 'react';
import { Heart, ShieldCheck, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate }) => {
  const t = UI_TRANSLATIONS[currentLang];

  return (
    <footer className="bg-stone-950 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Scripture Banner */}
        <div className="pb-12 border-b border-stone-800/80 text-center max-w-3xl mx-auto">
          <blockquote className="font-serif text-lg sm:text-xl text-amber-100 italic leading-relaxed">
            {t.footerQuote}
          </blockquote>
          <div className="mt-3 text-xs text-stone-400 font-sans tracking-wider uppercase">
            &ldquo;Bukankah ini puasa yang Kupilih: kamu melepaskan belenggu kelaliman... dan memerdekakan yang tertindas?&rdquo; (Yesaya 58:6)
          </div>
        </div>

        {/* Middle Tier: Foundation Info, Quick Links & Leadership */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Foundation Profile */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="font-display text-lg font-bold text-white tracking-wide">
              Yayasan Sukma Kawula Mahardika
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Berdiri April 2023. Berkomitmen menyediakan pendampingan pemulihan berbasis kasih dan iman dalam Yesus Kristus bagi kaum remaja dan pemuda, dengan etika medis-psikologis yang bermartabat dan bebas paksaan.
            </p>
            <div className="pt-2 text-[11px] text-stone-500 font-mono">
              Sekretariat YSKM • Indonesia • Mitra Publikasi: Kusa Publishing
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-stone-400">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Beranda Utama
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Susunan Pengurus & Dewan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('articles')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Kajian & Artikel (4 Bahasa)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('framework')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Kerangka Pemulihan Kristiani
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('document')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Unduh Dokumen PDF
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Konsultasi & Pokok Doa
                </button>
              </li>
            </ul>
          </div>

          {/* Leadership Roster Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-stone-400">
              Dewan & Pengurus
            </h4>
            <div className="text-xs text-stone-400 space-y-1.5 leading-relaxed">
              <p><strong className="text-stone-200">Penasihat:</strong> dr. Kasan Susilo, MTh.</p>
              <p><strong className="text-stone-200">Ketua:</strong> Pdm. Dr. Sori Tjandrah Simbolon</p>
              <p><strong className="text-stone-200">Sekretaris:</strong> Ev. Victor Christianto</p>
              <p><strong className="text-stone-200">Bendahara:</strong> Ibu Caecilia Titin</p>
              <p><strong className="text-stone-200">Anggota:</strong> Pdt. Dr. Isak Suria, Pdt. L. Harumia Tedja, MTh, Ibu Elyse</p>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Ethical Assurance */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            {t.footerRights}
          </div>
          <div className="flex items-center gap-1.5 text-stone-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Prinsip Primum Non-Nocere & Pelayanan Kasih Kristus</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
