import React, { useState } from 'react';
import { Globe, Menu, X, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  activeSection,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = UI_TRANSLATIONS[currentLang];

  const languages: { code: Language; label: string; nativeName: string }[] = [
    { code: 'id', label: 'ID', nativeName: 'Bahasa Indonesia' },
    { code: 'en', label: 'EN', nativeName: 'English' },
    { code: 'zh', label: '中文', nativeName: '中文 (Mandarin)' },
    { code: 'tl', label: 'TL', nativeName: 'Filipino / Tagalog' }
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Strict single element, no clutter) */}
          <button
            onClick={() => handleNavClick('hero')}
            className="text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-amber-900 transition-colors whitespace-nowrap shrink-0 block">
              Sukma Kawula Mahardika
            </span>
            <span className="text-[11px] uppercase tracking-wider text-stone-600 font-sans block">
              Yayasan Pelayanan Kasih & Pemulihan
            </span>
          </button>

          {/* Zone 2: 4-5 Concise single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 border-b-2 ${
                activeSection === 'about' ? 'border-amber-800 text-stone-950 font-semibold' : 'border-transparent'
              }`}
            >
              {t.navAbout}
            </button>
            <button
              onClick={() => handleNavClick('articles')}
              className={`hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 border-b-2 ${
                activeSection === 'articles' ? 'border-amber-800 text-stone-950 font-semibold' : 'border-transparent'
              }`}
            >
              {t.navArticles}
            </button>
            <button
              onClick={() => handleNavClick('framework')}
              className={`hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 border-b-2 ${
                activeSection === 'framework' ? 'border-amber-800 text-stone-950 font-semibold' : 'border-transparent'
              }`}
            >
              {t.navFramework}
            </button>
            <button
              onClick={() => handleNavClick('document')}
              className={`hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 border-b-2 ${
                activeSection === 'document' ? 'border-amber-800 text-stone-950 font-semibold' : 'border-transparent'
              }`}
            >
              {t.navDocument}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 border-b-2 ${
                activeSection === 'contact' ? 'border-amber-800 text-stone-950 font-semibold' : 'border-transparent'
              }`}
            >
              {t.navContact}
            </button>
          </nav>

          {/* Zone 3: Language Selector & Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Selector Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200/80 rounded-md border border-stone-300 transition-colors cursor-pointer">
                <Globe className="w-3.5 h-3.5 text-stone-500" aria-hidden="true" />
                <span className="uppercase tracking-wider font-semibold">{currentLang}</span>
                <span className="text-stone-600 hidden sm:inline">({languages.find(l => l.code === currentLang)?.label})</span>
              </div>
              <div className="absolute right-0 mt-1 w-44 bg-white border border-stone-200 rounded-lg shadow-lg py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-all duration-150 z-50">
                <div className="px-3 py-1 text-[11px] font-medium text-stone-600 uppercase tracking-wider border-b border-stone-100">
                  {t.langSelect}
                </div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code)}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-amber-50 hover:text-amber-900 transition-colors cursor-pointer ${
                      currentLang === lang.code ? 'font-semibold text-amber-900 bg-amber-50/60' : 'text-stone-700'
                    }`}
                  >
                    <span>{lang.nativeName}</span>
                    <span className="text-[10px] text-stone-600 uppercase font-mono">{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-amber-900 rounded-md transition-colors shadow-sm whitespace-nowrap cursor-pointer"
            >
              <HeartHandshake className="w-4 h-4 text-amber-300" aria-hidden="true" />
              <span>{t.ctaConsultation}</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-stone-200 space-y-2">
            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-stone-800 hover:bg-stone-100 rounded"
            >
              {t.navAbout}
            </button>
            <button
              onClick={() => handleNavClick('articles')}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-stone-800 hover:bg-stone-100 rounded"
            >
              {t.navArticles}
            </button>
            <button
              onClick={() => handleNavClick('framework')}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-stone-800 hover:bg-stone-100 rounded"
            >
              {t.navFramework}
            </button>
            <button
              onClick={() => handleNavClick('document')}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-stone-800 hover:bg-stone-100 rounded"
            >
              {t.navDocument}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-stone-800 hover:bg-stone-100 rounded"
            >
              {t.navContact}
            </button>
            <div className="pt-2 border-t border-stone-200">
              <div className="text-xs font-semibold text-stone-500 px-3 py-1 uppercase tracking-wider">
                {t.langSelect}
              </div>
              <div className="grid grid-cols-2 gap-2 px-3 pt-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2 text-xs rounded border text-left ${
                      currentLang === lang.code
                        ? 'border-amber-700 bg-amber-50 text-amber-900 font-semibold'
                        : 'border-stone-200 text-stone-700 bg-white'
                    }`}
                  >
                    {lang.nativeName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
