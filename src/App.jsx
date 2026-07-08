import { useState } from 'react'
import heroImg from './assets/img/profile-hero.jpg'
import outroImg from './assets/img/profile-outro.jpg'
import './App.css'

const CONTACT = {
  email: 'ohohdmswlgd@gmail.com',
  phone: '010-8879-9112',
  github: 'https://github.com/eunji731',
}

const SKILLS = ['Java', 'Spring', 'MyBatis', 'JPA', 'PostgreSQL', 'Elasticsearch', 'Next.js', 'React']

const CAREER_START = { year: 2023, month: 8 }

function getCareerDuration() {
  const now = new Date()
  let months =
    (now.getFullYear() - CAREER_START.year) * 12 + (now.getMonth() + 1 - CAREER_START.month)
  if (now.getDate() < 1) months -= 1
  months = Math.max(months, 0)

  const years = Math.floor(months / 12)
  const remainMonths = months % 12

  if (years === 0) return `${remainMonths}개월`
  if (remainMonths === 0) return `${years}년`
  return `${years}년 ${remainMonths}개월`
}

const ABOUT_STATS = [
  { label: '경력', value: getCareerDuration() },
  { label: '분야', value: '백엔드 개발' },
  { label: '중심 경험', value: '공공・데이터 SI' },
  { label: '기록 시작', value: '2023.08 ~ 현재' },
]

const WORK_STYLE = [
  { title: '구조 먼저', desc: '기능 구현 전 업무 흐름과 데이터 관계를 먼저 정리합니다.' },
  { title: '기준 명확화', desc: '권한・상태・예외 기준을 나눠 오류 가능성을 줄입니다.' },
  { title: '운영 고려', desc: '반복 로직은 공통화해 유지보수성을 높입니다.' },
  { title: '협업 중심', desc: '요구사항을 정리하고 공유해 재작업을 줄입니다.' },
]

const KEYWORDS = ['구조화', '책임감', '안정성', '소통']

const PRINCIPLES = [
  { title: '데이터 흐름 이해', desc: '데이터가 생성되고 흐르며 활용되는 과정을 깊이 이해합니다.' },
  { title: '일관된 처리 기준', desc: '명확한 기준과 규칙으로 예측 가능한 시스템을 만드는 것을 지향합니다.' },
  { title: '확장 가능한 구조', desc: '변화에 유연하게 대응할 수 있는 구조와 설계를 우선합니다.' },
]

const TIMELINE = [
  { date: '2023.09', title: 'BIDA', desc: '계층형 게시판 시스템 구축' },
  { date: '2023.11', title: '2023 공공 빅데이터 표준분석모델 정립 및 확산', desc: '데이터 시각화' },
  { date: '2024.02', title: '데이터 공유・활용 플랫폼 구축', desc: '데이터 업로드 및 다운로드 기능 개발' },
  { date: '2024.08', title: '서울형 빅데이터 표준분석모델 구축', desc: 'GIS 기반 분석 데이터 처리 및 시스템 백엔드 설계・구현', featured: true },
  { date: '2025.04', title: '스마트K팩토리 3차 고도화 구축 용역', desc: '검색 아키텍처 고도화 및 시스템 백엔드 설계・구현', featured: true },
  { date: '2025.10', title: '2025 공공 빅데이터 표준분석모델 정립 및 확산', desc: 'GIS 분석 데이터 이관・처리 및 시스템 백엔드 설계・구현' },
  { date: '2026.02', title: '사내 프로젝트관리시스템(PMS) 구축', desc: '데이터베이스 구조 설계 및 시스템 백엔드 설계・구현', featured: true },
  { date: '2026.05', title: 'MUNGLOG(멍로그)', desc: '반려 생활 기록 기반 펫 라이프로그 서비스 기획・구현', featured: true },
]

