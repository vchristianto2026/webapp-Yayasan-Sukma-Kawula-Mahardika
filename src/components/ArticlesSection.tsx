import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  Search, 
  Volume2, 
  VolumeX, 
  Type, 
  ChevronRight, 
  Bookmark, 
  Download, 
  ExternalLink,
  Share2,
  Check
} from 'lucide-react';
import { Language, Article } from '../types';
import { FOUNDATION_ARTICLES } from '../data/articles';
import { UI_TRANSLATIONS } from '../data/translations';

interface ArticlesSectionProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigateToDocument: () => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  currentLang,
  onLanguageChange,
  onNavigateToDocument
}) => {
  const t = UI_TRANSLATIONS[currentLang];
  const [selectedArticleId, setSelectedArticleId] = useState<string>(FOUNDATION_ARTICLES[0].id);
  const [activeChapterId, setActiveChapterId] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const selectedArticle = FOUNDATION_ARTICLES.find(a => a.id === selectedArticleId) || FOUNDATION_ARTICLES[0];

  // Filter articles based on search query
  const filteredArticles = FOUNDATION_ARTICLES.filter(article => {
    const title = article.title[currentLang].toLowerCase();
    const summary = article.summary[currentLang].toLowerCase();
    const query = searchQuery.toLowerCase();
    return title.includes(query) || summary.includes(query) || article.keyScriptures.some(s => s.toLowerCase().includes(query));
  });

  // Text size classes
  const getTextSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-lg leading-relaxed';
      case 'xlarge':
        return 'text-xl leading-loose';
      default:
        return 'text-base leading-relaxed';
    }
  };

  // Text-to-speech handler
  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Fitur pembaca suara tidak didukung pada browser ini.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const currentTitle = selectedArticle.title[currentLang];
    const currentSummary = selectedArticle.summary[currentLang];
    const currentChapters = selectedArticle.chapters[currentLang];
    const firstChapterText = currentChapters.length > 0 ? currentChapters[0].content.join(' ') : '';
    const fullText = `${currentTitle}. ${currentSummary}. ${firstChapterText}`;

    const utterance = new SpeechSynthesisUtterance(fullText);
    const langCodes: Record<Language, string> = {
      id: 'id-ID',
      en: 'en-US',
      zh: 'zh-CN',
      tl: 'fil-PH'
    };
    utterance.lang = langCodes[currentLang] || 'id-ID';
    utterance.rate = 0.95;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const handleCopyCitation = () => {
    const citation = `${selectedArticle.title[currentLang]} - Yayasan Sukma Kawula Mahardika. Diterbitkan: ${selectedArticle.date}`;
    navigator.clipboard?.writeText(citation);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const chapters = selectedArticle.chapters[currentLang] || [];

  return (
    <section id="articles" className="py-16 sm:py-20 border-b border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-900 mb-2">
            Perpustakaan & Naskah Kajian Resmi
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight">
            {t.articlesTitle}
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            {t.articlesSubtitle}
          </p>

          {/* Inline Multi-Language Switcher for Articles */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-1.5 p-1 bg-stone-100 rounded-lg border border-stone-200">
            {(['id', 'en', 'zh', 'tl'] as Language[]).map((lang) => {
              const labels: Record<Language, string> = {
                id: 'Bahasa Indonesia',
                en: 'English',
                zh: '中文 (Mandarin)',
                tl: 'Filipino / Tagalog'
              };
              return (
                <button
                  key={lang}
                  onClick={() => {
                    onLanguageChange(lang);
                    if (isSpeaking) {
                      window.speechSynthesis?.cancel();
                      setIsSpeaking(false);
                    }
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                    currentLang === lang
                      ? 'bg-amber-950 text-white shadow-xs font-semibold'
                      : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
                  }`}
                >
                  {labels[lang]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Article Selection Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-start">
          
          {/* Left Column: Article Selector List & Search */}
          <div className="lg:col-span-4 space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-stone-400" aria-hidden="true" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchArticles}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 text-stone-800 placeholder-stone-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-stone-400 hover:text-stone-700"
                >
                  ×
                </button>
              )}
            </div>

            {/* Article Cards List */}
            <div className="space-y-3">
              {filteredArticles.map((article, idx) => {
                const isSelected = article.id === selectedArticle.id;
                return (
                  <button
                    key={article.id}
                    onClick={() => {
                      setSelectedArticleId(article.id);
                      setActiveChapterId('');
                      if (isSpeaking) {
                        window.speechSynthesis?.cancel();
                        setIsSpeaking(false);
                      }
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-amber-800/80 shadow-sm ring-1 ring-amber-800/20'
                        : 'bg-stone-50 hover:bg-white border-stone-200 text-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1.5">
                      <span className="font-semibold text-amber-900 uppercase tracking-wider">
                        Kajian {idx + 1}
                      </span>
                      <span>{article.readTime[currentLang]}</span>
                    </div>
                    <h3 className="font-serif text-base font-semibold text-stone-900 leading-snug line-clamp-2">
                      {article.title[currentLang]}
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                      {article.summary[currentLang]}
                    </p>
                    <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                      <span>{article.category[currentLang]}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-amber-900 translate-x-0.5' : 'text-stone-400'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Direct Document Access Promo */}
            <div className="bg-stone-100/80 border border-stone-200 rounded-xl p-4 text-xs text-stone-700 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-stone-900">
                <FileText className="w-4 h-4 text-amber-900" />
                <span>Dokumen Asli Tersedia</span>
              </div>
              <p className="text-stone-600 leading-relaxed">
                Naskah kajian ini disadur dari berkas kompilasi buku 35 halaman berlisensi resmi YSKM & Kusa Publishing.
              </p>
              <div className="pt-1 flex gap-2">
                <a
                  href="/assets/aistudio/ilovepdf_merged__51__9424f379.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 hover:text-amber-950 underline cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Buka PDF di Tab Baru</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Full Interactive Article Reader */}
          <div className="lg:col-span-8 bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-10 shadow-xs">
            
            {/* Reading Toolbar (Clean unboxed metadata + practical reading controls) */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-stone-200">
              {/* Unboxed Metadata */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                <span className="font-semibold text-amber-900">{selectedArticle.category[currentLang]}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.date}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.readTime[currentLang]}</span>
                {selectedArticle.pdfPageRange && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-stone-600">{selectedArticle.pdfPageRange}</span>
                  </>
                )}
              </div>

              {/* Utility Actions: Font Size, Narration, Citation */}
              <div className="flex items-center gap-2">
                {/* Font Size Toggle */}
                <div className="flex items-center bg-stone-100 rounded-md p-0.5 border border-stone-200 text-xs">
                  <span className="px-2 text-stone-500 flex items-center gap-1">
                    <Type className="w-3 h-3" />
                  </span>
                  <button
                    onClick={() => setFontSize('normal')}
                    className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                      fontSize === 'normal' ? 'bg-white font-semibold text-stone-900 shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                    }`}
                    title="Font Normal"
                  >
                    A
                  </button>
                  <button
                    onClick={() => setFontSize('large')}
                    className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                      fontSize === 'large' ? 'bg-white font-semibold text-stone-900 shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                    }`}
                    title="Font Besar"
                  >
                    A+
                  </button>
                  <button
                    onClick={() => setFontSize('xlarge')}
                    className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                      fontSize === 'xlarge' ? 'bg-white font-semibold text-stone-900 shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                    }`}
                    title="Font Sangat Besar"
                  >
                    A++
                  </button>
                </div>

                {/* Text-to-speech button */}
                <button
                  onClick={handleToggleSpeech}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                    isSpeaking
                      ? 'bg-amber-100 border-amber-300 text-amber-900 font-semibold'
                      : 'bg-stone-100 hover:bg-stone-200/80 border-stone-200 text-stone-700'
                  }`}
                  title={isSpeaking ? t.stopNarration : t.listenNarration}
                >
                  {isSpeaking ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-amber-900" />
                      <span className="hidden sm:inline">{t.stopNarration}</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-stone-600" />
                      <span className="hidden sm:inline">{t.listenNarration}</span>
                    </>
                  )}
                </button>

                {/* Copy Citation */}
                <button
                  onClick={handleCopyCitation}
                  className="p-1.5 bg-stone-100 hover:bg-stone-200/80 rounded-md border border-stone-200 text-stone-700 transition-colors cursor-pointer"
                  title="Salin Sitasi Artikel"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Article Heading & Subtitle */}
            <div className="mb-8">
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-stone-900 leading-tight text-balance">
                {selectedArticle.title[currentLang]}
              </h1>
              <p className="mt-3 font-serif text-base sm:text-lg text-stone-600 italic leading-relaxed">
                {selectedArticle.subtitle[currentLang]}
              </p>
              
              <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500">
                <span>{selectedArticle.author[currentLang]}</span>
                <div className="flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-amber-800" />
                  <span>Landasan Firman: {selectedArticle.keyScriptures.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Editorial Summary Box */}
            <div className="mb-10 bg-[#FAF8F5] border border-stone-200/80 rounded-xl p-5 sm:p-6 text-sm text-stone-700 leading-relaxed">
              <span className="text-xs uppercase tracking-widest font-semibold text-amber-900 block mb-2">
                Ringkasan Eksekutif
              </span>
              <p className="font-sans leading-relaxed text-stone-800">
                {selectedArticle.summary[currentLang]}
              </p>
            </div>

            {/* Interactive Chapter Outline Navigation Bar */}
            {chapters.length > 0 && (
              <div className="mb-10 pb-6 border-b border-stone-200/70">
                <span className="text-xs uppercase tracking-wider font-semibold text-stone-500 block mb-3">
                  {t.tableOfContents}
                </span>
                <div className="flex flex-wrap gap-2">
                  {chapters.map((chap, i) => (
                    <button
                      key={chap.id}
                      onClick={() => {
                        setActiveChapterId(chap.id);
                        const el = document.getElementById(chap.id);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`text-xs px-3 py-1.5 rounded-md border transition-all text-left cursor-pointer ${
                        activeChapterId === chap.id
                          ? 'bg-amber-950 text-white border-amber-950 font-semibold'
                          : 'bg-white hover:bg-stone-100 border-stone-200 text-stone-700'
                      }`}
                    >
                      {i + 1}. {chap.title.split(':')[0]}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chapters Reading Flow */}
            <div className={`space-y-12 font-serif text-stone-800 ${getTextSizeClass()}`}>
              {chapters.map((chap, index) => (
                <article key={chap.id} id={chap.id} className="scroll-mt-28">
                  {/* Chapter Title */}
                  <h2 className="font-serif text-xl sm:text-2xl font-semibold text-stone-900 mb-4 pb-2 border-b border-stone-100">
                    {chap.title}
                  </h2>

                  {/* Pull Quote when present */}
                  {chap.keyQuote && (
                    <blockquote className="my-5 px-6 py-4 bg-stone-50 border-l-2 border-amber-800 text-stone-700 italic text-base font-serif rounded-r-lg">
                      {chap.keyQuote}
                    </blockquote>
                  )}

                  {/* Chapter Paragraphs */}
                  <div className="space-y-4 font-sans text-stone-700 font-normal leading-relaxed">
                    {chap.content.map((paragraph, pIdx) => (
                      <p key={pIdx}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* Article Footer Sign-off */}
            <div className="mt-14 pt-8 border-t border-stone-200 text-center text-xs text-stone-500 space-y-2">
              <p className="font-serif italic text-stone-600">
                &ldquo;Kiranya kebenaran firman Tuhan dan pertolongan Roh Kudus senantiasa memerdekakan dan memulihkan jiwa kita.&rdquo;
              </p>
              <p>
                Diterbitkan secara resmi oleh Yayasan Sukma Kawula Mahardika.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
