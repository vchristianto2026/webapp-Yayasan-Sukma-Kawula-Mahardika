import { Language, BoardMember } from '../types';

export const UI_TRANSLATIONS: Record<Language, {
  siteTitle: string;
  tagline: string;
  navAbout: string;
  navArticles: string;
  navFramework: string;
  navDocument: string;
  navContact: string;
  ctaConsultation: string;
  langSelect: string;
  
  // Hero
  established: string;
  heroHeadline: string;
  heroOfficialQuote: string;
  heroSubquote: string;
  readOfficialPapers: string;
  consultPrivate: string;
  downloadPdf: string;
  viewOnlineDoc: string;

  // Board
  leadershipTitle: string;
  leadershipSubtitle: string;
  boardAdvisory: string;
  boardChair: string;
  boardSecretary: string;
  boardTreasurer: string;
  boardMembers: string;

  // Articles Section
  articlesTitle: string;
  articlesSubtitle: string;
  chooseArticle: string;
  fontSize: string;
  listenNarration: string;
  stopNarration: string;
  readingNotice: string;
  tableOfContents: string;
  biblicalGrounding: string;
  readFullInPdf: string;
  searchArticles: string;

  // Framework Section
  frameworkTitle: string;
  frameworkSubtitle: string;
  pillar1Title: string;
  pillar1Desc: string;
  pillar2Title: string;
  pillar2Desc: string;
  pillar3Title: string;
  pillar3Desc: string;
  pillar4Title: string;
  pillar4Desc: string;
  ethicsTitle: string;
  ethicsPrinciple: string;
  ethicsText: string;

  // Document Section
  docSectionTitle: string;
  docSectionSubtitle: string;
  docFilename: string;
  docPublicationInfo: string;
  docDownloadButton: string;
  docOpenEmbed: string;
  docCloseEmbed: string;

  // Consultation
  contactTitle: string;
  contactSubtitle: string;
  formName: string;
  formNameHelp: string;
  formRole: string;
  formRoleTeen: string;
  formRoleYouth: string;
  formRoleParent: string;
  formRolePastor: string;
  formContactMethod: string;
  formTopic: string;
  formTopicPersonal: string;
  formTopicFamily: string;
  formTopicTheology: string;
  formMessage: string;
  formSubmit: string;
  formSuccessTitle: string;
  formSuccessDesc: string;
  formPrivacyGuarantee: string;

  // Footer
  footerQuote: string;
  footerRights: string;
  footerAddress: string;
}> = {
  id: {
    siteTitle: 'Yayasan Sukma Kawula Mahardika',
    tagline: 'Pendampingan Berbasis Kasih dan Iman dalam Yesus Kristus',
    navAbout: 'Tentang Kami',
    navArticles: 'Kajian & Artikel',
    navFramework: 'Pendekatan Pemulihan',
    navDocument: 'Dokumen Asli (PDF)',
    navContact: 'Konsultasi & Doa',
    ctaConsultation: 'Hubungi Kami',
    langSelect: 'Bahasa',

    established: 'Berdiri: April 2023',
    heroHeadline: 'Kedaulatan Batin dan Pemulihan Sejati di dalam Yesus Kristus',
    heroOfficialQuote: 'Kami adalah yayasan yang baru beberapa waktu dibentuk, bernama Yayasan Sukma Kawula Mahardika dan bertujuan untuk membantu dengan segenap pengetahuan dan kepedulian profesional kami dan juga sebagai sesama manusia di dalam Yesus Kristus untuk membantu kaum remaja dan kaum muda yang ingin dipulihkan dari LGBTQ. Kami berkomitmen menyediakan pendampingan berbasis kasih dan iman untuk mendukung perjalanan pemulihan mereka.',
    heroSubquote: 'Berdiri April 2023 dengan landasan iman Kristiani, etika medis-psikologis non-koersif, dan kebijaksanaan kedaulatan batin.',
    readOfficialPapers: 'Baca Kajian Pendahuluan',
    consultPrivate: 'Permohonan Pendampingan',
    downloadPdf: 'Unduh Berkas Lengkap (PDF)',
    viewOnlineDoc: 'Lihat Naskah Lengkap',

    leadershipTitle: 'Susunan Dewan & Pengurus Yayasan',
    leadershipSubtitle: 'Para hamba Tuhan, dokter, konselor, dan pengurus yang mengabdikan diri dalam pelayanan kasih ini.',
    boardAdvisory: 'Penasihat',
    boardChair: 'Ketua',
    boardSecretary: 'Sekretaris',
    boardTreasurer: 'Bendahara',
    boardMembers: 'Anggota Dewan',

    articlesTitle: 'Artikel Pendahuluan & Kajian Teologis-Medis',
    articlesSubtitle: 'Tersedia dalam 4 bahasa untuk memperluas pemahaman mengenai kedaulatan batin, etika pemulihan, dan belas kasihan Kristus.',
    chooseArticle: 'Pilih Artikel',
    fontSize: 'Ukuran Huruf',
    listenNarration: 'Dengarkan Bacaan',
    stopNarration: 'Hentikan Bacaan',
    readingNotice: 'Naskah resmi diterbitkan oleh Yayasan Sukma Kawula Mahardika.',
    tableOfContents: 'Daftar Pembahasan',
    biblicalGrounding: 'Ayat Kunci Landasan',
    readFullInPdf: 'Halaman Naskah Asli',
    searchArticles: 'Cari topik, ayat, atau konsep...',

    frameworkTitle: 'Kerangka Perlakuan & Pemulihan Kristiani',
    frameworkSubtitle: 'Mengintegrasikan kearifan spiritual Nusantara, teologi Injil, psikologi kognitif (CBT), dan etika medis tanpa pemaksaan.',
    pillar1Title: '1. Pemulihan Sukma & Identitas Ilahi',
    pillar1Desc: 'Menemukan kembali jati diri sejati sebagai anak yang dikasihi Allah di dalam Kristus (Yohanes 8:36). Menyadari posisi diri sebagai Kawula yang berserah pada Gusti, mematahkan belenggu kecemasan dan identitas semu.',
    pillar2Title: '2. Restrukturisasi Kognitif & Sublimasi Energi',
    pillar2Desc: 'Membantu kaum muda mengenali distorsi berpikir, mengelola hasrat seksual/emosional secara sehat (self-regulation), dan mengarahkan energi batin pada tujuan-tujuan yang bermakna dan membangun.',
    pillar3Title: '3. Komunitas Kasih (Chesed & Rachamim)',
    pillar3Desc: 'Menyediakan ruang persaudaraan yang aman dan bebas dari stigma atau penghakiman, berakar pada belas kasihan mendalam (rachamim) dan kasih setia yang tak berkesudahan (chesed).',
    pillar4Title: '4. Kolaborasi Medis & Kesehatan Mental',
    pillar4Desc: 'Menangani dampak stres minoritas, pencegahan dan penanganan medis komprehensif (termasuk skrining kesehatan, edukasi HIV/PMS), bersama dokter dan psikolog profesional.',
    ethicsTitle: 'Komitmen Etika Klinis & Pastoral',
    ethicsPrinciple: 'Primum Non-Nocere (Pertama, Jangan Merugikan)',
    ethicsText: 'Yayasan menolak keras segala bentuk terapi konversi koersif atau metode aversif yang memaksa. Pendampingan kami menghormati otonomi pribadi, berakar pada kasih karunia, dan hanya melayani mereka yang secara sukarela dan bersungguh-sungguh mencari pemulihan batin dalam Kristus.',

    docSectionTitle: 'Naskah Dokumen & Publikasi Resmi',
    docSectionSubtitle: 'Akses langsung ke arsip kompilasi buku dan naskah teologis-psikosial Yayasan Sukma Kawula Mahardika.',
    docFilename: 'Prolog Isyu HIV/LGBTQ & Kedaulatan Batin - Yayasan Sukma Kawula Mahardika',
    docPublicationInfo: 'Kompilasi Naskah Komprehensif • Diterbitkan bersama Kusa Publishing & Sekretariat YSKM',
    docDownloadButton: 'Unduh Dokumen PDF Resmi',
    docOpenEmbed: 'Tampilkan Pembaca Dokumen',
    docCloseEmbed: 'Tutup Pembaca Dokumen',

    contactTitle: 'Pendampingan Konseling & Pokok Doa',
    contactSubtitle: 'Bagi kaum remaja, dewasa muda, maupun orang tua yang membutuhkan teman berbincang dan bimbingan rohani yang aman serta rahasia.',
    formName: 'Nama Lengkap / Nama Samaran',
    formNameHelp: 'Anda bebas mencantumkan inisial atau nama samaran demi kenyamanan Anda.',
    formRole: 'Status / Peran',
    formRoleTeen: 'Remaja (13-18 tahun)',
    formRoleYouth: 'Pemuda / Dewasa Muda (19-35 tahun)',
    formRoleParent: 'Orang Tua / Keluarga',
    formRolePastor: 'Hamba Tuhan / Konselor / Pendidik',
    formContactMethod: 'Kontak yang Dapat Dihubungi (Email / WhatsApp)',
    formTopic: 'Kebutuhan Pendampingan',
    formTopicPersonal: 'Konseling Pemulihan Pribadi',
    formTopicFamily: 'Konseling Keluarga & Orang Tua',
    formTopicTheology: 'Diskusi Naskah & Kajian Teologis-Medis',
    formMessage: 'Pesan / Pokok Doa / Pertanyaan Anda',
    formSubmit: 'Kirim Permohonan Pendampingan',
    formSuccessTitle: 'Terima Kasih, Pesan Anda Telah Diterima',
    formSuccessDesc: 'Tim Yayasan Sukma Kawula Mahardika akan memperlakukan permohonan ini dengan penuh kerahasiaan dan merespons dengan penuh kasih dalam Kristus.',
    formPrivacyGuarantee: 'Kerahasiaan Anda Dijamin: Seluruh data dan isi percakapan dilindungi dengan integritas pastoral.',

    footerQuote: '"Dan kamu akan mengetahui kebenaran, dan kebenaran itu akan memerdekakan kamu." — Yohanes 8:32',
    footerRights: 'Hak Cipta © Yayasan Sukma Kawula Mahardika. Dilindungi undang-undang.',
    footerAddress: 'Sekretariat Yayasan Sukma Kawula Mahardika • Didirikan April 2023 • Indonesia'
  },

  en: {
    siteTitle: 'Yayasan Sukma Kawula Mahardika',
    tagline: 'Compassionate Faith-Rooted Accompaniment in Jesus Christ',
    navAbout: 'About Us',
    navArticles: 'Studies & Articles',
    navFramework: 'Recovery Framework',
    navDocument: 'Original Document (PDF)',
    navContact: 'Counseling & Prayer',
    ctaConsultation: 'Contact Us',
    langSelect: 'Language',

    established: 'Established: April 2023',
    heroHeadline: 'Inner Sovereignty & Genuine Restoration in Jesus Christ',
    heroOfficialQuote: 'We are a newly established foundation named Yayasan Sukma Kawula Mahardika. Our mission is to assist with all our professional knowledge and care, and as fellow human beings in Jesus Christ, young people and young adults who seek recovery from LGBTQ traits. We are committed to providing compassionate, faith-rooted accompaniment to support their recovery journey.',
    heroSubquote: 'Founded in April 2023 with a foundation of Christian faith, non-coercive medical-psychological ethics, and classical inner sovereignty.',
    readOfficialPapers: 'Read Introductory Treatises',
    consultPrivate: 'Request Accompaniment',
    downloadPdf: 'Download Full PDF Document',
    viewOnlineDoc: 'Read Original Document',

    leadershipTitle: 'Board of Trustees & Executive Leadership',
    leadershipSubtitle: 'Ministers of God, physicians, researchers, and counselors dedicated to this ministry of love.',
    boardAdvisory: 'Advisor',
    boardChair: 'Chairperson',
    boardSecretary: 'Secretary',
    boardTreasurer: 'Treasurer',
    boardMembers: 'Board Members',

    articlesTitle: 'Introductory Treatises & Theological-Medical Studies',
    articlesSubtitle: 'Available in 4 languages to broaden understanding on inner freedom, recovery ethics, and Christ-like compassion.',
    chooseArticle: 'Select Article',
    fontSize: 'Font Size',
    listenNarration: 'Listen to Audio',
    stopNarration: 'Stop Audio',
    readingNotice: 'Official treatise published by Yayasan Sukma Kawula Mahardika.',
    tableOfContents: 'Table of Chapters',
    biblicalGrounding: 'Scriptural Foundations',
    readFullInPdf: 'Original Document Page',
    searchArticles: 'Search topics, scriptures, or concepts...',

    frameworkTitle: 'Christian Care & Recovery Paradigm',
    frameworkSubtitle: 'Synthesizing Indonesian spiritual wisdom, Gospel theology, cognitive behavioral therapy, and non-coercive clinical ethics.',
    pillar1Title: '1. Soul Restoration & Divine Identity',
    pillar1Desc: 'Rediscovering true identity as a beloved child of God in Christ (John 8:36). Acknowledging oneself as a humble creature (Kawula) resting in the Creator, shattering existential anxieties and false personas.',
    pillar2Title: '2. Cognitive Restructuring & Energy Sublimation',
    pillar2Desc: 'Assisting young individuals in identifying distorted self-beliefs, cultivating healthy self-regulation over sexual/emotional impulses, and sublimating vital energy toward meaningful personal and spiritual callings.',
    pillar3Title: '3. Community of Unfailing Love (Chesed & Rachamim)',
    pillar3Desc: 'Providing a sanctuary free from condemnation and stigma, founded on deep visceral maternal compassion (rachamim) and steadfast covenant loyalty (chesed).',
    pillar4Title: '4. Multidisciplinary Medical & Mental Health Synergy',
    pillar4Desc: 'Addressing minority stress, trauma recovery, and comprehensive pediatric/adolescent health literacy (including HIV/STI education) with certified physicians and clinical psychologists.',
    ethicsTitle: 'Pastoral & Clinical Ethical Covenant',
    ethicsPrinciple: 'Primum Non-Nocere (First, Do No Harm)',
    ethicsText: 'The foundation unequivocally rejects coercive conversion therapy or abrasive techniques. Our care honors personal autonomy, is rooted in God’s grace, and serves those who voluntarily seek holistic spiritual renewal in Christ.',

    docSectionTitle: 'Official Publications & Manuscript Archive',
    docSectionSubtitle: 'Direct access to the complete compilation manuscript of Yayasan Sukma Kawula Mahardika.',
    docFilename: 'Prolog on HIV/LGBTQ Issues & Inner Sovereignty - Yayasan Sukma Kawula Mahardika',
    docPublicationInfo: 'Comprehensive Manuscript Archive • Published with Kusa Publishing & YSKM Secretariat',
    docDownloadButton: 'Download Official PDF',
    docOpenEmbed: 'View Document In-App',
    docCloseEmbed: 'Close Document Viewer',

    contactTitle: 'Pastoral Counseling & Prayer Requests',
    contactSubtitle: 'For teenagers, young adults, or parents seeking a compassionate, safe, and confidential spiritual haven.',
    formName: 'Full Name or Alias',
    formNameHelp: 'You are welcome to use an alias or initials for your comfort and peace of mind.',
    formRole: 'Status / Role',
    formRoleTeen: 'Teenager (13-18 years old)',
    formRoleYouth: 'Young Adult (19-35 years old)',
    formRoleParent: 'Parent / Family Member',
    formRolePastor: 'Pastor / Counselor / Educator',
    formContactMethod: 'Preferred Contact (Email or Phone / WhatsApp)',
    formTopic: 'Care Area',
    formTopicPersonal: 'Personal Restoration Counseling',
    formTopicFamily: 'Family & Parental Guidance',
    formTopicTheology: 'Theological & Medical Inquiries',
    formMessage: 'Your Message / Prayer Need',
    formSubmit: 'Submit Confidential Request',
    formSuccessTitle: 'Thank You, Your Message Has Been Received',
    formSuccessDesc: 'The team at Yayasan Sukma Kawula Mahardika will treat your request with absolute confidentiality and respond in Christ-like love.',
    formPrivacyGuarantee: 'Privacy Guaranteed: All inquiries are kept strictly confidential under pastoral integrity.',

    footerQuote: '"And you shall know the truth, and the truth shall make you free." — John 8:32',
    footerRights: 'Copyright © Yayasan Sukma Kawula Mahardika. All rights reserved.',
    footerAddress: 'Yayasan Sukma Kawula Mahardika Secretariat • Established April 2023 • Indonesia'
  },

  zh: {
    siteTitle: 'Sukma Kawula Mahardika 基金会',
    tagline: '在耶稣基督里以爱与信仰为本的心灵陪伴与身心恢复',
    navAbout: '关于我们',
    navArticles: '学术论文与文集',
    navFramework: '基督徒复原框架',
    navDocument: '原著文献 (PDF)',
    navContact: '辅导与祷告',
    ctaConsultation: '联系我们',
    langSelect: '语言',

    established: '成立于：2023年4月',
    heroHeadline: '在耶稣基督里获得内在主权与真实释放',
    heroOfficialQuote: '我们是一个新成立的基金会，名为「Sukma Kawula Mahardika 基金会」（Yayasan Sukma Kawula Mahardika）。我们的使命是倾尽我们的专业知识与关怀，并在耶稣基督里作为同胞与弟兄姐妹，帮助那些寻求在基督教信仰中获得恢复的具有 LGBTQ 倾向的青少年与年轻一代。我们致力于提供建立在基督之爱与坚定信仰基础上的陪伴，全力支持他们的康复与身心重塑之旅。',
    heroSubquote: '成立于2023年4月，以基督信仰、非强迫性的医学心理伦理，以及东方古典的内在主权哲学为基石。',
    readOfficialPapers: '阅读引言文献',
    consultPrivate: '申请保密陪伴与辅导',
    downloadPdf: '下载完整文献 (PDF)',
    viewOnlineDoc: '在线查阅文献',

    leadershipTitle: '基金会顾问与执行理事会',
    leadershipSubtitle: '神的仆人、医学专家、神学学者与心理辅导者，同心投身于这项爱的服事。',
    boardAdvisory: '顾问',
    boardChair: '主席',
    boardSecretary: '秘书长',
    boardTreasurer: '财务',
    boardMembers: '理事成员',

    articlesTitle: '导言论著与神学·医学综述',
    articlesSubtitle: '提供四种语言版本，深入探讨心灵主权、基督徒康复伦理与基督的怜悯心肠。',
    chooseArticle: '选择文章',
    fontSize: '字体大小',
    listenNarration: '听朗读',
    stopNarration: '停止朗读',
    readingNotice: '本论著由 Sukma Kawula Mahardika 基金会正式编撰发布。',
    tableOfContents: '章节目录',
    biblicalGrounding: '核心经文基石',
    readFullInPdf: '原著文献对应页码',
    searchArticles: '搜索主题、经文或概念...',

    frameworkTitle: '基督信仰下的身心康复理念与实务',
    frameworkSubtitle: '融合东方古典智慧、福音神学、认知行为疗法（CBT）及非强迫性的医疗伦理。',
    pillar1Title: '1. 灵魂重塑与属天身份 (Sukma)',
    pillar1Desc: '在基督里重新找回作为神所深爱的儿女身份（约翰福音 8:36）。以受造物谦卑顺服（Kawula）的态度连结造物主，打破存在焦虑与虚假人设。',
    pillar2Title: '2. 认知重塑与情欲能量升华',
    pillar2Desc: '帮助年轻人识别扭曲信念，建立自律与健康的欲望调节机制（Self-Regulation），将情感与生命能量引向崇高而富有意义的追求。',
    pillar3Title: '3. 爱的团契 (Chesed 与 Rachamim)',
    pillar3Desc: '建立一个远离定罪与污名化的安全团契，根植于深沉的慈怜心肠（rachamim）与永不改变的立约慈爱（chesed）。',
    pillar4Title: '4. 多学科医学与心理健康协同',
    pillar4Desc: '正视少数群体压力理论，提供严谨的青少年健康认知（包括HIV/性传播疾病科学预防），与专科医师及临床心理学者紧密合作。',
    ethicsTitle: '临床与教牧伦理准则',
    ethicsPrinciple: '首先，不可造成伤害 (Primum Non-Nocere)',
    ethicsText: '本基金会坚决反对任何形式的强迫性或粗暴惩罚性的所谓“矫正治疗”。我们的陪伴尊重个体的自由意志与尊严，以恩典为根基，专为自愿在基督里寻求内在复原者提供关怀。',

    docSectionTitle: '官方文献档案与出版物',
    docSectionSubtitle: '直接查阅 Sukma Kawula Mahardika 基金会的完整专著合辑。',
    docFilename: '关于HIV与LGBTQ议题的前言及内在主权探讨 - YSKM 基金会',
    docPublicationInfo: '综合学术文献集 • 由 Kusa Publishing 与基金会秘书处联合出版',
    docDownloadButton: '下载官方完整 PDF',
    docOpenEmbed: '在应用中阅读文献',
    docCloseEmbed: '关闭文献预览',

    contactTitle: '教牧辅导与代祷申请',
    contactSubtitle: '专为青少年、青年人及家长设立的安全、温馨且高度保密的倾听与陪伴港湾。',
    formName: '姓名或化名',
    formNameHelp: '为了保护您的隐私，您可以使用化名或首字母缩写。',
    formRole: '您的身份',
    formRoleTeen: '青少年（13-18岁）',
    formRoleYouth: '青年/年轻成人（19-35岁）',
    formRoleParent: '家长 / 家属',
    formRolePastor: '牧者 / 辅导员 / 教师',
    formContactMethod: '首选联系方式（电子邮箱或电话/微信/WhatsApp）',
    formTopic: '关怀议题',
    formTopicPersonal: '个人心灵恢复辅导',
    formTopicFamily: '家庭与亲子沟通指导',
    formTopicTheology: '神学与医学学术探讨',
    formMessage: '您的留言 / 祷告事项',
    formSubmit: '提交保密咨询请求',
    formSuccessTitle: '非常感谢，您的留言已安全送达',
    formSuccessDesc: 'Sukma Kawula Mahardika 基金会团队将以严格的教牧伦理保护您的隐私，并在基督的爱中尽快与您联络。',
    formPrivacyGuarantee: '严格隐私承诺：所有咨询均在严密的教牧保密守则下进行。',

    footerQuote: '「你们必晓得真理，真理必叫你们得以自由。」—— 约翰福音 8:32',
    footerRights: '版权所有 © Sukma Kawula Mahardika 基金会。保留所有权利。',
    footerAddress: 'Sukma Kawula Mahardika 基金会秘书处 • 成立于2023年4月 • 印度尼西亚'
  },

  tl: {
    siteTitle: 'Yayasan Sukma Kawula Mahardika',
    tagline: 'Paggabay na Nakabatay sa Pag-ibig at Pananampalataya kay Hesukristo',
    navAbout: 'Tungkol sa Amin',
    navArticles: 'Mga Artikulo at Pag-aaral',
    navFramework: 'Paraan ng Pagpapanumbalik',
    navDocument: 'Orihinal na Dokumento (PDF)',
    navContact: 'Konsultasyon at Panalangin',
    ctaConsultation: 'Makipag-ugnayan',
    langSelect: 'Wika',

    established: 'Itinatag: Abril 2023',
    heroHeadline: 'Panloob na Soberanya at Tunay na Paglaya kay Hesukristo',
    heroOfficialQuote: 'Kami ay isang pundasyong itinatag kamakailan, ang Yayasan Sukma Kawula Mahardika, na may layuning tumulong gamit ang aming buong propesyonal na kaalaman at malasakit, at bilang kapwa tao kay Hesukristo upang tulungan ang mga kabataan at young adult na nagnanais na maipanumbalik mula sa mga katangiang LGBTQ. Nakatuon kami sa pagbibigay ng gabay na nakabatay sa pag-ibig at pananampalataya upang suportahan ang kanilang paglalakbay sa pagpapanumbalik.',
    heroSubquote: 'Itinatag noong Abril 2023 sa pundasyon ng pananampalatayang Kristiyano, etika sa medisina at sikolohiya na walang pamimilit, at karunungan sa panloob na kalayaan.',
    readOfficialPapers: 'Basahin ang Panimulang Papel',
    consultPrivate: 'Humiling ng Gabay',
    downloadPdf: 'I-download ang Buong PDF',
    viewOnlineDoc: 'Tingnan ang Orihinal na Papel',

    leadershipTitle: 'Pamunuan at Lupon ng Pundasyon',
    leadershipSubtitle: 'Mga lingkod ng Diyos, manggagamot, mananaliksik, at tagapayo na nakatalaga sa ministeryo ng pag-ibig.',
    boardAdvisory: 'Tagapayo',
    boardChair: 'Pangulo',
    boardSecretary: 'Kalihim',
    boardTreasurer: 'Ingat-Yaman',
    boardMembers: 'Mga Miyembro ng Lupon',

    articlesTitle: 'Mga Panimulang Artikulo at Pag-aaral sa Teolohiya at Medisina',
    articlesSubtitle: 'May apat na wika upang mapalawak ang pang-unawa sa panloob na kalayaan, etika sa paggaling, at habag ni Kristo.',
    chooseArticle: 'Pumili ng Artikulo',
    fontSize: 'Laki ng Titik',
    listenNarration: 'Pakinggan ang Audio',
    stopNarration: 'Itigil ang Audio',
    readingNotice: 'Opisyal na papel na inilathala ng Yayasan Sukma Kawula Mahardika.',
    tableOfContents: 'Talaan ng mga Nilalaman',
    biblicalGrounding: 'Mga Pangunahing Talata sa Bibliya',
    readFullInPdf: 'Pahina sa Orihinal na Dokumento',
    searchArticles: 'Maghanap ng paksa, talata, o konsepto...',

    frameworkTitle: 'Kristiyanong Balangkas ng Pangangalaga at Pagpapanumbalik',
    frameworkSubtitle: 'Pinag-iisa ang tradisyunal na karunungang espirituwal, teolohiya ng Ebanghelyo, Cognitive Behavioral Therapy (CBT), at etika sa medisina na walang pamimilit.',
    pillar1Title: '1. Pagpapanumbalik ng Kaluluwa at Banal na Pagkakakilanlan',
    pillar1Desc: 'Muling tuklasin ang tunay na sarili bilang minamahal na anak ng Diyos kay Kristo (Juan 8:36). Pagkilala sa sarili bilang nilikha (Kawula) na nagpapasakop sa Maylalang, winawasak ang takot at huwad na pagkakakilanlan.',
    pillar2Title: '2. Kognitibong Pag-aayos at Pagsasaayos ng Enerhiya',
    pillar2Desc: 'Pagtulong sa mga kabataan na kilalanin ang mga maling pananaw, matutong magpigil sa sarili (self-regulation) sa malusog na paraan, at ituon ang lakas sa makabuluhang layunin.',
    pillar3Title: '3. Komunidad ng Pag-ibig (Chesed at Rachamim)',
    pillar3Desc: 'Pagbibigay ng ligtas na tahanan at kapatiran na malayo sa panghuhusga, nakaugat sa malalim na habag (rachamim) at tapat na pagmamahal ng Diyos (chesed).',
    pillar4Title: '4. Pakikipagtulungan sa Medisina at Kalusugan ng Pag-iisip',
    pillar4Desc: 'Pangangasiwa sa stress ng minorya, komprehensibong pag-iwas at paggamot sa kalusugan (kasama ang edukasyon sa HIV/STI) katuwang ang mga doktor at lisensyadong sikolohista.',
    ethicsTitle: 'Panunumpa sa Etikang Pastoral at Klinikal',
    ethicsPrinciple: 'Primum Non-Nocere (Una sa Lahat, Huwag Manakit)',
    ethicsText: 'Mahigpit na tinatanggihan ng pundasyon ang anumang uri ng sapilitang conversion therapy. Ang aming paggabay ay gumagalang sa kalayaan ng tao, nakaugat sa biyaya, at naglilingkod sa mga kusang naghahanap ng pagbabago kay Kristo.',

    docSectionTitle: 'Opisyal na Publikasyon at Sinupan ng Dokumento',
    docSectionSubtitle: 'Direktang pag-access sa buong manuskrito ng Yayasan Sukma Kawula Mahardika.',
    docFilename: 'Prolog sa Isyu ng HIV/LGBTQ at Panloob na Soberanya - YSKM',
    docPublicationInfo: 'Komprehensibong Papel • Inilathala kasama ang Kusa Publishing at Sekretarya ng YSKM',
    docDownloadButton: 'I-download ang Opisyal na PDF',
    docOpenEmbed: 'Buksan ang Dokumento sa App',
    docCloseEmbed: 'Isara ang Preview ng Dokumento',

    contactTitle: 'Konsultasyon sa Paggabay at Kahilingan sa Panalangin',
    contactSubtitle: 'Para sa mga tinedyer, kabataan, at mga magulang na nangangailangan ng ligtas, kumpidensyal, at mapagkalingang gabay sa pananampalataya.',
    formName: 'Buong Pangalan o Alyas',
    formNameHelp: 'Maaari kang gumamit ng alyas o inisyal para sa iyong kapayapaan ng loob.',
    formRole: 'Katayuan / Papel',
    formRoleTeen: 'Tinedyer (13-18 taong gulang)',
    formRoleYouth: 'Kabataan / Young Adult (19-35 taong gulang)',
    formRoleParent: 'Magulang / Pamilya',
    formRolePastor: 'Pastor / Tagapayo / Guro',
    formContactMethod: 'Paraan ng Pakikipag-ugnayan (Email o Telepono / WhatsApp)',
    formTopic: 'Pangangailangan sa Gabay',
    formTopicPersonal: 'Personal na Gabay sa Pagpapanumbalik',
    formTopicFamily: 'Paggabay sa Pamilya at Magulang',
    formTopicTheology: 'Pang-akademiko at Teolohikal na Pag-aaral',
    formMessage: 'Mensahe / Kahilingan sa Panalangin',
    formSubmit: 'Isumite ang Kahilingan',
    formSuccessTitle: 'Maraming Salamat, Natanggap na ang Iyong Mensahe',
    formSuccessDesc: 'Iingatan ng Yayasan Sukma Kawula Mahardika ang iyong liham nang may buong paglilihim at tutugon nang may pag-ibig ni Kristo.',
    formPrivacyGuarantee: 'Tiyak na Lihim: Ang lahat ng impormasyon ay pinangangalagaan alinsunod sa integridad ng ministeryo.',

    footerQuote: '"At inyong makikilala ang katotohanan, at ang katotohanan ay magpapalaya sa inyo." — Juan 8:32',
    footerRights: 'Karapatang-ari © Yayasan Sukma Kawula Mahardika. Nakalaan ang lahat ng karapatan.',
    footerAddress: 'Sekretarya ng Yayasan Sukma Kawula Mahardika • Itinatag noong Abril 2023 • Indonesia'
  }
};