const PROJECTS = [
  {
    tag: 'PROJECT 01',
    featured: true,
    title: '서울형 빅데이터 표준분석모델 구축',
    subtitle: 'GIS 분석 데이터 처리 및 백엔드 연계 구조 구현',
    period: '2024.08 ~ 2025.01',
    stack: ['Java', 'Spring Framework', 'MyBatis', 'PostgreSQL/PostGIS', 'GeoServer', 'OpenLayers', 'ECharts', 'JSP', 'jQuery'],
    summary:
      '서울시 행정・공간 데이터를 기반으로 표준 분석모델을 구축하는 프로젝트. 사용자가 지도에서 선택한 분석 영역을 서버에서 좌표 데이터로 수신하고, GeoServer와 PostgreSQL/PostGIS를 연계해 분석 결과를 생성・저장・시각화하는 흐름을 구현했습니다.',
    role: [
      'GIS 기반 분석 데이터 처리 흐름 및 백엔드 연계 구조 설계',
      'DB 쿼리 조회 기반 GeoServer 레이어 구성 및 공간 데이터 검증',
      '지도 선택 영역 데이터를 서버에서 좌표값으로 수신・검증・정규화 처리',
      'ECharts 기반 차트 공통 유틸 10여 개 이상 구현',
      '관리자 페이지 내 분석 결과 조회 화면 및 메뉴 관리 기능 신규 구현',
    ],
    achievements: [
      'GeoServer 레이어 구성과 데이터 검증을 통해 지도 기반 분석 결과 표출 안정화',
      '차트 공통 유틸 10여 개 이상 구현으로 시각화 화면 개발 효율 향상',
      '관리자 페이지 기반 분석 결과 확인 및 메뉴 관리 기능으로 운영 편의성 개선',
    ],
  },
  {
    tag: 'PROJECT 02',
    featured: true,
    title: '스마트K팩토리 3차 고도화 구축',
    subtitle: '검색 아키텍처 고도화 및 사용자 중심 검색・표출 구조 개선',
    period: '2025.04 ~ 2025.10',
    stack: ['Java', 'Spring Framework', 'MyBatis', 'PostgreSQL', 'Elasticsearch', 'JSP', 'jQuery'],
    summary:
      '기존 스마트K팩토리 시스템의 검색 및 공장 정보 표출 기능을 고도화한 프로젝트. Elasticsearch 기반 검색 아키텍처를 재설계하고 bool 쿼리 구조를 최적화해 검색 정확도와 성능을 개선했습니다.',
    role: [
      'Elasticsearch 기반 검색 아키텍처 설계 및 고도화, bool 쿼리 구조 최적화',
      '검색 키워드 강조 처리로 공장 탐색 가독성 향상',
      '검색 조건・페이지 상태 복원 로직 설계',
      '관리자 입력값이 사용자 화면에 자연스럽게 노출되도록 인터랙션 보완',
      '공장 조건 기반 관련 모델・상세 정보 연동 구조 구현',
    ],
    achievements: [
      'Elasticsearch 검색 구조 재설계로 검색 정확도 및 응답 성능 개선',
      'bool 쿼리 최적화로 불필요한 검색 결과 감소 및 조건 일관성 확보',
      '검색 조건・상태 복원 기능 구현으로 사용자 재검색 편의성 향상',
    ],
  },
  {
    tag: 'PROJECT 03 · 사내 개인 프로젝트',
    featured: true,
    title: '사내 프로젝트관리시스템(PMS) 구축',
    subtitle: '담당 업무 영역의 화면・API・데이터 구조 설계 및 구현',
    period: '2026.02 ~ 2026.05',
    stack: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL', 'Next.js', 'Tailwind CSS'],
    summary:
      '사내 프로젝트 관리와 영업・상담・주간보고 등 주요 업무를 통합 관리하기 위해 신규 구축한 PMS 프로젝트. Spring Boot와 Next.js 기반으로 화면과 API를 분리해 구현했습니다.',
    role: [
      '사용자관리, 게시판, 영업・상담・회사관리, 주간보고 영역 담당',
      'Spring Boot API와 Next.js 화면을 연계해 담당 메뉴의 등록・조회・수정 기능 구현',
      '프로젝트 참여 인원만 해당 주간보고를 작성할 수 있도록 사용자・프로젝트 관계 기반 권한 처리',
      '리드 개발자와 프로젝트 흐름, 권한 기준, 주간보고 작성 조건을 조율하며 완성도 개선',
    ],
    achievements: [
      'PMS 주요 업무 메뉴 신규 구축으로 사내 업무 관리 기반 마련',
      '주간보고 기능 구현으로 매주 반복되는 직원 업무 보고 흐름 시스템화',
      'Spring Boot・Next.js 기반 구조 적용으로 화면・API 역할 분리',
    ],
  },
  {
    tag: 'PROJECT 04 · 개인 프로젝트',
    featured: true,
    title: 'MUNGLOG (멍로그)',
    subtitle: '반려 생활 기록 기반 펫 라이프로그 서비스',
    period: '2026.05 ~ 2026.07',
    link: 'https://munglog.online',
    stack: ['Spring Boot', 'JPA', 'PostgreSQL', 'Next.js', 'Kakao OAuth', 'JWT', 'Docker', 'Nginx'],
    summary:
      '반려견의 일상, 케어 기록, 보유 물품, 가족 그룹 정보를 함께 관리할 수 있는 반려 생활 기록 서비스. 카카오 로그인 기반 인증부터 반려견・가족그룹・일기・인벤토리 기능까지 기획부터 배포까지 직접 설계하고 구현했습니다.',
    role: [
      '카카오 OAuth・JWT 인증 흐름 구성 및 가족 그룹 기준 데이터 접근 구조 설계',
      '사진 기반 AI 일기 생성 및 AI 인벤토리 아이템 정보 추출 기능 연동',
      '그룹 상태 변경 시 데이터 혼재 방지 흐름 점검',
      'Docker, Nginx 기반 프론트엔드・백엔드 배포 구조 구성',
    ],
    achievements: [
      '개인 서비스 기획부터 구현・배포까지 전 과정 경험',
      '가족 그룹 기준 반려 생활 데이터 분리 구조 구현',
      '사진 기반 AI 일기 생성으로 기록 작성 편의성 향상',
    ],
  },
]

