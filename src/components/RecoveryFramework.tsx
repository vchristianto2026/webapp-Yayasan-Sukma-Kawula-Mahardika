import React, { useState } from 'react';
import { 
  Sparkles, 
  Brain, 
  Heart, 
  Stethoscope, 
  ShieldAlert, 
  Compass, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  BookMarked
} from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface RecoveryFrameworkProps {
  currentLang: Language;
  onNavigateToContact: () => void;
}

export const RecoveryFramework: React.FC<RecoveryFrameworkProps> = ({
  currentLang,
  onNavigateToContact
}) => {
  const t = UI_TRANSLATIONS[currentLang];
  const [activeTab, setActiveTab] = useState<'pillars' | 'comparison' | 'stages'>('pillars');

  const pillars = [
    {
      num: '01',
      title: t.pillar1Title,
      subtitle: 'Kedaulatan Jiwa & Status Anak Allah (John 8:36)',
      desc: t.pillar1Desc,
      icon: Sparkles,
      color: 'text-amber-900',
      bg: 'bg-amber-50/70',
      border: 'border-amber-200'
    },
    {
      num: '02',
      title: t.pillar2Title,
      subtitle: 'CBT Adaptif & Regulasi Emosi / Hasrat',
      desc: t.pillar2Desc,
      icon: Brain,
      color: 'text-stone-800',
      bg: 'bg-stone-50',
      border: 'border-stone-200'
    },
    {
      num: '03',
      title: t.pillar3Title,
      subtitle: 'Komunitas Kasih Tanpa Stigma (Yesaya 58)',
      desc: t.pillar3Desc,
      icon: Heart,
      color: 'text-rose-900',
      bg: 'bg-rose-50/50',
      border: 'border-rose-200'
    },
    {
      num: '04',
      title: t.pillar4Title,
      subtitle: 'Sinergi Medis, Kedokteran & Psikologi Klinis',
      desc: t.pillar4Desc,
      icon: Stethoscope,
      color: 'text-emerald-900',
      bg: 'bg-emerald-50/50',
      border: 'border-emerald-200'
    }
  ];

  const comparisonData = [
    {
      aspect: 'Landasan Etika',
      coercive: 'Pemaksaan, rasa malu, ancaman spiritual, aversif (DITOLAK KERAS)',
      affirmative: 'Validasi tanpa membahas konflik batin dengan iman',
      yskm: 'Primum Non-Nocere: Kasih tanpa syarat, sukarela, berbasis otonomi & iman'
    },
    {
      aspect: 'Konflik Ego-Distonik',
      coercive: 'Menghukum diri sendiri, memicu keputusasaan dan trauma',
      affirmative: 'Cenderung meminta klien mengabaikan keyakinan agamanya',
      yskm: 'Menyelaraskan dorongan batin dengan keyakinan spiritual dan damai Kristus'
    },
    {
      aspect: 'Metode Intervensi',
      coercive: 'Terapi konversi koersif atau isolasi paksa yang destruktif',
      affirmative: 'Hanya afirmatif sosial tanpa ruang pemulihan spiritual',
      yskm: 'CBT adaptif, sublimasi energi, doa penyembuhan luka batin, pendampingan pastoral'
    },
    {
      aspect: 'Dukungan Komunitas',
      coercive: 'Penghakiman komunitas legalistik yang menuntut kesempurnaan',
      affirmative: 'Dukungan sekuler tanpa rujukan nilai rohani',
      yskm: 'Komunitas Chesed & Rachamim: Merangkul sebagai sesama murid Kristus yang bertumbuh'
    }
  ];

  const stagesData = [
    {
      step: 'Tahap I',
      title: 'Penerimaan Aman & Penstabilan Emosi (Safe Sanctuary)',
      detail: 'Membangun kepercayaan tanpa rasa takut dihakimi. Melepaskan beban rasa bersalah toksik dan ketakutan akan penolakan sosial atau keluarga.'
    },
    {
      step: 'Tahap II',
      title: 'Penelusuran Akar Masalah & Luka Batin (Etiology & Healing)',
      detail: 'Membedah riwayat trauma, kekecewaan figur otoritas/keluarga, atau luka relasional masa lalu melalui konseling berbelas kasih dan doa pemulihan.'
    },
    {
      step: 'Tahap III',
      title: 'Restrukturisasi Kognitif & Pengendalian Diri (Self-Regulation)',
      detail: 'Mempelajari cara menata kembali pikiran negatif otomatis, melatih disiplin batin yang sehat, serta menyalurkan energi seksual/emosional ke arah yang mulia (sublimasi).'
    },
    {
      step: 'Tahap IV',
      title: 'Pengukuhan Identitas Mahardika & Buah Roh (Integrative Freedom)',
      detail: 'Mencapai kedaulatan batin (Mahardika) sebagai hamba Allah (Kawula) yang hidup dalam sukacita, kedewasaan karakter, dan menjadi berkat bagi sesama.'
    }
  ];

  return (
    <section id="framework" className="py-16 sm:py-20 border-b border-stone-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-900 mb-2">
            Metodologi & Panduan Pelayanan
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight">
            {t.frameworkTitle}
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            {t.frameworkSubtitle}
          </p>

          {/* Sub-navigation tabs */}
          <div className="mt-6 inline-flex p-1 bg-stone-100 rounded-lg border border-stone-200">
            <button
              onClick={() => setActiveTab('pillars')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'pillars'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              4 Pilar Utama Pemulihan
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Etika & Perbandingan Pendekatan
            </button>
            <button
              onClick={() => setActiveTab('stages')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'stages'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Tahapan Perjalanan Pemulihan
            </button>
          </div>
        </div>

        {/* Tab 1: 4 Pillars of Christian Recovery */}
        {activeTab === 'pillars' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-8 rounded-xl border ${pillar.border} ${pillar.bg} transition-all hover:shadow-2xs`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold tracking-wider text-stone-600">
                      PILAR {pillar.num}
                    </span>
                    <div className="p-2 bg-white rounded-lg shadow-2xs">
                      <IconComp className={`w-5 h-5 ${pillar.color}`} />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-stone-900 mb-1">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-medium text-stone-700 italic mb-3">
                    {pillar.subtitle}
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Ethical Stance & Comparison Table */}
        {activeTab === 'comparison' && (
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Ethical Banner */}
            <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <ShieldAlert className="w-6 h-6 text-amber-900 shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg font-semibold text-amber-950">
                    {t.ethicsPrinciple}
                  </h4>
                  <p className="mt-2 text-sm text-stone-700 leading-relaxed font-sans">
                    {t.ethicsText}
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto border border-stone-200 rounded-xl bg-white shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-medium">
                  <tr>
                    <th className="py-3 px-4 font-semibold">Dimensi</th>
                    <th className="py-3 px-4 font-semibold text-stone-500">Terapi Konversi Koersif (Ditolak)</th>
                    <th className="py-3 px-4 font-semibold text-stone-500">Pendekatan Sekuler Tertentu</th>
                    <th className="py-3 px-4 font-semibold text-amber-950 bg-amber-50/70">
                      Pendekatan Yayasan Sukma Kawula Mahardika
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-stone-50/50">
                      <td className="py-3.5 px-4 font-semibold text-stone-900 whitespace-nowrap align-top">
                        {row.aspect}
                      </td>
                      <td className="py-3.5 px-4 text-rose-800/90 text-xs leading-relaxed align-top">
                        {row.coercive}
                      </td>
                      <td className="py-3.5 px-4 text-stone-600 text-xs leading-relaxed align-top">
                        {row.affirmative}
                      </td>
                      <td className="py-3.5 px-4 text-stone-900 text-xs leading-relaxed bg-amber-50/30 font-medium align-top">
                        {row.yskm}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Recovery Journey Stages */}
        {activeTab === 'stages' && (
          <div className="max-w-4xl mx-auto space-y-4">
            {stagesData.map((stage, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-amber-700/60 transition-colors"
              >
                <div className="space-y-1 sm:max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-amber-900 uppercase">
                      {stage.step}
                    </span>
                    <span className="text-stone-300">·</span>
                    <h4 className="font-serif text-base font-semibold text-stone-900">
                      {stage.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans pt-1">
                    {stage.detail}
                  </p>
                </div>
                <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 text-stone-400">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to action inside framework */}
        <div className="mt-14 p-6 sm:p-8 bg-stone-900 text-white rounded-2xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg font-medium text-amber-100">
              Apakah Anda atau Orang Terkasih Sedang Mencari Tempat Berteduh?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300">
              Kami siap mendengarkan tanpa menghakimi, mendoakan dengan kasih, dan mendampingi langkah demi langkah.
            </p>
          </div>
          <button
            onClick={onNavigateToContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-stone-900 bg-amber-200 hover:bg-amber-100 rounded-lg transition-colors shrink-0 cursor-pointer"
          >
            <span>Hubungi Konseling Kami</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