export const BOARD_MEMBERS: BoardMember[] = [
  {
    role: 'Penasihat (Advisory)',
    name: 'dr. Kasan Susilo, MTh.',
    title: 'Dokter Medis & Magister Teologi',
    bio: 'Menyediakan panduan integratif antara ilmu kedokteran, kesehatan holistik, dan etika teologi Kristiani.'
  },
  {
    role: 'Ketua (Chairperson)',
    name: 'Pdm. Dr. Sori Tjandrah Simbolon',
    title: 'Doktor Teologi & Pemimpin Pelayanan Pastoral',
    bio: 'Memimpin visi penggembalaan, kepemimpinan kasih, dan pembinaan komunitas yang memulihkan.'
  },
  {
    role: 'Sekretaris (Secretary)',
    name: 'Ev. Victor Christianto',
    title: 'Peneliti, Penginjil & Penulis Kajian Teologis-Sains',
    bio: 'Penyusun riset integrasi filsafat klasik Nusantara, etika medis HIV/LGBTQ, dan teologi Yesaya 58.'
  },
  {
    role: 'Bendahara (Treasurer)',
    name: 'Ibu Caecilia Titin',
    title: 'Manajemen Keuangan & Akuntabilitas Yayasan',
    bio: 'Menjaga transparansi, tata kelola, dan dukungan operasional bagi misi pelayanan kasih yayasan.'
  },
  {
    role: 'Anggota Dewan (Board Member)',
    name: 'Pdt. Dr. Isak Suria',
    title: 'Doktor Teologi & Konselor Pastoral',
    bio: 'Pakar konseling pastoral dan pendampingan keluarga dalam terang kebenaran firman Tuhan.'
  },
  {
    role: 'Anggota Dewan (Board Member)',
    name: 'Pdt. L. Harumia Tedja, MTh.',
    title: 'Magister Teologi & Penggembalaan Jemaat',
    bio: 'Fokus pada pembinaan rohani kaum muda, regenerasi iman, dan pelayanan pemulihan jiwa.'
  },
  {
    role: 'Anggota Dewan (Board Member)',
    name: 'Ibu Elyse',
    title: 'Pemerhati Pemuda & Pendamping Keluarga',
    bio: 'Aktif dalam pendampingan personal bagi orang tua dan remaja yang bergumul mencari arah pemulihan.'
  }
];
