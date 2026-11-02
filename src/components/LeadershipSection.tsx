import React from 'react';
import { ShieldCheck, UserCheck, Stethoscope, Award, FileText, Heart, Users } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS, BOARD_MEMBERS } from '../data/translations';

interface LeadershipSectionProps {
  currentLang: Language;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ currentLang }) => {
  const t = UI_TRANSLATIONS[currentLang];

  const getRoleIcon = (roleName: string) => {
    if (roleName.includes('Penasihat')) return <Stethoscope className="w-5 h-5 text-amber-800" />;
    if (roleName.includes('Ketua')) return <Award className="w-5 h-5 text-amber-900" />;
    if (roleName.includes('Sekretaris')) return <FileText className="w-5 h-5 text-stone-700" />;
    if (roleName.includes('Bendahara')) return <ShieldCheck className="w-5 h-5 text-stone-700" />;
    if (roleName.includes('Elyse')) return <Heart className="w-5 h-5 text-rose-800" />;
    return <UserCheck className="w-5 h-5 text-stone-600" />;
  };

  return (
    <section id="about" className="py-16 sm:py-20 border-b border-stone-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-900 mb-2">
            Organisasi & Tata Kelola Pelayanan
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight">
            {t.leadershipTitle}
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            {t.leadershipSubtitle}
          </p>
        </div>

        {/* Foundation Identity Card */}
        <div className="mb-12 bg-stone-50 border border-stone-200 rounded-xl p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-stone-200 pb-4 md:pb-0 md:pr-6">
              <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block">
                Nama Resmi Lembaga
              </span>
              <h3 className="font-serif text-xl font-semibold text-stone-900 mt-1">
                Yayasan Sukma Kawula Mahardika
              </h3>
              <p className="text-xs text-stone-500 mt-1 font-mono">
                Didirikan: April 2023
              </p>
            </div>
            <div className="md:col-span-2 text-sm text-stone-700 leading-relaxed space-y-2">
              <p>
                <strong className="text-stone-900 font-semibold">Tujuan Pokok:</strong> Membantu dengan segenap pengetahuan medis-psikologis, kepedulian profesional, dan sebagai sesama manusia di dalam Yesus Kristus untuk mendampingi kaum remaja dan pemuda yang ingin dipulihkan dari kecenderungan LGBTQ.
              </p>
              <p className="text-stone-600 text-xs">
                Misi kami dijalankan melalui pendampingan berbasis kasih dan iman, menghormati martabat dan hak asasi setiap individu, tanpa paksaan (prinsip etika non-koersif).
              </p>
            </div>
          </div>
        </div>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {BOARD_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] border border-stone-200 rounded-lg p-5 flex flex-col justify-between hover:border-amber-700/60 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-stone-200/70">
                  <span className="text-xs font-semibold text-amber-900 tracking-wider uppercase">
                    {member.role}
                  </span>
                  <div className="p-1.5 bg-stone-100 rounded-md">
                    {getRoleIcon(member.role)}
                  </div>
                </div>

                <h4 className="font-serif text-lg font-semibold text-stone-900">
                  {member.name}
                </h4>

                {member.title && (
                  <p className="text-xs text-stone-500 font-medium mt-1">
                    {member.title}
                  </p>
                )}

                {member.bio && (
                  <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200/50 flex items-center justify-between text-[11px] text-stone-400">
                <span>Pelayanan YSKM</span>
                <span>Sejak April 2023</span>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Statement */}
        <div className="mt-12 text-center text-xs text-stone-500 max-w-2xl mx-auto">
          Pelayanan ini beranggotakan para rohaniwan Kristen, tenaga medis, pakar konseling, dan pemerhati generasi muda yang bersatu dalam visi pemulihan holistik.
        </div>
      </div>
    </section>
  );
};
