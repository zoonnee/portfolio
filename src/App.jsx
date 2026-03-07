import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, ArrowUpRight, Check } from 'lucide-react';

const Portfolio = () => {
  // 모든 경험 데이터를 통합하여 시간 역순으로 정렬
  const experiences = [
    { date: '2026', title: '추나 급여 사전교육 이수', org: '대한한의사협회', tag: '수료', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2026', title: '정인적방 척추관절통 강의 수강', org: '메디스트림', tag: '수강', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2026', title: '한정협 제모 스터디 수료', org: '한국정진한의학협회', tag: '수료', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2025', title: '마음침 강의 수료', org: '메디스트림', tag: '수료', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2022 - 2025', title: '양생기능의학교실 학생연구원', org: '부산대학교 한의학전문대학원', tag: '연구', color: 'bg-blue-100 text-blue-700' },
    { date: '2023.01 - 2024.08', title: '동제의료봉사단 부회장', org: '부산대학교 한의학전문대학원', tag: '리더십', color: 'bg-purple-100 text-purple-700' },
    { date: '2022.08 - 2024.12', title: '진로탐색동아리 회장', org: '부산대학교 한의학전문대학원', tag: '리더십', color: 'bg-purple-100 text-purple-700' },
    { date: '2024', title: '사암침 캠프 수료', org: '메디스트림', tag: '수료', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2024', title: 'MPS 캠프 수료', org: '메디스트림', tag: '수료', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2024', title: '근골격계 알고리즘 일차진료 마스터 강의 수강', org: '메디스트림', tag: '수강', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2021', title: '물류연구실 공식 홈페이지 개발', org: '포항공과대학교', tag: '개발', color: 'bg-orange-100 text-orange-700' },
    { date: '2019 - 2022', title: '물류연구실 석·박사통합과정 연구원', org: '포항공과대학교', tag: '연구', color: 'bg-blue-100 text-blue-700' },
    { date: '2019.12 - 2020.12', title: '현대중공업 3D BPP 알고리즘 개발', org: '포항공과대학교', tag: '개발', color: 'bg-orange-100 text-orange-700' },
    { date: '2019.09 - 2020.12', title: '드론 배치 알고리즘 개발', org: '포항공과대학교', tag: '개발', color: 'bg-orange-100 text-orange-700' },
    { date: '2019', title: '빅데이터 처리 파이프라인 구축 [인턴]', org: '넷마블', tag: '개발', color: 'bg-orange-100 text-orange-700' },
    { date: '2019.02 - 2019.11', title: 'R 프로그래밍 및 기초통계 MOOC 강의 조교', org: 'POSTECH', tag: '교육', color: 'bg-indigo-100 text-indigo-700' },
    { date: '2018', title: '생산설비 모니터링 시스템 구축 [인턴]', org: 'LG CNS', tag: '개발', color: 'bg-orange-100 text-orange-700' }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] font-['Pretendard'] selection:bg-teal-100">
      
      {/* 1. Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-10 py-5 flex justify-between items-center">
          <span className="font-black text-xl tracking-tighter uppercase italic">Lee Ju-eun</span>
          <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
            <a href="#philosophy" className="hover:text-teal-400 transition-colors">Philosophy</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
            <a href="#publications" className="hover:text-teal-400 transition-colors">Publications</a>
            <a href="#awards" className="hover:text-teal-400 transition-colors">Awards</a>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="pt-48 pb-32 px-10 bg-[#0f172a] text-white relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/10 blur-[150px] rounded-full translate-x-1/4" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-6 text-teal-400 text-xs font-bold tracking-[0.4em] uppercase">
              <span className="w-8 h-[1px] bg-teal-400"></span> Warm Heart, Cool Logic
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="text-5xl md:text-[5.5rem] font-black mb-10 leading-[1] tracking-tight"
            >
              마음으로 공감하고 <br/>
              <span className="text-teal-400">근거로 진료하는</span> 한의사
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">
              따뜻한 진심과 냉철한 논리를 바탕으로 환자에게 가장 적절한 선택을 제안합니다.
            </motion.p>
          </div>
          <div className="lg:col-span-4 aspect-[4/5] bg-slate-800 rounded-3xl overflow-hidden border-2 border-white/5 shadow-2xl hover:grayscale-0 transition-all duration-1000">
             {/* public/profile.jpg 파일이 나타납니다 */}
             {/* Hero Section 내의 이미지 영역 수정 */}
<div className="lg:col-span-4 aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden border-2 border-white/5 shadow-2xl transition-all duration-1000 relative group">
  <img 
    src="/profile.jpg" 
    alt="한의사 이주은" 
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  />
</div>
          </div>
        </div>
      </header>

      {/* 3. Philosophy & Expertise (대주제 크기 조정) */}
      <section id="philosophy" className="py-32 px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <h2 className="text-3xl font-black text-[#0f172a] mb-12 tracking-tight uppercase border-l-4 border-teal-500 pl-6">Philosophy</h2>
              <div className="space-y-12">
                <div className="group">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3 tracking-tight"><Check className="text-teal-500" size={20} /> 환자가 납득할 수 있는 치료</h3>
                  <p className="text-slate-500 leading-relaxed break-keep">정확한 근거와 데이터를 통해 환자가 자신의 상태를 명확히 이해하고 치료에 참여할 수 있도록 돕습니다.</p>
                </div>
                <div className="group">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3 tracking-tight"><Check className="text-teal-500" size={20} /> 시스템적 접근을 통한 근본 치료</h3>
                  <p className="text-slate-500 leading-relaxed break-keep">공학적 사고를 투영하여 신체 구조적 불균형과 시스템적 오류를 분석하여 재발 방지를 지향합니다.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-[#0f172a] mb-12 tracking-tight uppercase border-l-4 border-teal-500 pl-6">Clinical Interests</h2>
              <div className="space-y-8">
                {[
                  { n: '근골격·추나', p: '95%' }, { n: '초음파', p: '90%' }, { n: '소화·호흡기', p: '85%' }, { n: '부인·소아', p: '80%' }, { n: '미용', p: '80%' }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2 text-sm font-black text-slate-800 uppercase tracking-widest">
                      <span>{item.n}</span>
                      <span className="text-teal-600">{item.p}</span>
                    </div>
                    <div className="h-[2px] bg-slate-100 w-full overflow-hidden">
                      <motion.div 
                        whileInView={{ width: item.p }} initial={{ width: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }}
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

      {/* 4. Professional Experience (통합 시간 역순 + 컬러 라벨링) */}
      <section id="experience" className="py-32 px-10 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-[#0f172a] mb-20 tracking-tight uppercase text-center">Professional Experience</h2>
          
          <div className="bg-white shadow-sm rounded-3xl overflow-hidden border border-slate-200 divide-y divide-slate-100">
            {experiences.map((exp, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center p-8 group hover:bg-slate-50 transition-colors">
                <div className="w-48 mb-3 md:mb-0">
                  <span className="text-xs font-black text-slate-300 group-hover:text-[#0f172a] transition-colors uppercase tracking-widest">{exp.date}</span>
                </div>
                <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${exp.color} w-fit`}>
                    {exp.tag}
                  </span>
                  <h4 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight leading-tight">{exp.title}</h4>
                </div>
                <div className="md:w-64 text-left md:text-right mt-3 md:mt-0">
                  <span className="text-[12px] font-bold text-slate-400 group-hover:text-teal-600 transition-colors uppercase tracking-widest">{exp.org}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Education & Publications (정확한 이력 데이터 반영) */}
      <section className="py-32 bg-[#0f172a] text-white px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div>
            <h2 className="text-3xl font-black text-teal-400 mb-16 tracking-tight uppercase">Education</h2>
            <div className="space-y-12">
              {[
                { s: '부산대학교 한의학전문대학원', d: '한의학 석사(졸업)', t: '2022 - 2026' },
                { s: '포항공과대학교 (POSTECH)', d: '산업경영공학 학사(졸업)', t: '2015 - 2019' },
                { s: 'Graz University of Technology', d: '교환학생 과정 이수', t: '2018.09 - 12' }
              ].map((item, i) => (
                <div key={i} className="group border-l border-white/10 pl-8 py-2 hover:border-teal-400 transition-all">
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-teal-400 transition-colors tracking-tight">{item.s}</h4>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-widest italic">{item.d} · {item.t}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="publications">
            <h2 className="text-3xl font-black text-teal-400 mb-16 tracking-tight uppercase">Publications</h2>
            <div className="space-y-10">
              {[
                { d: '2024.10', t: 'Zuojin Pill enhances gastrointestinal motility by modulating ICC pacemaker potentials', j: 'INTERNATIONAL JOURNAL OF MEDICAL SCIENCES (SCIE)', l: 'https://doi.org/10.7150/ijms.94524' },
                { d: '2024.06', t: '네트워크 약리학 연구를 통한 좌금환의 기능성 소화불량증 치료기전 연구', j: '한의방제학회지 (KCI)', l: 'https://doi.org/10.22246/jikm.2024.45.3.365' }
              ].map((pub, i) => (
                <a key={i} href={pub.l} target="_blank" rel="noopener noreferrer" className="block group border-l border-white/10 pl-8 py-2 hover:border-teal-400 transition-all">
                  <span className="text-[10px] font-bold text-slate-500 block mb-3 tracking-widest">{pub.d}</span>
                  <h4 className="text-[1.1rem] font-bold leading-snug mb-3 group-hover:text-slate-200 transition-colors tracking-tight">{pub.t}</h4>
                  <div className="flex items-center gap-2 text-[10px] font-black text-teal-500 uppercase tracking-widest">
                    {pub.j} <ArrowUpRight size={12} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Awards & Scholarship */}
      <section id="awards" className="py-32 px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-[#0f172a] mb-20 tracking-tight uppercase text-center">Awards & Scholarship</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { y: '2026', t: '최우수연구자상', o: '부산대학교 한의학전문대학원' },
              { y: '2026', t: '대한한방병원협회장상', o: '부산대학교 한의학전문대학원' },
              { y: '2022-2025', t: '성적우수장학금', o: '부산대학교' },
              { y: '2020', t: '전민근연구실장학금', o: 'POSTECH' }
            ].map((award, i) => (
              <div key={i} className="group p-8 border border-slate-100 rounded-3xl hover:bg-slate-50 transition-colors">
                <span className="text-[11px] font-black text-slate-200 block mb-4 tracking-[0.3em] group-hover:text-teal-600 transition-colors">{award.y}</span>
                <h4 className="text-lg font-bold mb-2 text-slate-900 tracking-tight">{award.t}</h4>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{award.o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Lifestyle (주은님만의 감성 반영) */}
      <section className="py-32 bg-slate-900 text-white px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-500 uppercase tracking-[0.5em] mb-24 italic">Balance in Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            <div>
              <span className="text-[11px] font-black text-teal-400 uppercase tracking-widest mb-6 block italic">Swimming</span>
              <p className="text-slate-400 leading-[2] break-keep text-base">일정한 호흡의 리듬에 맞춰 관절의 가동 범위를 느끼다 보면, 정적인 평온함과 동적인 에너지가 공존하는 몰입을 경험합니다.</p>
            </div>
            <div>
              <span className="text-[11px] font-black text-teal-400 uppercase tracking-widest mb-6 block italic">Drum</span>
              <p className="text-slate-400 leading-[2] break-keep text-base">정교한 비트 위에 몸을 맡기며 일상의 긴장을 해소하고, 타격음이 주는 명쾌한 에너지를 통해 새로운 활력을 얻습니다.</p>
            </div>
            <div>
              <span className="text-[11px] font-black text-teal-400 uppercase tracking-widest mb-6 block italic">Piano</span>
              <p className="text-slate-400 leading-[2] break-keep text-base">쇼팽 발라드와 크리스티안 지메르만. 섬세하면서도 강렬한 감성의 조화가 주는 깊은 울림을 좋아합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Footer (안내 멘트 수정) */}
      <footer id="contact" className="py-48 bg-white border-t border-slate-100 text-center px-10">
        <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter text-[#0f172a] leading-none">함께 성장할 <br/>파트너를 찾으시나요?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-16 mb-24">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Phone</span>
            <span className="text-2xl font-black text-slate-800">010-5560-2182</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Email</span>
            <span className="text-2xl font-black text-slate-800 underline decoration-teal-500 underline-offset-8">zoosilver@naver.com</span>
          </div>
        </div>
        <p className="text-[10px] text-slate-200 font-black uppercase tracking-[0.4em]">© 2026 Korean Medicine Doctor Lee Ju-eun.</p>
      </footer>
    </div>
  );
};

export default Portfolio;