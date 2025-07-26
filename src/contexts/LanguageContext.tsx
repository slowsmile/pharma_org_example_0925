import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.joinNow': 'Join Now',
    'nav.organizationName': 'PharmaPro Alliance',
    
    // Hero Section
    'hero.title1': 'Advancing',
    'hero.title2': 'Pharmaceutical Excellence',
    'hero.subtitle': 'Join the leading professional organization dedicated to advancing pharmaceutical science, fostering innovation, and connecting healthcare professionals worldwide.',
    'hero.becomeMember': 'Become a Member',
    'hero.exploreMission': 'Explore Our Mission',
    'hero.stat1': '25,000+',
    'hero.stat1Label': 'Certified Professionals',
    'hero.stat2': '150+',
    'hero.stat2Label': 'Global Partnerships',
    'hero.stat3': '500+',
    'hero.stat3Label': 'Research Publications',
    
    // About Section
    'about.title': 'About PharmaPro Alliance',
    'about.subtitle': 'For over three decades, we\'ve been at the forefront of pharmaceutical advancement, connecting professionals and driving innovation in healthcare.',
    'about.sectionTitle': 'Leading the Future of Pharmaceutical Science',
    'about.description1': 'Our organization serves as the premier platform for pharmaceutical professionals to collaborate, learn, and advance the field of healthcare. We bridge the gap between research and practice, fostering innovation that improves patient outcomes globally.',
    'about.description2': 'Through our comprehensive programs, continuing education opportunities, and research initiatives, we empower our members to stay at the cutting edge of pharmaceutical science and contribute to meaningful healthcare advances.',
    'about.excellence': 'Excellence',
    'about.excellenceDesc': 'Committed to the highest standards in pharmaceutical practice and research.',
    'about.education': 'Education',
    'about.educationDesc': 'Providing continuous learning opportunities for professional development.',
    'about.globalImpact': 'Global Impact',
    'about.globalImpactDesc': 'Connecting professionals worldwide to address global health challenges.',
    'about.patientCare': 'Patient Care',
    'about.patientCareDesc': 'Dedicated to improving patient outcomes through innovative pharmaceutical solutions.',
    
    // Services Section
    'services.title': 'Our Services & Programs',
    'services.subtitle': 'Comprehensive support for pharmaceutical professionals at every stage of their career.',
    'services.continuingEducation': 'Continuing Education',
    'services.continuingEducationDesc': 'Stay current with the latest developments in pharmaceutical science through our comprehensive continuing education programs, workshops, and certification courses.',
    'services.continuingEducationFeature1': '• Accredited CE programs',
    'services.continuingEducationFeature2': '• Online and in-person workshops',
    'services.continuingEducationFeature3': '• Professional certifications',
    'services.continuingEducationFeature4': '• Industry expert speakers',
    'services.networking': 'Professional Networking',
    'services.networkingDesc': 'Connect with peers, mentors, and industry leaders through our exclusive networking events, forums, and collaborative research opportunities.',
    'services.networkingFeature1': '• Annual conferences',
    'services.networkingFeature2': '• Regional meetups',
    'services.networkingFeature3': '• Online community forums',
    'services.networkingFeature4': '• Mentorship programs',
    'services.research': 'Research Publications',
    'services.researchDesc': 'Access cutting-edge research, publish your findings, and contribute to the advancement of pharmaceutical knowledge through our peer-reviewed publications.',
    'services.guidelines': 'Clinical Guidelines',
    'services.guidelinesDesc': 'Evidence-based clinical guidelines and best practices to support optimal patient care and pharmaceutical interventions in various healthcare settings.',
    'services.learnMore': 'Learn More',
    'services.joinNetwork': 'Join Network',
    'services.viewPublications': 'View Publications',
    'services.accessGuidelines': 'Access Guidelines',
    
    // News Section
    'news.title': 'Latest News & Updates',
    'news.subtitle': 'Stay informed with the latest developments in pharmaceutical science and industry news.',
    'news.viewAll': 'View All News',
    'news.readMore': 'Read More',
    'news.readFull': 'Read Full Article',
    
    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to join our community or have questions? We\'re here to help you advance your pharmaceutical career.',
    'contact.contactInfo': 'Contact Information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.officeHours': 'Office Hours',
    'contact.sendMessage': 'Send us a Message',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.phoneNumber': 'Phone Number',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell us more about your inquiry...',
    'contact.subjectPlaceholder': 'How can we help you?',
    'contact.send': 'Send Message',
    
    // Footer
    'footer.description': 'Advancing pharmaceutical excellence through professional development, research collaboration, and innovative healthcare solutions.',
    'footer.quickLinks': 'Quick Links',
    'footer.resources': 'Resources',
    'footer.stayUpdated': 'Stay Updated',
    'footer.newsletterDesc': 'Subscribe to our newsletter for the latest pharmaceutical news and updates.',
    'footer.subscribe': 'Subscribe',
    'footer.copyright': '© 2024 PharmaPro Alliance. All rights reserved.',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfService': 'Terms of Service',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.services': '服务项目',
    'nav.news': '新闻动态',
    'nav.contact': '联系我们',
    'nav.joinNow': '立即加入',
    'nav.organizationName': '药学专业联盟',
    
    // Hero Section
    'hero.title1': '推进',
    'hero.title2': '药学卓越发展',
    'hero.subtitle': '加入致力于推进药学科学、促进创新、连接全球医疗专业人士的领先专业组织。',
    'hero.becomeMember': '成为会员',
    'hero.exploreMission': '了解我们的使命',
    'hero.stat1': '25,000+',
    'hero.stat1Label': '认证专业人士',
    'hero.stat2': '150+',
    'hero.stat2Label': '全球合作伙伴',
    'hero.stat3': '500+',
    'hero.stat3Label': '研究出版物',
    
    // About Section
    'about.title': '关于药学专业联盟',
    'about.subtitle': '三十多年来，我们一直站在药学发展的前沿，连接专业人士，推动医疗保健创新。',
    'about.sectionTitle': '引领药学科学的未来',
    'about.description1': '我们的组织是药学专业人士合作、学习和推进医疗保健领域的首要平台。我们弥合研究与实践之间的差距，促进改善全球患者预后的创新。',
    'about.description2': '通过我们的综合项目、继续教育机会和研究倡议，我们赋能会员保持在药学科学的前沿，并为有意义的医疗保健进步做出贡献。',
    'about.excellence': '卓越',
    'about.excellenceDesc': '致力于药学实践和研究的最高标准。',
    'about.education': '教育',
    'about.educationDesc': '为专业发展提供持续学习机会。',
    'about.globalImpact': '全球影响',
    'about.globalImpactDesc': '连接全球专业人士，应对全球健康挑战。',
    'about.patientCare': '患者护理',
    'about.patientCareDesc': '致力于通过创新药学解决方案改善患者预后。',
    
    // Services Section
    'services.title': '我们的服务与项目',
    'services.subtitle': '为药学专业人士职业生涯各个阶段提供全面支持。',
    'services.continuingEducation': '继续教育',
    'services.continuingEducationDesc': '通过我们全面的继续教育项目、研讨会和认证课程，紧跟药学科学最新发展。',
    'services.continuingEducationFeature1': '• 认证CE项目',
    'services.continuingEducationFeature2': '• 线上和线下研讨会',
    'services.continuingEducationFeature3': '• 专业认证',
    'services.continuingEducationFeature4': '• 行业专家演讲',
    'services.networking': '专业网络',
    'services.networkingDesc': '通过我们独家的网络活动、论坛和合作研究机会，与同行、导师和行业领袖建立联系。',
    'services.networkingFeature1': '• 年度会议',
    'services.networkingFeature2': '• 地区聚会',
    'services.networkingFeature3': '• 在线社区论坛',
    'services.networkingFeature4': '• 导师项目',
    'services.research': '研究出版物',
    'services.researchDesc': '通过我们的同行评议出版物，获取前沿研究，发表您的发现，为药学知识的发展做出贡献。',
    'services.guidelines': '临床指南',
    'services.guidelinesDesc': '基于证据的临床指南和最佳实践，支持各种医疗保健环境中的最佳患者护理和药学干预。',
    'services.learnMore': '了解更多',
    'services.joinNetwork': '加入网络',
    'services.viewPublications': '查看出版物',
    'services.accessGuidelines': '访问指南',
    
    // News Section
    'news.title': '最新新闻与动态',
    'news.subtitle': '了解药学科学和行业新闻的最新发展。',
    'news.viewAll': '查看所有新闻',
    'news.readMore': '阅读更多',
    'news.readFull': '阅读全文',
    
    // Contact Section
    'contact.title': '联系我们',
    'contact.subtitle': '准备加入我们的社区或有疑问？我们在这里帮助您推进药学职业发展。',
    'contact.contactInfo': '联系信息',
    'contact.email': '邮箱',
    'contact.phone': '电话',
    'contact.address': '地址',
    'contact.officeHours': '办公时间',
    'contact.sendMessage': '发送消息',
    'contact.firstName': '名',
    'contact.lastName': '姓',
    'contact.phoneNumber': '电话号码',
    'contact.subject': '主题',
    'contact.message': '消息',
    'contact.messagePlaceholder': '告诉我们更多关于您的咨询...',
    'contact.subjectPlaceholder': '我们如何帮助您？',
    'contact.send': '发送消息',
    
    // Footer
    'footer.description': '通过专业发展、研究合作和创新医疗保健解决方案推进药学卓越。',
    'footer.quickLinks': '快速链接',
    'footer.resources': '资源',
    'footer.stayUpdated': '保持更新',
    'footer.newsletterDesc': '订阅我们的新闻通讯，获取最新的药学新闻和更新。',
    'footer.subscribe': '订阅',
    'footer.copyright': '© 2024 药学专业联盟。保留所有权利。',
    'footer.privacyPolicy': '隐私政策',
    'footer.termsOfService': '服务条款',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};