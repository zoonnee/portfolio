import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Activity, Award, Star, Code, Heart, BookOpen } from 'lucide-react';

const Portfolio = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900">
      
      {/* 1. Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-black text-xl tracking-tighter text-teal-600 underline decoration-teal-200">JU EUN.</span>
          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500">
            <a href="#about" className="hover:text-teal-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-teal-600 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-teal-600 transition-colors">Expertise</a>
            <a href="#lifestyle" className="hover:text-teal-600 transition-colors">Lifestyle</a>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-teal-700 bg-teal-50 rounded-full"
          >
            WARM HEART, COOL LOGIC
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight text-slate-900"
          >
            정답을 찾을 때까지 <br/>
            <span className="text-teal-600 underline decoration-teal-200 underline-offset-8">파고들고 움직입니다.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            포항공대 공학도의 논리와 한의학적 진심을 융합하여, 환자가 납득할 수 있는 가장 정밀한 정답을 제시하는 한의사 이주은입니다.
          </motion.p>
        </div>
      </header>

      {/* 3. Quick Stats */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Academic', val: 'POSTECH / PNU', desc: '산업경영공학 학사 수석 및 한의학 석사' },
            { label: 'Career', val: 'IT Developer', desc: 'LG CNS & 넷마블 데이터 엔지니어 경력' },
            { label: 'Clinical', val: 'Expertise', desc: '초음파 진단 및 근골격계 특화' }
          ].map((item, i) => (
            <motion.div 
              key={i} {...fadeInUp}
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="text-teal-600 font-bold text-sm mb-2">{item.label}</div>
              <div className="text-2xl font-black mb-2">{item.val}</div>
              <div className="text-slate-500 text-sm leading-relaxed">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Timeline */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-16 flex items-center gap-3">
            <Activity className="text-teal-600" /> Professional Experience
          </h2>
          <div className="space-y-16">
            {[
              { 
                date: '2022 - 2026', title: '부산대학교 한의학전문대학원', 
                subtitle: '한의학 석사 (본과 3등 졸업)',
                tags: ['SCI급 논문 게재', '최우수연구자상', '대한한방병원협회장상']
              },
              { 
                date: '2018 - 2019', title: 'IT & Big Data Career', 
                subtitle: 'LG CNS / 넷마블',
                tags: ['모니터링 시스템 개발', '데이터 분석', '높은 스트레스 역치']
              },
              { 
                date: '2016 - 2022', title: '포항공과대학교 (POSTECH)', 
                subtitle: '산업경영공학과 학부 수석 졸업',
                tags: ['시스템 최적화', '전민근연구실장상']
              }
            ].map((exp, i) => (
              <motion.div key={i} {...fadeInUp} className="relative pl-8 border-l-2 border-slate-100">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm" />
                <span className="text-sm font-bold text-teal-600">{exp.date}</span>
                <h3 className="text-2xl font-black mt-2">{exp.title}</h3>
                <p className="text-slate-600 mt-1 mb-4 font-semibold">{exp.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-500 uppercase tracking-tighter">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Clinical Skills */}
      <section id="skills" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-16 text-center">Clinical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-lg mb-8 text-teal-700 uppercase tracking-widest flex items-center gap-2">
                <Star size={18} /> Core Competencies
              </h4>
              <div className="space-y-6">
                {[
                  { name: '초음파 진단 및 유도하 시술', p: '95%' },
                  { name: '근골격계 및 추나 요법', p: '90%' },
                  { name: 'SCI급 학술 연구 및 데이터 분석', p: '90%' },
                  { name: '소화기 및 부인과 임상', p: '85%' }
                ].map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2 font-bold text-sm">
                      <span>{skill.name}</span>
                      <span className="text-teal-600">{skill.p}</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.p }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-teal-600" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-lg mb-6">Certification & Awards</h4>
              <ul className="space-y-4 text-sm text-slate-600 font-medium">
                <li className="flex gap-3 items-start"><Award className="w-5 h-5 text-teal-600 shrink-0" /> <span>SCI 게재: Zuojin Pill gastrointestinal motility 연구</span></li>
                <li className="flex gap-3 items-start"><Award className="w-5 h-5 text-teal-600 shrink-0" /> <span>추나 급여 사전교육 및 근골격계 알고리즘 이수</span></li>
                <li className="flex gap-3 items-start"><Award className="w-5 h-5 text-teal-600 shrink-0" /> <span>최우수연구자상 및 학업우수상 수상</span></li>
                <li className="flex gap-3 items-start"><Award className="w-5 h-5 text-teal-600 shrink-0" /> <span>사암침 / 마음침 / MPS 캠프 수료</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Lifestyle & Hobby */}
      <section id="lifestyle" className="py-24 bg-teal-600 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-16">Life & Identity</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🏊‍♀️', name: '수영', desc: '끈기' },
              { icon: '🎹', name: '음악', desc: '피아노 & 드럼' },
              { icon: '🧩', name: '조립', desc: '정교한 손기술' },
              { icon: '💡', name: '분석', desc: '공학적 사고' }
            ].map((hobby, i) => (
              <motion.div 
                key={i} whileHover={{ y: -10 }}
                className="p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20"
              >
                <div className="text-4xl mb-4">{hobby.icon}</div>
                <div className="font-bold mb-1 text-lg">{hobby.name}</div>
                <div className="text-teal-100 text-xs font-semibold">{hobby.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer id="contact" className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-8 leading-tight">함께 성장할 <br/>든든한 파트너가 되겠습니다.</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <a href="tel:01055602182" className="flex items-center justify-center gap-2 font-bold hover:text-teal-400 transition-colors">
              <Phone size={18} /> 010-5560-2182
            </a>
            <a href="mailto:zoosilver@naver.com" className="flex items-center justify-center gap-2 font-bold hover:text-teal-400 transition-colors">
              <Mail size={18} /> zoosilver@naver.com
            </a>
          </div>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">© 2026 Korean Medicine Doctor Lee Ju-eun.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;