const OTHER_PROJECTS = [
  {
    period: '2023.09 ~ 2023.11',
    title: 'BIDA',
    desc: '게시글・답글・댓글・대댓글 계층형 게시판 구조 설계 및 PostgreSQL 재귀 CTE 기반 계층 조회 로직 구현. 공통 게시판 모듈화로 재사용 가능한 구조 확보.',
  },
  {
    period: '2023.11 ~ 2024.01',
    title: '2023 공공 빅데이터 표준분석모델 정립 및 확산',
    desc: '공공 데이터 분석 결과를 ECharts 기반 공통 시각화 모듈로 구현하고 대시보드 설계. 차트 로직 공통화로 재사용률 및 유지보수 효율성 향상.',
  },
  {
    period: '2024.02 ~ 2024.04',
    title: '데이터 공유・활용 플랫폼 구축',
    desc: '계층형 파일 구조 설계와 데이터 업로드・다운로드・메타데이터 관리 백엔드 구현. 데이터 논리적 분류・탐색 효율성을 높이고 재사용 가능한 표준 모듈 확보.',
  },
  {
    period: '2025.10 ~ 2026.01',
    title: '2025 공공 빅데이터 표준분석모델 정립 및 확산',
    desc: '기년도 데이터의 안전한 이관(pg_dump/restore) 및 GeoServer-DB 연동 구조 설계. 데이터 이관・정제 프로세스 정립으로 신규 분석 환경 신뢰도와 시각화 확장성 확보.',
  },
]

const EDUCATION = [
  { period: '2025.03 ~ 2027.08 (재학중)', school: '한국방송통신대학교 컴퓨터과학과 (편입)' },
  { period: '2020.09 ~ 2022.02', school: '한국방송통신대학교 경영학과 (편입)', gpa: '4.1 / 4.5' },
  { period: '2015.03 ~ 2017.02', school: '배화여자대학교 경영과', gpa: '3.9 / 4.5' },
]

const CERTIFICATES = [
  { date: '2023.04', name: 'SQLD', org: '한국데이터산업진흥원' },
  { date: '2022.08', name: '컴퓨터활용능력 2급', org: '대한상공회의소' },
]

