/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LeadershipSection } from './components/LeadershipSection';
import { ArticlesSection } from './components/ArticlesSection';
import { RecoveryFramework } from './components/RecoveryFramework';
import { DocumentArchive } from './components/DocumentArchive';
import { CounselingInquiry } from './components/CounselingInquiry';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('id');
  const [activeSection, setActiveSection] = useState<string>('hero');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-amber-100 selection:text-stone-900">
      {/* Top Navigation Bar adhering to Top Bar Contract */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section with official foundation declaration & leadership overview */}
        <Hero
          currentLang={currentLang}
          onNavigate={handleNavigate}
        />

        {/* 2. Foundation Leadership & Governance */}
        <LeadershipSection
          currentLang={currentLang}
        />

        {/* 3. Foundational Treatises & Articles (Indonesian, English, Chinese, Filipino) */}
        <ArticlesSection
          currentLang={currentLang}
          onLanguageChange={setCurrentLang}
          onNavigateToDocument={() => handleNavigate('document')}
        />

        {/* 4. Christian Recovery & Care Framework */}
        <RecoveryFramework
          currentLang={currentLang}
          onNavigateToContact={() => handleNavigate('contact')}
        />

        {/* 5. Original PDF Document Archive & Viewer */}
        <DocumentArchive
          currentLang={currentLang}
        />

        {/* 6. Confidential Pastoral Counseling & Prayer Support */}
        <CounselingInquiry
          currentLang={currentLang}
        />
      </main>

      {/* Institutional Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
