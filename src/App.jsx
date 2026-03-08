import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, ExternalLink, ArrowUpRight, Check } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // 1. 모든 경험 데이터 통합 (기관명: 한의정보협동조합 확정 및 문구 정제)
  const experiences = [
    { date: '2026', title: '추나 급여 사전교육', org: '대한한의사협회', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2026', title: '정인적방 척추관절통 강의', org: '메디스트림', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2026', title: '한정협 제모 스터디', org: '한의정보협동조합', tag: '강의', color: 'bg-emerald-100 text-emerald-700' }, // 정정 완료
    { date: '2025', title: '마음침 강의', org: '사암침법학회 · 마음침법학회', tag: '강의', color: 'bg-emerald-100 text-emerald-700' }, // 정정 완료
    { date: '2022 - 2025', title: '양생기능의학교실 학생연구원', org: '부산대학교 한의학전문대학원', tag: '연구', color: 'bg-blue-100 text-blue-700' },
    { date: '2023.01 - 2024.08', title: '동제의료봉사단 부회장', org: '부산대학교 한의학전문대학원', tag: '리더십', color: 'bg-purple-100 text-purple-700' },
    { date: '2022.08 - 2024.12', title: '진로탐색동아리 회장', org: '부산대학교 한의학전문대학원', tag: '리더십', color: 'bg-purple-100 text-purple-700' },
    { date: '2024', title: '사암침 캠프', org: '메디스트림', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2024', title: 'MPS 캠프', org: '메디스트림', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2024', title: '근골격계 알고리즘 일차진료 마스터 강의', org: '메디스트림', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2021', title: '물류연구실 공식 홈페이지 개발', org: '포항공과대학교', tag: '개발', color: 'bg-orange-100 text-orange-700' },
    { date: '2019 - 2022', title: '물류연구실 석·박사통합과정 연구원', org: '포항공과대학교', tag: '연구', color: 'bg-blue-100 text-blue-700' },
    { date: '2019.12 - 2020.12', title: '현대중공업 3D BPP 알고리즘 개발', org: '포항공과대학교', tag: '개발', color: 'bg-orange-100 text-orange-700' },
    { date: '2019.09 - 2020.12', title: '드론 배치 알고리즘 개발', org: '포항공과대학교', tag: '개발', color: 'bg-orange-100 text-orange-700' },
    { date: '2019', title: '빅데이터 처리 파이프라인 구축 인턴', org: '넷마블', tag: '개발', color: 'bg-orange-100 text-orange-700' },
    { date: '2019.02 - 2019.11', title: 'R 프로그래밍 및 기초통계 MOOC 강의 조교', org: '포항공과대학교', tag: '교육', color: 'bg-indigo-100 text-indigo-700' },
    { date: '2018', title: '생산설비 모니터링 시스템 구축 인턴', org: 'LG CNS', tag: '개발', color: 'bg-orange-100 text-orange-700' }
  ];

  const categories = ['All', '강의', '연구', '리더십', '개발', '교육'];
  const filteredExperiences = activeFilter === 'All' 
    ? experiences 
    : experiences.filter(exp => exp.tag === activeFilter);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] font-['Pretendard'] selection:bg-teal-100">
      
      {/* 1. Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-10 py-5 flex justify-between items-center font-black uppercase tracking-tighter italic">
          <span>Lee Ju-eun</span>
          <div className="hidden md:flex gap-10 text-[11px] tracking-[0.2em]">
            <a href="#philosophy" className="hover:text-teal-400 transition-colors">Philosophy</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
            <a href="#publications" className="hover:text-teal-400 transition-colors">Publications</a>
            <a href="#awards" className="hover:text-teal-400 transition-colors">Awards</a>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section (기존 스타일 유지) */}
      <header className="pt-48 pb-32 px-10 bg-[#0f172a] text-white relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-6 text-teal-400 text-xs font-bold tracking-[0.4em] uppercase">
              <span className="w-8 h-[1px] bg-teal-400"></span> Warm Heart, Cool Logic
            </div>
            <h1 className="text-5xl md:text-[5.5rem] font-black mb-10 leading-[1] tracking-tight">
              마음으로 공감하고 <br/>
              <span className="text-teal-400">근거로 진료하는</span> 한의사
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">따뜻한 진심과 냉철한 논리를 바탕으로 환자에게 가장 적절한 선택을 제안합니다.</p>
          </div>
          <div className="lg:col-span-4 aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl relative group">
            <img src="/profile.jpg" alt="한의사 이주은" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </header>

      {/* 4. Professional Experience (필터 버튼 & 팩트 정정) */}
      <section id="experience" className="py-32 px-10 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-[#0f172a] mb-12 tracking-tight uppercase text-center">Professional Experience</h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === cat ? 'bg-[#0f172a] text-white shadow-lg' : 'bg-white text-slate-400 border border-slate-200 hover:text-teal-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="bg-white shadow-sm rounded-3xl overflow-hidden border border-slate-200 divide-y divide-slate-100">
            <AnimatePresence mode='popLayout'>
              {filteredExperiences.map((exp) => (
                <motion.div 
                  key={exp.title + exp.date} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="flex flex-col md:flex-row md:items-center p-8 group hover:bg-slate-50 transition-colors"
                >
                  <div className="w-48 mb-3 md:mb-0 text-xs font-black text-slate-300 group-hover:text-[#0f172a] tracking-widest uppercase transition-colors">{exp.date}</div>
                  <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${exp.color} w-fit`}>{exp.tag}</span>
                    <h4 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight leading-tight">{exp.title}</h4>
                  </div>
                  <div className="md:w-64 text-left md:text-right mt-3 md:mt-0 text-[12px] font-bold text-slate-400 group-hover:text-teal-600 tracking-widest transition-colors uppercase">{exp.org}</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. Education & Publications (링크 수정) */}
      <section className="py-32 bg-[#0f172a] text-white px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 font-bold tracking-tight">
          <div>
            <h2 className="text-3xl font-black text-teal-400 mb-16 uppercase">Education</h2>
            <div className="space-y-12">
              {[
                { s: '부산대학교 한의학전문대학원', d: '한의학 석사', t: '2022 - 2026' },
                { s: 'Graz University of Technology', d: '교환학생 과정', t: '2018 - 2019' },
                { s: '포항공과대학교', d: '산업경영공학 학사', t: '2015 - 2019' }
              ].map((edu, i) => (
                <div key={i} className="group border-l border-white/10 pl-8 py-2 hover:border-teal-400 transition-all">
                  <h4 className="text-2xl mb-2 group-hover:text-teal-400 transition-colors">{edu.s}</h4>
                  <p className="text-slate-400 text-sm italic uppercase tracking-widest font-black">{edu.d} · {edu.t}</p>
                </div>
              ))}
            </div>
          </div>
          <div id="publications">
            <h2 className="text-3xl font-black text-teal-400 mb-16 uppercase">Publications</h2>
            <div className="space-y-10">
              {[
                { d: '2024.10', t: 'Zuojin Pill enhances gastrointestinal motility by modulating the pacemaker potentials in interstitial cells of Cajal through multiple signaling pathways', j: 'Int J Med Sci (SCIE)', l: 'https://pubmed.ncbi.nlm.nih.gov/39628697/' },
                { d: '2024.06', t: '네트워크 약리학 연구를 통한 좌금환의 기능성 소화불량증 치료기전 연구', j: '대한한의학 방제학회지 (KCI)', l: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003117615' }              ].map((pub, i) => (
                <a key={i} href={pub.l} target="_blank" rel="noopener noreferrer" className="block group border-l border-white/10 pl-8 py-2 hover:border-teal-400 transition-all">
                  <span className="text-[10px] font-black text-slate-500 block mb-3 tracking-widest">{pub.d}</span>
                  <h4 className="text-[1.1rem] leading-snug mb-3 group-hover:text-slate-200 transition-colors break-keep">{pub.t}</h4>
                  <div className="flex items-center gap-2 text-[10px] font-black text-teal-500 uppercase tracking-widest">{pub.j} <ArrowUpRight size={12} /></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Footer (연락처 연동) */}
      <footer id="contact" className="py-48 bg-white text-center px-10">
        <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter text-[#0f172a] leading-tight">
          능동적인 배움과 즉각적인 실천으로 <br/>한의원의 성장에 확실히 기여하겠습니다.
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-16 mb-24 font-black">
          <a href="tel:01055602182" className="flex flex-col items-center gap-3 hover:scale-105 transition-transform group">
            <span className="text-[10px] text-slate-300 uppercase tracking-widest group-hover:text-teal-600 transition-colors">Phone</span>
            <span className="text-2xl text-slate-800">010-5560-2182</span>
          </a>
          <a href="mailto:zoosilver@naver.com" className="flex flex-col items-center gap-3 hover:scale-105 transition-transform group">
            <span className="text-[10px] text-slate-300 uppercase tracking-widest group-hover:text-teal-600 transition-colors">Email</span>
            <span className="text-2xl text-slate-800 underline decoration-teal-500 underline-offset-8">zoosilver@naver.com</span>
          </a>
        </div>
        <p className="text-[10px] text-slate-200 font-black uppercase tracking-[0.4em]">© 2026 Korean Medicine Doctor Lee Ju-eun.</p>
      </footer>
    </div>
  );
};

export default Portfolio;