import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, ExternalLink, ArrowUpRight, Check, X } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null); // 추가
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // 1. 모든 경험 데이터 통합 (기관명: 한의정보협동조합 확정 및 문구 정제)
  const experiences = [
    { date: '2026', title: '추나 급여 사전교육', org: '대한한의사협회', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2026', title: '정인적방 척추관절통 강의', org: '메디스트림', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    //{ date: '2025', title: '한정협 제모 강의', org: '한의정보협동조합', tag: '강의', color: 'bg-emerald-100 text-emerald-700' }, // 정정 완료
    //{ date: '2025', title: '마음침 강의', org: '사암침법학회·마음침법학회', tag: '강의', color: 'bg-emerald-100 text-emerald-700' }, // 정정 완료
    { date: '2024', title: '동의방약학회 동계 학생부 강의', org: '동의방약학회', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2024', title: 'MPS 캠프', org: '경근근막침연구회', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2024', title: '근골격계 알고리즘 일차진료 마스터 강의', org: '메디스트림', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2023', title: '알짜 근육학', org: '메디스트림', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    //{ date: '2023', title: '통합방제한의학회 강의', org: '통합방제한의학회', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2023', title: '동의보감 캠프', org: '형상의학회', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2023.01 - 2024.08', title: '부산대학교 동제의료봉사단 부회장', org: '부산대학교 한의학전문대학원', tag: '리더십', color: 'bg-purple-100 text-purple-700' },
    { date: '2022.08 - 2024.12', title: '부산대학교 진로탐색동아리 회장', org: '부산대학교 한의학전문대학원', tag: '리더십', color: 'bg-purple-100 text-purple-700' },
    { date: '2022 - 2025', title: '양생기능의학교실 석사연구원', org: '부산대학교 한의학전문대학원', tag: '연구', color: 'bg-blue-100 text-blue-700' },
    //{ date: '2022', title: '사암침 캠프', org: '사람과하늘인간생명연구회', tag: '강의', color: 'bg-emerald-100 text-emerald-700' },
    { date: '2021', title: '물류연구실 공식 홈페이지 개발', org: '포항공과대학교', tag: '개발', color: 'bg-orange-100 text-orange-700' },
    { date: '2019', title: '정보시스템기술 강의 조교', org: '포항공과대학교', tag: '교육', color: 'bg-blue-100 text-blue-700' },
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
    
      {/* 이미지 확대 라이트박스 */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-20"
            //onClick={() => setSelectedImg(null)} // 배경 누르면 닫힘
          >
            <motion.div 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="relative max-w-6xl w-full h-full flex items-center justify-center"
              onClick={e => e.stopPropagation()} // 이미지 클릭시엔 안닫힘
            >
              <button 
                onClick={() => setSelectedImg(null)} 
                className="absolute -top-12 right-0 text-white hover:text-teal-400 flex items-center gap-2 font-black uppercase text-sm tracking-widest"
              >
                Close <X size={24} />
              </button>
              <img 
                src={selectedImg} 
                alt="논문 확대 이미지" 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Navigation (모든 섹션 항목 배치 및 프로필 복귀 추가) */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/90 backdrop-blur-md text-white border-b border-white/5">
        <div className="max-w-7xl mx-auto px-10 py-5 flex justify-between items-center font-black uppercase tracking-tighter">
          {/* 왼쪽 이름을 클릭하면 최상단(#profile)으로 이동 */}
          <a href="#profile" className="text-3xl tracking-widest group cursor-pointer">
            이주은 <span className="text-teal-400">한의사</span>
          </a>
          
          {/* 각 항목별 네비게이션 메뉴 */}
          <div className="hidden md:flex gap-8 text-[13px] tracking-[0.2em]">
            <a href="#profile" className="hover:text-teal-400 transition-colors py-2 border-b-2 border-transparent hover:border-teal-400">
              프로필
            </a>
            <a href="#philosophy" className="hover:text-teal-400 transition-colors py-2 border-b-2 border-transparent hover:border-teal-400">
              목표
            </a>
            <a href="#expertise" className="hover:text-teal-400 transition-colors py-2 border-b-2 border-transparent hover:border-teal-400">
              역량
            </a>
            <a href="#interests" className="hover:text-teal-400 transition-colors py-2 border-b-2 border-transparent hover:border-teal-400">
              관심분야
            </a>
            <a href="#experience" className="hover:text-teal-400 transition-colors py-2 border-b-2 border-transparent hover:border-teal-400">
              경험
            </a>
            <a href="#publications" className="hover:text-teal-400 transition-colors py-2 border-b-2 border-transparent hover:border-teal-400 font-bold">
              연구
            </a>
            <a href="#contact" className="hover:text-teal-400 transition-colors py-2 border-b-2 border-transparent hover:border-teal-400">
              연락처
            </a>
          </div>
        </div>
      </nav>
      
      {/* 2. Hero Section: 상단 여백 최적화 및 ID 통합 */}
      <header id="profile" className="relative pt-32 pb-48 px-10 bg-[#0f172a] text-white overflow-hidden border-b border-white/5">
        
        {/* 배경 한글 키워드: 위치 및 크기 미세 조정 */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 z-0 pointer-events-none select-none flex flex-col items-end gap-2">
          <div className="text-[12rem] font-black text-white/[0.03] leading-none tracking-tighter">
            한의사
          </div>
          <div className="text-[9rem] font-black text-white/[0.03] leading-none tracking-tighter">
            SCI/KCI 논문
          </div>
          <div className="text-[6rem] font-black text-white/[0.03] leading-none tracking-tighter whitespace-nowrap">
            근골격 · 약침 · 내과 · 미용
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          {/* 프로필 이미지 영역 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
            className="lg:col-span-4 aspect-[4/5] bg-slate-800 rounded-[3rem] overflow-hidden shadow-2xl relative group border border-white/10"
          >
            <img src="/profile.jpg" alt="한의사 이주은" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-40"></div>
          </motion.div>

          {/* 텍스트 메인 영역 */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-8 text-teal-400 text-xs font-black uppercase tracking-[0.5em]"
            >
              <span className="w-12 h-[1px] bg-teal-400"></span> Precision & Efficiency
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-5xl md:text-[5.5rem] font-[900] mb-12 leading-[1.1] tracking-tighter italic"
            >
              공학적 <span className="text-teal-400">정밀함</span> <br/>
              한의학적 <span className="text-teal-400">전문성</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-slate-400 font-bold leading-relaxed max-w-2xl break-keep space-y-2"
            > 
              <p>• 빠르고 정확한 업무 수행 능력</p>
              <p>• 성실함과 책임감</p>
              <p>• 우수한 소통 능력과 유연한 관계</p>
            </motion.div>
          </div>
        </div>
      </header>


      {/* 2-1. Overview: Key Statistics */}
      <section className="py-24 px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-12 text-teal-600 font-black uppercase tracking-widest text-xs">
            <span className="w-10 h-[1px] bg-teal-600"></span> Overview
          </div>
          <h2 className="text-4xl font-[900] text-[#0f172a] mb-16 tracking-tighter italic">Key Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 group hover:bg-teal-50 transition-all">
              <span className="text-5xl font-black text-teal-600 block mb-4">4개</span>
              <p className="text-slate-800 font-bold mb-1">수상이력</p>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-widest italic"> 최우수연구자상 등</p>
            </div>
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 group hover:bg-teal-50 transition-all">
              <span className="text-5xl font-black text-teal-600 block mb-4">2편</span>
              <p className="text-slate-800 font-bold mb-1">논문 게재</p>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-widest italic"> SCI(E) 1편, KCI 1편 </p>
            </div>
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 group hover:bg-teal-50 transition-all">
              <span className="text-5xl font-black text-teal-600 block mb-4">4개</span>
              <p className="text-slate-800 font-bold mb-1">조직 협업 프로젝트</p>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-widest italic"> 넷마블, LG CNS, 현대중공업 등</p>
            </div>
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 group hover:bg-teal-50 transition-all">
              <span className="text-5xl font-black text-teal-600 block mb-4">리더십</span>
              <p className="text-slate-800 font-bold mb-1">임원 활동</p>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-widest italic">전국단위단체, 동아리 임원 등</p>
            </div>
          </div>
        </div>
      </section>
      

{/* 2-2. Clinical Study & Goals: 빈 태그 제거 및 여백 최적화 */}
      <section id="philosophy" className="pt-20 pb-24 px-10 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-12 text-teal-600 font-black uppercase tracking-widest text-xs">
            <span className="w-10 h-[1px] bg-teal-600"></span> Philosophy
          </div>
          <h2 className="text-4xl font-[900] text-[#0f172a] mb-16 tracking-tighter italic text-left">Clinical Study & Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
              <span className="text-3xl mb-8 block">⭐</span>
              <h3 className="text-xl font-black mb-6 text-slate-800 italic">학술 활동 및 공부</h3>
              <p className="text-slate-500 leading-relaxed break-keep font-medium">
                처방과 병리는 암기보다 흐름으로 이해합니다. 배우는 단계지만, 치료의 근거를 스스로 설명할 수 있을 때까지 공부합니다. SCI(E), KCI 논문 출판도 같은 이유입니다.
              </p>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
              <span className="text-3xl mb-8 block">🎯</span>
              <h3 className="text-xl font-black mb-6 text-slate-800 italic">진료 목표 및 지향점</h3>
              <p className="text-slate-500 leading-relaxed break-keep font-medium">
                치료를 환자에게 설명할 수 없으면, 환자는 낫고도 왜 나았는지 모릅니다. 논리적으로 납득한 환자가 다시 찾아온다는 믿음으로, 검사 데이터와 근거를 활용하겠습니다.
              </p>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-200 bg-teal-50/30">
              <span className="text-3xl mb-8 block">⚡</span>
              <h3 className="text-xl font-black mb-6 text-teal-700 italic">단기 목표(최우선 과제)</h3>
              <p className="text-slate-500 leading-relaxed break-keep font-medium">
                첫 3개월, 원장님의 진료 흐름을 방해하지 않겠습니다. 상담 체계와 추나 교육 이수를 빠르게 완료하여, 실질적인 진료 분담이 되는 수준으로 올라가겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* 2-3. Expertise: 빈 태그 제거 및 여백 최적화 */}
      <section id="expertise" className="pt-20 pb-32 px-10 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-12 text-teal-400 font-black uppercase tracking-widest text-xs">
            <span className="w-10 h-[1px] bg-teal-400"></span> Expertise
          </div>
          <h2 className="text-4xl font-[900] mb-20 tracking-tighter italic text-left">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 hover:border-teal-400/50 transition-all">
              <span className="text-3xl mb-8 block">📊</span>
              <h3 className="text-xl font-black mb-4 italic text-teal-400">데이터 기반 정밀함</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                AI&빅데이터, SCI&KCI 논문.
              </p>
            </div>
            <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 hover:border-teal-400/50 transition-all">
              <span className="text-3xl mb-8 block">🎯</span>
              <h3 className="text-xl font-black mb-4 italic text-teal-400">정교한 술기, 섬세한 감각</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                가구/본체 조립, CPR Station 랭킹1위.
              </p>
            </div>
            <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 hover:border-teal-400/50 transition-all">
              <span className="text-3xl mb-8 block">🖐️</span>
              <h3 className="text-xl font-black mb-4 italic text-teal-400">높은 업무 역치와 완결성</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                대기업 프로젝트, 다양한 활동.
              </p>
            </div>
            <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 hover:border-teal-400/50 transition-all">
              <span className="text-3xl mb-8 block">🤝</span>
              <h3 className="text-xl font-black mb-4 italic text-teal-400">소통과 조직 경험</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                기업 협업, 의료봉사단 부회장, 학술동아리 교육위원, 동아리 회장.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2-2. Clinical Interests: 비율 제거 및 유니크 태그 적용 버전 */}
      <section id="interests" className="py-32 px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-12 text-teal-600 font-black uppercase tracking-widest text-xs">
            <span className="w-10 h-[1px] bg-teal-600"></span> Interests
          </div>
          <h2 className="text-4xl font-[900] text-[#0f172a] mb-16 tracking-tighter italic">Clinical Interests</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                n: '근골격·추나', 
                tag: '#최우선_정복', 
                desc: '임상에서 가장 먼저 정복하고 싶은 분야입니다. '
              }, 
              { 
                n: '초음파', 
                tag: '#정확_타겟팅', 
                desc: '시각적 근거를 바탕으로 한 초음파 유도 하 약침 시술에 관심이 있습니다.'
              }, 
              { 
                n: '소화기/내과', 
                tag: '#기전_기반', 
                desc: '평소 관심이 있어 좌금환 기전에 대한 SCI 논문을 작성하였고, 마찬가지로 환자에게 처방 이유를 명확하게 설명하고자 합니다.'
              }, 
              { 
                n: '부인·소아', 
                tag: '#공감_상담', 
                desc: '다양한 사회 경험으로 기른 공감 능력을 발휘하여, 환자의 불안을 해소하고 필요한 치료를 유연하게 제안하고 싶습니다.'
              }, 
              { 
                n: '피부·미용', 
                tag: '#트렌드_성장', 
                desc: '미용 분야에서 빠르게 발전하는 한의계에 발맞추어 적극적으로 습득하여 한의원의 전문성을 빛내는 인재가 되겠습니다.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-teal-400 transition-all group">
                <span className="inline-block px-4 py-1 rounded-full bg-white text-teal-600 text-[10px] font-black mb-6 shadow-sm group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  {item.tag}
                </span>
                <h4 className="text-2xl font-[900] text-[#0f172a] mb-4 tracking-tighter">{item.n}</h4>
                <p className="text-slate-500 text-base font-medium break-keep leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Experiences - 중요 항목 상세 구성 */}
      <section id="experience" className="py-32 px-10 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-[900] text-[#0f172a] mb-20 tracking-tighter uppercase italic border-b-2 border-[#0f172a] pb-6">
            Core Experiences
          </h2>
          
          <div className="space-y-24">
            {/* 1. 연구 역량 (논문) */}
            <div className="flex flex-col md:flex-row gap-8 border-b border-slate-200 pb-16">
              <div className="md:w-1/4 text-2xl font-black text-slate-300 italic tracking-tighter">2022 - 2025</div>
              <div className="md:w-3/4">
                <h4 className="text-3xl font-[900] text-[#0f172a] mb-3">부산대 한의전 양생기능의학교실</h4>
                <p className="text-xl text-slate-500 font-bold mb-6">석사연구원 | SCI(E) + KCI 논문 제1저자 게재</p>
                <p className="text-2xl text-teal-600 font-black flex items-start gap-3 italic leading-snug">
                  <span className="text-3xl mt-[-4px]">→</span> 
                  한약 기전을 탐구했던 것처럼, 환자에게 처방 이유를 <br className="hidden md:block"/> 데이터와 근거에 기반해 명확히 설명하고자 합니다.
                </p>
              </div>
            </div>

            {/* 2. 조직 관리 및 자원 운영 역량 (의료봉사단) */}
            <div className="flex flex-col md:flex-row gap-8 border-b border-slate-200 pb-16">
              <div className="md:w-1/4 text-2xl font-black text-slate-300 italic tracking-tighter">2023.01 - 2024.08</div>
              <div className="md:w-3/4">
                <h4 className="text-3xl font-[900] text-[#0f172a] mb-3">부산대학교 동제의료봉사단</h4>
                <p className="text-xl text-slate-500 font-bold mb-6">
                  부회장 | 한의전 유일 봉사동아리 (120명 규모) 기획 및 예산 총괄
                </p>
                <p className="text-2xl text-teal-600 font-black flex items-start gap-3 italic leading-snug">
                  <span className="text-3xl mt-[-4px]">→</span> 
                  120명 대규모 조직의 연간 예산 수립 및 모든 금융·회계 업무 전담 <br className="hidden md:block"/> 
                  의료 물품 구매 및 봉사 현장 운영 프로세스 기획 (회장과 공동 진행)
                </p>
              </div>
            </div>

            {/* 3. 업무 완결성 (넷마블/IT) */}
            <div className="flex flex-col md:flex-row gap-8 border-b border-slate-200 pb-16">
              <div className="md:w-1/4 text-2xl font-black text-slate-300 italic tracking-tighter">2019 - 2021</div>
              <div className="md:w-3/4">
                <h4 className="text-3xl font-[900] text-[#0f172a] mb-3">넷마블 · 현대중공업 프로젝트</h4>
                <p className="text-xl text-slate-500 font-bold mb-6">빅데이터 담당 인턴 및 알고리즘 개발 연구원</p>
                <p className="text-2xl text-teal-600 font-black flex items-start gap-3 italic leading-snug">
                  <span className="text-3xl mt-[-4px]">→</span> 
                  성실한 태도와 빠르고 정확한 업무 완결성으로 <br className="hidden md:block"/> 최종 입사 제의를 받았습니다.
                </p>
              </div>
            </div>

            {/* 4. 리더십 및 실무 (재활추나과) */}
            <div className="flex flex-col md:flex-row gap-8 pb-16">
              <div className="md:w-1/4 text-2xl font-black text-slate-300 italic tracking-tighter">2025</div>
              <div className="md:w-3/4">
                <h4 className="text-3xl font-[900] text-[#0f172a] mb-3">부산대 한의전 임상실습</h4>
                <p className="text-xl text-slate-500 font-bold mb-6">재활추나과 통합팀장 | 실전 임상 교육 및 조직 관리</p>
                <p className="text-2xl text-teal-600 font-black flex items-start gap-3 italic leading-snug">
                  <span className="text-3xl mt-[-4px]">→</span> 
                  가장 업무 부담이 많은 포지션을 자원하여 <br className="hidden md:block"/> 끝까지 책임을 다하였습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Publications (설명 문구 추가 버전) */}
      <section id="publications" className="py-40 bg-[#0f172a] text-white px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-[900] text-teal-400 mb-20 tracking-tighter uppercase italic border-b-2 border-[#0f172a] pb-6">
            Research
          </h2>
          <div className="space-y-32">
            {[ 
              { 
                d: '2024.10', 
                t: 'Zuojin Pill enhances gastrointestinal motility by modulating the pacemaker potentials in interstitial cells of Cajal through multiple signaling pathways', 
                j: 'INTERNATIONAL JOURNAL OF MEDICAL SCIENCES (SCIE)', 
                l: 'https://pubmed.ncbi.nlm.nih.gov/39628697/', 
                img: '/sci.jpg',
                desc: '패치 클램프(Patch-clamp) 실험 기법을 사용하여 좌금환이 장내 박동세포(ICC)의 박동 전압 신호를 조절함으로써 위장관의 운동성을 변화시키는 과정을 탐구한 연구입니다.'
              }, 
              { 
                d: '2024.06', 
                t: '네트워크 약리학 연구를 통한 좌금환의 기능성 소화불량증 치료기전 연구', 
                j: '대한한의학 방제학회지 (KCI)', 
                l: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003117615', 
                img: '/kci.jpg',
                desc: '네트워크 약리학 분석을 통해 좌금환 내 주요 성분들과 기능성 소화불량증 관련 타겟 유전자 간의 상관관계를 분석하고 약물의 다중 치료 경로를 확인한 연구입니다.'
              } 
            ].map((pub, i) => (
              <div key={i} className="flex flex-col lg:flex-row gap-20 items-center lg:items-start group">
                {/* 논문 그림 영역 */}
                <div 
                  className="w-full lg:w-3/5 aspect-video bg-slate-800 rounded-[2.5rem] overflow-hidden flex-shrink-0 cursor-zoom-in border border-white/10 shadow-2xl relative"
                  onClick={() => setSelectedImg(pub.img)}
                >
                  <img src={pub.img} alt="Publication Figure" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                
                {/* 논문 정보 영역 */}
                <div className="flex-1">
                  <span className="text-xs font-black text-slate-500 block mb-6 tracking-[0.4em] uppercase">{pub.d}</span>
                  <h4 className="text-2xl md:text-3xl font-bold leading-tight mb-6 group-hover:text-teal-400 transition-colors break-keep">{pub.t}</h4>
                  
                  {/* 설명 문구 추가 부분 */}
                  <p className="text-slate-400 leading-relaxed mb-8 font-medium break-keep">
                    {pub.desc}
                  </p>

                  <p className="text-teal-500/80 font-black uppercase tracking-[0.2em] text-sm mb-10 italic">
                    {pub.j}
                  </p>
                  <a 
                    href={pub.l} target="_blank" rel="noopener noreferrer" 
                    className="inline-flex items-center gap-3 px-10 py-5 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all font-black uppercase text-xs tracking-widest"
                  >
                    View Full Paper <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 5. Experience  */}
      <section id="experience" className="py-32 px-10 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-[#0f172a] mb-12 tracking-tight uppercase text-center">Experiences</h2>
          
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

      {/* 6. Credentials (Education & Awards 통합 섹션) */}
      <section id="credentials" className="py-32 px-10 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* 좌측: Education (학력) */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-black text-[#0f172a] mb-12 tracking-tight uppercase italic border-l-4 border-teal-500 pl-6">Education</h2>
              <div className="space-y-6">
                {[
                  { s: '부산대학교 한의학전문대학원', d: '한의학 석사', t: '2022 - 2026' },
                  { s: 'Graz University of Technology', d: '교환학생 과정', t: '2018 - 2019' },
                  { s: '포항공과대학교 (POSTECH)', d: '산업경영공학 학사', t: '2015 - 2019' }
                ].map((edu, i) => (
                  <div key={i} className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-teal-400 transition-all shadow-sm">
                    <h4 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-teal-600 transition-colors">{edu.s}</h4>
                    <div className="flex justify-between items-end">
                      <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">{edu.d}</p>
                      <span className="text-xs font-black text-slate-300 group-hover:text-slate-900 transition-colors">{edu.t}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 우측: Awards & Scholarship (수상) */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-black text-[#0f172a] mb-12 tracking-tight uppercase italic border-l-4 border-teal-500 pl-6">Awards</h2>
              <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm h-full">
                <div className="space-y-10">
                  {[
                    { y: '2026', t: '최우수연구자상', o: '부산대 한의전' },
                    { y: '2026', t: '대한한방병원협회장상', o: '부산대 한의전' },
                    { y: '2022-2025', t: '성적우수장학금', o: '부산대학교' },
                    { y: '2020', t: '전민근연구실장학금', o: 'POSTECH' }
                  ].map((award, i) => (
                    <div key={i} className="relative pl-8 border-l border-slate-100 group">
                      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-slate-200 group-hover:bg-teal-500 transition-colors" />
                      <span className="text-[10px] font-black text-slate-300 group-hover:text-teal-600 transition-colors uppercase tracking-[0.2em] mb-1 block">{award.y}</span>
                      <h4 className="text-lg font-bold text-slate-800 leading-tight mb-1">{award.t}</h4>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{award.o}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Final Commitment */}
      <footer id="contact" className="relative py-60 bg-white overflow-hidden">
        {/* 배경 장식 요소: 그리드 블러 */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', size: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="flex flex-col items-center">
            {/* 상단 뱃지 */}
            <motion.div 
              whileInView={{ y: 0, opacity: 1 }} initial={{ y: 20, opacity: 0 }}
              className="px-6 py-2 rounded-full border border-teal-500/30 text-teal-600 text-xs font-black uppercase tracking-[0.5em] mb-12 italic"
            >
              Commitment to Excellence
            </motion.div>

            {/* 메인 슬로건: 그라데이션 타이포그래피 강조 */}
            <h2 className="text-4xl md:text-7xl font-[900] mb-20 tracking-tighter leading-[1.1] text-center">
              <span className="text-[#0f172a]">능동적인 배움과</span> <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-600">
                즉각적인 실천으로
              </span> <br/>
              <span className="text-[#0f172a] border-b-8 border-teal-100 pb-2">성장에 기여하겠습니다.</span>
            </h2>

            {/* 연락처 영역: 가로 구분선 */}
            <div className="w-full max-w-4xl h-[1px] bg-slate-100 mb-20" />
            
            <div className="flex flex-col md:flex-row justify-center gap-20 md:gap-40 w-full font-black">
              <a href="tel:01055602182" className="group flex flex-col items-center gap-4 transition-transform hover:-translate-y-2">
                <span className="text-[11px] text-slate-400 uppercase tracking-[0.4em] group-hover:text-teal-500 transition-colors">Direct Phone</span>
                <span className="text-3xl text-slate-800 tracking-tighter transition-colors group-hover:text-[#0f172a]">010.5560.2182</span>
              </a>
              <a href="mailto:zoosilver@naver.com" className="group flex flex-col items-center gap-4 transition-transform hover:-translate-y-2">
                <span className="text-[11px] text-slate-400 uppercase tracking-[0.4em] group-hover:text-teal-500 transition-colors">Official Email</span>
                <span className="text-3xl text-slate-800 tracking-tighter transition-colors group-hover:text-[#0f172a] border-b-2 border-teal-500/20">zoosilver@naver.com</span>
              </a>
            </div>
            
            {/* 저작권 */}
            <div className="mt-40 text-[10px] text-slate-400 font-black uppercase tracking-[0.6em]">
              © 2026 Lee Jueun. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;