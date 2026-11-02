import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Send, 
  Lock, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface CounselingInquiryProps {
  currentLang: Language;
}

export const CounselingInquiry: React.FC<CounselingInquiryProps> = ({ currentLang }) => {
  const t = UI_TRANSLATIONS[currentLang];
  
  const [formData, setFormData] = useState({
    name: '',
    role: 'youth',
    contact: '',
    topic: 'personal',
    message: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.contact || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      role: 'youth',
      contact: '',
      topic: 'personal',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-b border-stone-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-900 mb-2">
            Ruang Aman & Pelayanan Pribadi
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#FAF8F5] border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-xs">
          
          {submitted ? (
            /* Success confirmation card */
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 mb-2">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-stone-900">
                {t.formSuccessTitle}
              </h3>
              <p className="text-sm text-stone-600 max-w-lg mx-auto leading-relaxed">
                {t.formSuccessDesc}
              </p>

              <div className="bg-white border border-stone-200 rounded-xl p-4 max-w-md mx-auto text-left text-xs text-stone-700 space-y-2 mt-6">
                <div className="flex items-center gap-2 font-semibold text-amber-950">
                  <Sparkles className="w-4 h-4 text-amber-700" />
                  <span>Komitmen Doa Kami</span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  Nama dan pokok doa Anda telah kami bawa dalam doa pribadi tim pastoral Yayasan Sukma Kawula Mahardika. Tuhan Yesus menyertai dan menguatkan langkah Anda.
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors cursor-pointer"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            </div>
          ) : (
            /* Contact / Inquiry Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Privacy Notice Banner */}
              <div className="flex items-start gap-3 p-3.5 bg-white border border-stone-200 rounded-xl text-xs text-stone-600">
                <Lock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 font-semibold">{t.formPrivacyGuarantee}</strong>
                  <p className="mt-0.5 text-stone-500">
                    Informasi ini hanya dibaca oleh tim konselor resmi yayasan.
                  </p>
                </div>
              </div>

              {/* Name / Alias field */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  {t.formName}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Misal: R. atau Yohanes (Opsional / Boleh Samaran)"
                  className="w-full px-4 py-2.5 text-sm bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 text-stone-900 placeholder-stone-400"
                />
                <p className="text-[11px] text-stone-500 mt-1">
                  {t.formNameHelp}
                </p>
              </div>

              {/* Status / Role Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    {t.formRole}
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 text-stone-900 cursor-pointer"
                  >
                    <option value="youth">{t.formRoleYouth}</option>
                    <option value="teen">{t.formRoleTeen}</option>
                    <option value="parent">{t.formRoleParent}</option>
                    <option value="pastor">{t.formRolePastor}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    {t.formTopic}
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 text-stone-900 cursor-pointer"
                  >
                    <option value="personal">{t.formTopicPersonal}</option>
                    <option value="family">{t.formTopicFamily}</option>
                    <option value="theology">{t.formTopicTheology}</option>
                  </select>
                </div>
              </div>

              {/* Contact Method */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  {t.formContactMethod} <span className="text-rose-700">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="email@anda.com atau +62 812-xxxx-xxxx"
                  className="w-full px-4 py-2.5 text-sm bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 text-stone-900 placeholder-stone-400"
                />
              </div>

              {/* Message / Prayer Request */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  {t.formMessage} <span className="text-rose-700">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ceritakan dengan bebas apa yang sedang Anda gumulkan atau pertanyaan yang ingin Anda diskusikan..."
                  className="w-full px-4 py-2.5 text-sm bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 text-stone-900 placeholder-stone-400 resize-y"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-white bg-amber-950 hover:bg-stone-900 disabled:opacity-50 rounded-lg transition-colors cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>{isSubmitting ? 'Mengirim...' : t.formSubmit}</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
