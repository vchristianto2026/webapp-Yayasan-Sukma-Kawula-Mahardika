import React, { useState } from 'react';
import { FileText, Download, Eye, EyeOff, ExternalLink, ShieldCheck, BookOpen, Layers } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface DocumentArchiveProps {
  currentLang: Language;
}

export const DocumentArchive: React.FC<DocumentArchiveProps> = ({ currentLang }) => {
  const t = UI_TRANSLATIONS[currentLang];
  const [showEmbed, setShowEmbed] = useState<boolean>(false);

  const pdfUrl = '/assets/aistudio/ilovepdf_merged__51__9424f379.pdf';

  const sectionsInPdf = [
    {
      title: 'Bagian I: Sukma Kawula Mahardika - Menelusuri Jejak Kedaulatan Batin',
      author: 'Ev. Victor Christianto',
      pages: 'Hal. 1 – 9',
      desc: 'Sintesis filsafat Jawa klasik (Sukma, Kawula, Mahardika) dengan Injil Yohanes 8:32-36 dan implikasi bagi pemulihan batin.'
    },
    {
      title: 'Bagian II: Kajian Medis & Psikososial — HIV/AIDS & Dinamika LGBTQ',
      author: 'Yayasan Sukma Kawula Mahardika (Featuring: Bro Andreas dkk)',
      pages: 'Hal. 10 – 24',
      desc: 'Etiologi biologis/neuroanatomi, Minority Stress Theory, CBT adaptif, konseling ego-distonik, serta etika primum non-nocere.'
    },
    {
      title: 'Bagian III: Memaknai Puasa yang Sejati — Yesaya 58 & Pengajaran Yesus',
      author: 'Ev. Victor Christianto',
      pages: 'Hal. 25 – 35',
      desc: 'Membongkar belenggu kelaliman, konsep belas kasihan Chesed dan Rachamim, serta panggilan gereja sebagai tabib pemulih sesama.'
    }
  ];

  return (
    <section id="document" className="py-16 sm:py-20 border-b border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-900 mb-2">
            Dokumen Sumber & Arsip Naskah
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight">
            {t.docSectionTitle}
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            {t.docSectionSubtitle}
          </p>
        </div>

        {/* Primary Document Card */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-xs mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-stone-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/60 shrink-0">
                <FileText className="w-8 h-8 text-amber-900" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-900 font-semibold block mb-1">
                  Arsip Naskah PDF (35 Halaman Lengkap)
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-stone-900">
                  {t.docFilename}
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 mt-1">
                  {t.docPublicationInfo}
                </p>
              </div>
            </div>

            {/* Actions: Download & Toggle Viewer */}
            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href={pdfUrl}
                download="Naskah_YSKM_Prolog_HIV_LGBTQ_Pemulihan.pdf"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-amber-950 hover:bg-stone-900 rounded-lg transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-300" />
                <span>{t.docDownloadButton}</span>
              </a>

              <button
                onClick={() => setShowEmbed(!showEmbed)}
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200/80 rounded-lg border border-stone-300 transition-colors cursor-pointer"
              >
                {showEmbed ? (
                  <>
                    <EyeOff className="w-4 h-4 text-stone-600" />
                    <span>{t.docCloseEmbed}</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4 text-stone-600" />
                    <span>{t.docOpenEmbed}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Chapters and Subdivisions Breakdown inside the PDF */}
          <div className="pt-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-stone-500 block mb-4">
              Susunan Isi Dokumen Resmi:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sectionsInPdf.map((sec, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-stone-200/80 bg-stone-50/60 hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono font-semibold text-amber-900 mb-1">
                    <span>{sec.pages}</span>
                    <Layers className="w-3.5 h-3.5 text-stone-400" />
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-stone-900 leading-snug">
                    {sec.title}
                  </h4>
                  <div className="text-[11px] text-stone-500 italic mt-1">
                    {sec.author}
                  </div>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {sec.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Embedded PDF Viewer Frame (when toggled) */}
        {showEmbed && (
          <div className="bg-white border border-stone-200 rounded-2xl p-4 max-w-5xl mx-auto shadow-md mb-8 transition-all">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-200 text-xs text-stone-600">
              <span className="font-semibold text-stone-800">
                Pratinjau Dokumen PDF Asli (/assets/aistudio/ilovepdf_merged__51__9424f379.pdf)
              </span>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-amber-900 hover:underline font-semibold"
              >
                <span>Buka Layar Penuh</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="w-full h-[650px] bg-stone-100 rounded-lg overflow-hidden border border-stone-300">
              <iframe
                src={`${pdfUrl}#view=FitH`}
                title="Yayasan Sukma Kawula Mahardika Naskah Asli"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