const TRAININGS = [
  { period: '2023.05 ~ 2023.08', name: '기업맞춤형 JAVA 웹 개발자 양성과정', org: '해피잡' },
  { period: '2021.12 ~ 2022.05', name: '쿨라우드 웹 응용 SW개발자 양성과정', org: 'KH정보교육원' },
]

const OUTRO_POINTS = [
  '업무 흐름을 이해하고 기능의 기준을 먼저 정리합니다.',
  '데이터 구조와 화면 흐름이 일관되게 연결되도록 구현합니다.',
  '운영과 유지보수를 고려한 안정적인 구조를 지향합니다.',
]

function NavBar() {
  const links = [
    ['about', 'About'],
    ['career', 'Career'],
    ['projects', 'Projects'],
    ['contact', 'Contact'],
  ]
  return (
    <header className="nav">
      <a className="nav-brand" href="#top">
        이은지<span>.dev</span>
      </a>
      <nav>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <p className="eyebrow">Developer Portfolio</p>
        <h1>
          이은지
          <span className="role">Java Backend Developer</span>
        </h1>
        <p className="tagline">
          복잡한 업무 데이터를 구조 우선의 마인드로 정리하고,
          <br />
          흐름과 기준을 지키며 흐트러지지 않는 백엔드를 구현합니다.
        </p>
        <ul className="skill-chips">
          {SKILLS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <div className="hero-contact">
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <span aria-hidden="true">·</span>
          <a href={`tel:${CONTACT.phone.replace(/-/g, '')}`}>{CONTACT.phone}</a>
          <span aria-hidden="true">·</span>
          <a href={CONTACT.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
      <div className="hero-photo">
        <img src={heroImg} alt="이은지 프로필 사진" />
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <p className="section-eyebrow">02 · About Me</p>
      <h2 className="section-title">
        기능보다 <em>흐름과 기준</em>을 먼저 보는 백엔드 개발자
      </h2>
      <p className="section-lead">
        공공・업무 시스템 개발 경험을 바탕으로, 단순 기능 구현보다 데이터 흐름과 처리 기준을 먼저 정리하는
        방식으로 개발해 왔습니다. 복잡한 업무도 구조적으로 나누고, 운영과 유지보수까지 고려해 안정적으로
        구현하는 데 강점이 있습니다.
      </p>

      <div className="stat-grid">
        {ABOUT_STATS.map((s) => (
          <div className="stat-card" key={s.label}>
            <span className="stat-label">{s.label}</span>
            <span className="stat-value">{s.value}</span>
          </div>
        ))}
      </div>

      <h3 className="sub-heading">일하는 방식</h3>
      <div className="card-grid">
        {WORK_STYLE.map((w) => (
          <div className="style-card" key={w.title}>
            <h4>{w.title}</h4>
            <p>{w.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="sub-heading">나를 설명하는 키워드</h3>
      <ul className="keyword-chips">
        {KEYWORDS.map((k) => (
          <li key={k}>{k}</li>
        ))}
      </ul>

      <div className="card-grid principle-grid">
        {PRINCIPLES.map((p) => (
          <div className="style-card" key={p.title}>
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="edu-grid">
        <div>
          <h3 className="sub-heading">학력</h3>
          <ul className="edu-list">
            {EDUCATION.map((e) => (
              <li key={e.school}>
                <span className="edu-period">{e.period}</span>
                <span className="edu-school">{e.school}</span>
                {e.gpa && <span className="edu-gpa">학점 {e.gpa}</span>}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="sub-heading">자격증 · 교육</h3>
          <ul className="edu-list">
            {CERTIFICATES.map((c) => (
              <li key={c.name}>
                <span className="edu-period">{c.date}</span>
                <span className="edu-school">{c.name}</span>
                <span className="edu-gpa">{c.org}</span>
              </li>
            ))}
            {TRAININGS.map((t) => (
              <li key={t.name}>
                <span className="edu-period">{t.period}</span>
                <span className="edu-school">{t.name}</span>
                <span className="edu-gpa">{t.org}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Career() {
  return (
    <section id="career" className="section">
      <p className="section-eyebrow">03 · Career Overview</p>
      <h2 className="section-title">프로젝트 흐름</h2>
      <p className="section-lead">프로젝트 경험을 시간순으로 정리하고, 아래 Projects에서 구현 흐름으로 이어집니다.</p>

      <ol className="timeline">
        {TIMELINE.map((t) => (
          <li className={`timeline-item${t.featured ? ' is-featured' : ''}`} key={t.date + t.title}>
            <div className="timeline-dot" />
            <div className="timeline-body">
              <span className="timeline-date">{t.date}</span>
              <h4>{t.title}</h4>
              <p>{t.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function ProjectCard({ project, isOpen, onToggle }) {
  const panelId = `project-panel-${project.title}`

  return (
    <article className={`project-card${project.featured ? ' is-featured' : ''}${isOpen ? ' is-open' : ''}`}>
      <button
        type="button"
        className="project-card-trigger"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <div className="project-card-head">
          <p className="project-tag">
            {project.tag}
            {project.featured && <span className="project-badge">이력서 수록 프로젝트</span>}
          </p>
          <h3>
            {project.title}
            {project.link && (
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                바로가기 ↗
              </a>
            )}
          </h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <div className="project-meta">
            <span className="project-period">{project.period}</span>
            <ul className="project-stack">
              {project.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <p className="project-summary">{project.summary}</p>
        </div>
        <span className="project-toggle" aria-hidden="true">
          {isOpen ? '접기 −' : '자세히 보기 +'}
        </span>
      </button>

      <div id={panelId} className="project-columns" hidden={!isOpen}>
        <div>
          <h4>My Role</h4>
          <ul>
            {project.role.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>성과</h4>
          <ul>
            {project.achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

function Projects() {
  const [openTitle, setOpenTitle] = useState(PROJECTS[0]?.title ?? null)

  return (
    <section id="projects" className="section">
      <p className="section-eyebrow">04 · Projects</p>
      <h2 className="section-title">주요 프로젝트</h2>
      <p className="section-lead">카드를 클릭하면 담당 역할과 성과를 자세히 볼 수 있습니다.</p>
      <div className="project-list">
        {PROJECTS.map((p) => (
          <ProjectCard
            project={p}
            key={p.title}
            isOpen={openTitle === p.title}
            onToggle={() => setOpenTitle((prev) => (prev === p.title ? null : p.title))}
          />
        ))}
      </div>

      <h3 className="sub-heading other-projects-heading">그 외 참여 프로젝트</h3>
      <ul className="other-project-list">
        {OTHER_PROJECTS.map((p) => (
          <li key={p.title}>
            <div className="other-project-head">
              <span className="other-project-period">{p.period}</span>
              <span className="other-project-title">{p.title}</span>
            </div>
            <p className="other-project-desc">{p.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Outro() {
  return (
    <section id="contact" className="section outro">
      <p className="section-eyebrow">08 · Outro</p>
      <h2 className="section-title outro-title">
        구조로 문제를 바라보고,
        <br />
        운영 가능한 결과물로 구현하는 개발자
      </h2>

      <ol className="outro-points">
        {OUTRO_POINTS.map((p, i) => (
          <li key={p}>
            <span className="outro-index">{String(i + 1).padStart(2, '0')}</span>
            <p>{p}</p>
          </li>
        ))}
      </ol>

      <div className="contact-card">
        <img src={outroImg} alt="이은지 프로필 사진" />
        <div>
          <h3>이은지</h3>
          <p className="contact-role">Java Backend Developer</p>
          <p className="contact-quote">
            사용자 중심의 시스템을 만들기 위해 계속 배우고 성장하는 개발자가 되겠습니다.
          </p>
          <div className="contact-links">
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={`tel:${CONTACT.phone.replace(/-/g, '')}`}>{CONTACT.phone}</a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer">
              {CONTACT.github.replace('https://', '')}
            </a>
          </div>
        </div>
      </div>

      <footer className="foot">© {new Date().getFullYear()} Eunji Lee. All rights reserved.</footer>
    </section>
  )
}

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Career />
      <Projects />
      <Outro />
    </>
  )
}

export default App
