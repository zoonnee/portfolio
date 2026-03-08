import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, ExternalLink, ArrowUpRight, Check, X } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null); // 추가

  // 1. 모든 경험 데이터 통합 (기관명: 한의정보협동조합 확정 및 문구 정제)
  const experiences = [
    { date: '2026', title: '추나 급여 사전교육', org: '대한한의사협회', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2026', title: '정인적방 척추관절통 강의', org: '메디스트림', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2025', title: '한정협 제모 강의', org: '한의정보협동조합', tag: '강의', color: 'bg-emerald-100 text-emerald-700' }, // 정정 완료
    { date: '2025', title: '마음침 강의', org: '사암침법학회·마음침법학회', tag: '강의', color: 'bg-emerald-100 text-emerald-700' }, // 정정 완료
    { date: '2024', title: '동의방약학회 동계 학생부 강의', org: '동의방약학회', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2024', title: 'MPS 캠프', org: '경근근막침연구회', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2024', title: '근골격계 알고리즘 일차진료 마스터 강의', org: '메디스트림', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2023', title: '통합방제한의학회 강의', org: '통합방제한의학회', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2023', title: '동의보감 캠프', org: '형상의학회', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2023.01 - 2024.08', title: '동제의료봉사단 부회장', org: '부산대학교 한의학전문대학원', tag: '리더십', color: 'bg-purple-100 text-purple-700' },
    { date: '2022.08 - 2024.12', title: '진로탐색동아리 회장', org: '부산대학교 한의학전문대학원', tag: '리더십', color: 'bg-purple-100 text-purple-700' },
    { date: '2022 - 2025', title: '양생기능의학교실 석사연구원', org: '부산대학교 한의학전문대학원', tag: '연구', color: 'bg-blue-100 text-blue-700' },
    { date: '2022', title: '사암침 캠프', org: '사람과하늘인간생명연구회', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2021', title: '물류연구실 공식 홈페이지 개발', org: '포항공과대학교', tag: '개발', color: 'bg-orange-100 text-orange-700' },
    { date: '2019 - 2022', title: '물류연구실 석·박사통합과정 연구원', org: '포항공과대학교', tag: '연구', color: 'bg-blue-100 text-blue-700' },
    { date: '2019.12 - 2020.12', title: '현대중공업 3D BPP 알고리즘 개발', org: '포항공과대학교', tag: '개발', color: 'bg-orange-100 text-orange-700' },
    { date: '2019.09 - 2020.12', title: '드론 배치 알고리즘 개발', org: '포항공과대학교', tag: '개발', color: 'bg-orange-100 text-orange-700' },
    { date: '2019', title: '빅데이터 처리 파이프라인 구축 인턴', org: '넷마블', tag: '개발', color: 'bg-orange-100 text-orange-700' },
    { date: '2019.02 - 2019.11', title: 'R 프로그래밍 MOOC 강의 조교', org: '포항공과대학교', tag: '교육', color: 'bg-indigo-100 text-indigo-700' },
    { date: '2019.02 - 2019.11', title: '기초통계 MOOC 강의 조교', org: '포항공과대학교', tag: '교육', color: 'bg-indigo-100 text-indigo-700' },
    { date: '2018', title: '생산 모니터링 시스템 구축 인턴', org: 'LG CNS', tag: '개발', color: 'bg-orange-100 text-orange-700' }
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
              <span className="w-8 h-[1px] bg-teal-400"></span> Cool head and warm heart
            </div>
            <h1 className="text-5xl md:text-[5.5rem] font-black mb-10 leading-[1] tracking-tight">
              마음으로 공감하고 <br/>
              <span className="text-teal-400">근거로 진료하는</span> 한의사
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">따뜻한 진심과 냉철한 논리를 바탕으로 환자에게 가장 적절한 선택을 제안합니다.</p>
          </div>
          <div 
            onClick={() => setIsProfileOpen(true)}
            className="lg:col-span-4 aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer">
            <img src="/profile.jpg" alt="한의사 이주은" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </header>

      {/* 3. Philosophy & Clinical Interests 섹션 */}
      <section id="philosophy" className="py-32 px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            {/* Philosophy 섹션 - 자기소개서 내용 기반 */}
            <div>
              <h2 className="text-3xl font-black text-[#0f172a] mb-12 tracking-tight uppercase border-l-4 border-teal-500 pl-6">Philosophy</h2>
              <div className="space-y-12">
                <div className="group">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3 tracking-tight">
                    <Check className="text-teal-500" size={20} /> 명확한 근거와 납득 가능한 치료
                  </h3>
                  <p className="text-slate-500 leading-relaxed break-keep font-medium">
                    환자가 자신의 상태를 명확히 이해하고 치료에 참여할 수 있도록 데이터와 시각적 근거를 제시합니다.
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3 tracking-tight">
                    <Check className="text-teal-500" size={20} /> 시스템적 접근을 통한 근본 치료
                  </h3>
                  <p className="text-slate-500 leading-relaxed break-keep font-medium">
                    공학적 사고를 바탕으로 신체의 구조적 불균형과 시스템적 오류를 분석하여 재발 없는 치료를 지향합니다. 
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3 tracking-tight">
                    <Check className="text-teal-500" size={20} /> 일관성 있는 행동으로 쌓는 신뢰
                  </h3>
                  <p className="text-slate-500 leading-relaxed break-keep font-medium">
                    경청과 공감, 그리고 흔들리지 않는 안정적인 진료를 통해 환자와의 깊은 신뢰 관계를 형성합니다. 
                  </p>
                </div>
              </div>
            </div>

            {/* Clinical Interests 섹션 - 숙련도 지표 반영 */}
            <div>
              <h2 className="text-3xl font-black text-[#0f172a] mb-12 tracking-tight uppercase border-l-4 border-teal-500 pl-6">Clinical Interests</h2>
              <div className="space-y-8">
                {[
                  { n: '근골격·추나', p: '90%' }, 
                  { n: '초음파', p: '95%' }, 
                  { n: '소화기', p: '80%' }, 
                  { n: '부인·소아', p: '80%' }, 
                  { n: '피부·미용', p: '80%' }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2 text-sm font-black text-slate-800 uppercase tracking-widest">
                      <span>{item.n}</span>
                      <span className="text-teal-600">{item.p}</span>
                    </div>
                    <div className="h-[2px] bg-slate-100 w-full overflow-hidden">
                      <motion.div 
                        whileInView={{ width: item.p }} 
                        initial={{ width: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-[#0f172a]" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div className="space-y-16">
              {[ 
                { d: '2024.10', t: 'Zuojin Pill enhances gastrointestinal motility...', j: 'Int J Med Sci (SCIE)', l: 'https://pubmed.ncbi.nlm.nih.gov/39628697/', img: '/sci.jpg' },
                { d: '2024.06', t: '네트워크 약리학 연구를 통한 좌금환의 기능성 소화불량증 치료기전 연구', j: '대한한의학 방제학회지 (KCI)', l: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003117615', img: '/kci.jpg' }
              ].map((pub, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-10 items-start group">
                  <div className="w-full md:w-56 aspect-[4/3] bg-slate-800 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 shadow-xl cursor-zoom-in" onClick={() => setSelectedImg(pub.img)}>
                    <img src={pub.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                  </div>
                  <a href={pub.l} target="_blank" rel="noopener noreferrer" className="flex-1 block border-l border-white/10 pl-8 py-2 hover:border-teal-400 transition-all font-bold tracking-tight">
                    <span className="text-[10px] font-black text-slate-500 block mb-3 tracking-widest">{pub.d}</span>
                    <h4 className="text-[1.2rem] leading-snug mb-4 group-hover:text-slate-200 transition-colors break-keep italic">{pub.t}</h4>
                    <div className="flex items-center gap-2 text-[10px] font-black text-teal-500 uppercase tracking-widest">{pub.j} <ArrowUpRight size={14} /></div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Awards & Scholarship 복구 */}
      <section id="awards" className="py-32 px-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-[#0f172a] mb-20 tracking-tight uppercase text-center">Awards & Scholarship</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ { y: '2026', t: '최우수연구자상', o: '부산대학교 한의학전문대학원' }, { y: '2026', t: '대한한방병원협회장상', o: '부산대학교 한의학전문대학원' }, { y: '2022-2025', t: '성적우수장학금', o: '부산대학교' }, { y: '2020', t: '전민근연구실장학금', o: '포항공과대학교' } ].map((award, i) => (
              <div key={i} className="group p-8 border border-slate-100 rounded-3xl hover:bg-slate-50 transition-colors">
                <span className="text-[11px] font-black text-slate-200 block mb-4 tracking-[0.3em] group-hover:text-teal-600 transition-colors">{award.y}</span>
                <h4 className="text-lg font-bold mb-2 text-slate-900 tracking-tight">{award.t}</h4>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{award.o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Balance in Life 복구 */}
      <section className="py-32 bg-slate-900 text-white px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-black text-teal-400 mb-16 uppercase">Balance in Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24">
            <div><span className="text-[11px] font-black text-teal-400 uppercase tracking-widest mb-6 block italic">Swimming</span><p className="text-slate-400 leading-[2] break-keep text-base font-medium">평온함과 역동감을 동시에 느끼면서 호흡을 조절하는 것에 집중하는 시간이 좋습니다.</p></div>
            <div><span className="text-[11px] font-black text-teal-400 uppercase tracking-widest mb-6 block italic">Drum</span><p className="text-slate-400 leading-[2] break-keep text-base font-medium">일상의 긴장을 해소하고 활력을 얻습니다.</p></div>
            <div><span className="text-[11px] font-black text-teal-400 uppercase tracking-widest mb-6 block italic">Piano</span><p className="text-slate-400 leading-[2] break-keep text-base font-medium">쇼팽 콩쿠르를 시청하며 국가고시를 준비했던 것이 기억납니다.</p></div>
            <div><span className="text-[11px] font-black text-teal-400 uppercase tracking-widest mb-6 block italic">Chess</span><p className="text-slate-400 leading-[2] break-keep text-base font-medium">직접 두는 실력보다, 친구들 플레이에 훈수두는 재미를 잘 압니다.</p></div>
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