import { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/logo.png'
import iconwhatsapp from './assets/WhatsApp-Loginho.png'
// Banner/Heroes optimizados
import bannerHome from './assets/banner-home.webp'
// Servicios optimizados
import serviceNomina from './assets/service-nomina.webp'
import serviceSeleccion from './assets/service-seleccion.webp'
// Equipo/Personas optimizadas
import teamMulticultural from './assets/team-multicultural.webp'
import teamMujer from './assets/team-mujer.webp'
import liderazgo from './assets/liderazgo.webp'
import nosotrosTeam from './assets/nosotros-team.webp'
import nosotrosDetail from './assets/nosotros-detail.webp'
import approach from './assets/approach.webp'

const IconCheck = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M2.5 6.5L5.5 9.5L10.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

const IconZap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const IconRotate = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 4 23 10 17 10"/>
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
  </svg>
)

const IconLayers = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
)

const IconBarChart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)

const IconMonitor = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
)

const IconMessageCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)

const IconTarget = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>
  </svg>
)

const IconEye = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const IconAward = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
)

const IconSliders = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="4" y1="21" x2="4" y2="14"/>
    <line x1="4" y1="10" x2="4" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12" y2="3"/>
    <line x1="20" y1="21" x2="20" y2="16"/>
    <line x1="20" y1="12" x2="20" y2="3"/>
    <line x1="1" y1="14" x2="7" y2="14"/>
    <line x1="9" y1="8" x2="15" y2="8"/>
    <line x1="17" y1="16" x2="23" y2="16"/>
  </svg>
)

const benefits = [
  { icon: <IconRotate />, text: 'Reasignar actividades del personal dedicado a nómina' },
  { icon: <IconZap />, text: 'Eficiencia en la gestión y procesamiento de pagos' },
  { icon: <IconLayers />, text: 'Herramientas tecnológicas de última generación' },
  { icon: <IconSliders />, text: 'Flexibilidad adaptada a las necesidades de su empresa' },
  { icon: <IconShield />, text: 'Seguridad y confidencialidad garantizada' },
  { icon: <IconBarChart />, text: 'Entrega de reportes detallados y precisos' },
  { icon: <IconMonitor />, text: 'Consulta virtual para empleados 24/7' },
  { icon: <IconMessageCircle />, text: 'Asesoría personalizada continua' },
]

const steps = [
  { title: 'Diagnóstico', detail: 'Evaluación integral de la situación actual de nómina' },
  { title: 'Levantamiento de información', detail: 'Recopilación y análisis de datos y procesos existentes' },
  { title: 'Análisis', detail: 'Estudio detallado de requerimientos y necesidades específicas' },
  { title: 'Validación de parámetros', detail: 'Revisión y definición del manual de procedimientos' },
  { title: 'Diseño de reportes', detail: 'Personalización de informes según los requerimientos de la empresa' },
  { title: 'Cargue de base de datos', detail: 'Migración, configuración e integración del sistema' },
  { title: 'Cronograma semestral', detail: 'Planificación detallada del calendario de actividades' },
  { title: 'Paralelos y Puesta en marcha', detail: 'Ejecución en paralelo, validación y activación definitiva' },
]

const stats = [
  { num: '1986', label: 'Año de fundación del Grupo Empresarial' },
  { num: '+38', label: 'Años de trayectoria en gestión de talento' },
  { num: 'ISO', label: '9001:2015 — Certificados por Bureau Veritas' },
  { num: '100%', label: 'Cumplimiento de normatividad vigente' },
]

const aliadosItems = [
  'No somos un proveedor. ¡Somos una solución! Nuestra misión es facilitar su trabajo y ayudarle a alcanzar sus metas.',
  'Nos ajustamos a sus requerimientos diseñando soluciones flexibles y a la medida.',
  'Nuestro talento humano tiene la experiencia y el mejor conocimiento en cada tema.',
  'Costos competitivos orientados a una alianza perdurable y rentabilidad de desarrollo mutuo.',
  'Siempre actualizándonos y trasladando este conocimiento a su organización.',
]

const seleccionEvaluacionBenefits = [
  { icon: <IconTarget />, text: 'Identificación precisa del perfil de ejecutivo requerido' },
  { icon: <IconZap />, text: 'Reducción significativa del tiempo de búsqueda y selección' },
  { icon: <IconEye />, text: 'Evaluación objetiva y competencias verificadas' },
  { icon: <IconShield />, text: 'Garantía de confidencialidad en todo el proceso' },
  { icon: <IconAward />, text: 'Candidatos de alta calidad y perfil comprobado' },
  { icon: <IconBarChart />, text: 'Análisis detallado de fortalezas y áreas de desarrollo' },
]

const seleccionEvaluacionSteps = [
  { title: 'Análisis de necesidad', detail: 'Definición clara del perfil y competencias requeridas' },
  { title: 'Búsqueda activa', detail: 'Identificación y pre-selección de candidatos potenciales' },
  { title: 'Evaluación técnica', detail: 'Assessments de competencias y conocimientos específicos' },
  { title: 'Evaluación psicológica', detail: 'Análisis de compatibilidad cultural y potencial de liderazgo' },
  { title: 'Referencias laborales', detail: 'Verificación exhaustiva de antecedentes y experiencia' },
  { title: 'Presentación de candidatos', detail: 'Entrevista con directivos y análisis de ajuste' },
]

const outsourcingProcesosBenefits = [
  { icon: <IconRotate />, text: 'Reasignación de recursos humanos a actividades estratégicas' },
  { icon: <IconZap />, text: 'Reducción de costos operativos significativa' },
  { icon: <IconLayers />, text: 'Acceso a tecnología especializada y procesos optimizados' },
  { icon: <IconShield />, text: 'Cumplimiento de normatividad y regulaciones vigentes' },
  { icon: <IconBarChart />, text: 'Mejora de indicadores de eficiencia y productividad' },
  { icon: <IconMonitor />, text: 'Seguimiento y reportes en tiempo real' },
]

const outsourcingProcesosSteps = [
  { title: 'Diagnóstico integral', detail: 'Análisis detallado de procesos actuales y oportunidades de mejora' },
  { title: 'Mapeo de procesos', detail: 'Identificación de actividades, responsabilidades y tiempos' },
  { title: 'Diseño de solución', detail: 'Propuesta personalizada de tercerización según necesidades' },
  { title: 'Implementación gradual', detail: 'Transición ordenada y sin interrupciones operacionales' },
  { title: 'Capacitación del equipo', detail: 'Entrenamiento del personal en nuevos procesos y sistemas' },
  { title: 'Monitoreo y optimización', detail: 'Seguimiento continuo con reportes y mejoras permanentes' },
]

const homeServices = [
  {
    id: 'outsourcing-nomina',
    title: 'Outsourcing de Nómina',
    description: 'Soluciones integrales, seguras y tecnológicas para la administración eficiente de la nómina de su empresa.',
    image: serviceNomina,
    link: '#outsourcing-nomina'
  },
  {
    id: 'seleccion-evaluacion',
    title: 'Selección y Evaluación de Ejecutivos',
    description: 'Procesos especializados para identificar y evaluar los mejores talentos ejecutivos para su empresa.',
    image: serviceSeleccion,
    link: '#seleccion-evaluacion'
  },
  {
    id: 'outsourcing-procesos',
    title: 'Outsourcing de Procesos',
    description: 'Soluciones integrales de tercerización de procesos que optimizan la eficiencia operacional.',
    image: teamMulticultural,
    link: '#outsourcing-procesos'
  }
]

const noticias = [
  {
    id: 1,
    title: 'Nuevas tendencias en gestión de talento',
    excerpt: 'Descubra cómo las empresas líderes están transformando sus estrategias de recursos humanos con soluciones de outsourcing innovadoras.',
    date: 'Junio 2024',
    content: 'Las nuevas tendencias en gestión de talento están revolucionando la forma en que las empresas administran sus recursos humanos. Con soluciones de outsourcing innovadoras, las compañías pueden enfocarse en su core business mientras nosotros manejamos la gestión integral de talento humano. Descubra cómo las empresas líderes están transformando sus estrategias con nuestros servicios especializados.'
  },
  {
    id: 2,
    title: 'Mejora de eficiencia operativa',
    excerpt: 'Conozca los beneficios comprobados de tercerizar procesos administrativos y cómo libera recursos para el crecimiento estratégico.',
    date: 'Mayo 2024',
    content: 'La tercerización de procesos administrativos ha demostrado ser una estrategia efectiva para mejorar la eficiencia operativa de las empresas. Al confiar en expertos especializados, las organizaciones logran reducir costos, mejorar procesos y liberar recursos humanos para enfocarse en actividades estratégicas que impulsan el crecimiento del negocio.'
  },
  {
    id: 3,
    title: 'Selección de ejecutivos: casos de éxito',
    excerpt: 'Casos reales de empresas que encontraron los mejores talentos ejecutivos a través de nuestros procesos especializados de evaluación.',
    date: 'Mayo 2024',
    content: 'Presentamos casos reales de empresas que transformaron sus equipos directivos mediante nuestros procesos especializados de selección y evaluación de ejecutivos. Estos casos demuestran cómo identificar el talento correcto impacta directamente en el desempeño y crecimiento organizacional. Conozca las historias de éxito de nuestros clientes.'
  },
  {
    id: 4,
    title: 'Cumplimiento normativo en nómina',
    excerpt: 'Manténgase actualizado con los cambios en regulaciones laborales y cómo nuestros servicios garantizan cumplimiento total.',
    date: 'Abril 2024',
    content: 'El cumplimiento normativo en nómina es crucial para evitar sanciones y problemas legales. Nuestro equipo de expertos se mantiene constantemente actualizado con los cambios en regulaciones laborales colombianas. Garantizamos que su empresa cumpla con todas las obligaciones fiscales y laborales vigentes.'
  },
  {
    id: 5,
    title: 'Transformación digital en RRHH',
    excerpt: 'Cómo la tecnología está cambiando la forma en que gestionamos el talento en las organizaciones modernas.',
    date: 'Marzo 2024',
    content: 'La transformación digital en recursos humanos es inevitable. Las nuevas herramientas tecnológicas nos permiten automatizar procesos, mejorar la experiencia del empleado y tomar decisiones basadas en datos. Descubra cómo implementar estas tecnologías en su organización.'
  },
  {
    id: 6,
    title: 'Bienestar laboral y productividad',
    excerpt: 'La relación directa entre programas de bienestar laboral y la productividad de los empleados.',
    date: 'Febrero 2024',
    content: 'Existe una relación directa comprobada entre el bienestar laboral de los empleados y su productividad. Las empresas que invierten en programas de bienestar integral logran mayores tasas de retención de talento y mejor desempeño. Conozca nuestras estrategias de bienestar laboral integral.'
  }
]

const heroImages = [bannerHome, teamMujer, nosotrosDetail, liderazgo]

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [expandedNewsId, setExpandedNewsId] = useState(null)
  const [showAllNews, setShowAllNews] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const closeMobileMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
      setOpenDropdown(null)
    }
  }

  const toggleDropdown = (dropdownKey) => {
    return (event) => {
      event.preventDefault()
      setOpenDropdown((current) => (current === dropdownKey ? null : dropdownKey))
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <header className="site-header">
        <nav className="navbar">
          <a href="#inicio" className="navbar-brand">
            <div className="navbar-icon">
              <img src={logo} alt="People Solutions" />
            </div>
          </a>

          <button
            type="button"
            className={`navbar-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Cerrar menú móvil' : 'Abrir menú móvil'}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`navbar-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <li><a href="#inicio" onClick={closeMobileMenu}>Inicio</a></li>
            <li><a href="#nosotros" onClick={closeMobileMenu}>Nosotros</a></li>
            <li className={`nav-dropdown ${openDropdown === 'servicios' ? 'open' : ''}`}>
              <button type="button" className="dropdown-toggle" onClick={toggleDropdown('servicios')}>Servicios ▾</button>
              <ul className="dropdown-menu">
                <li><a href="#outsourcing-nomina" onClick={closeMobileMenu}>Outsourcing de nómina</a></li>
                <li><a href="#seleccion-evaluacion" onClick={closeMobileMenu}>Selección y evaluación</a></li>
                <li><a href="#outsourcing-procesos" onClick={closeMobileMenu}>Outsourcing de procesos</a></li>
              </ul>
            </li>
            <li><a href="#noticias" onClick={closeMobileMenu}>Noticias</a></li>
            <li className={`nav-dropdown ${openDropdown === 'sgsst' ? 'open' : ''}`}>
              <button type="button" className="dropdown-toggle" onClick={toggleDropdown('sgsst')}>SGSST ▾</button>
              <ul className="dropdown-menu">
                <li><a href="/SST_SEG_VIAL.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Seguridad Vial</a></li>
                <li><a href="/SST_SEG_Y_SALUD.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Seguridad Y Salud en el Trabajo</a></li>
                <li><a href="/SST_SUSTANCIAS.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Prevención Del Consumo</a></li>
              </ul>
            </li>
            <li className={`nav-dropdown ${openDropdown === 'portal' ? 'open' : ''}`}>
              <button type="button" className="dropdown-toggle" onClick={toggleDropdown('portal')}>Portal colaboradores ▾</button>
              <ul className="dropdown-menu">
                <li><a href="/guia.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Guia Servicios Digitales</a></li>
                <li><a href="https://alianzainfo.net/Login/Account/Login?logo=00010004#!" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Plataforma Servicios Digitales</a></li>
              </ul>
            </li>
            <li><a href="#informacion-juridica" onClick={closeMobileMenu}>Información Jurídica</a></li>
          </ul>

          <div className={`navbar-actions ${mobileMenuOpen ? 'open' : ''}`}>
          </div>
        </nav>
      </header>

      <section id="inicio" className="hero">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="hero-bg-slide"
            style={{ backgroundImage: `url(${img})`, opacity: i === activeSlide ? 1 : 0 }}
          />
        ))}
        <div className="hero-grid-lines" />

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Gestión de Talento Humano
          </div>
          <h1 className="hero-title">
            Soluciones en <span className="highlight">Outsourcing</span> para su Empresa
          </h1>
          <p className="hero-subtitle">
            Más de 38 años de experiencia en servicios especializados de gestión de talento humano,
            con la más alta calidad y cumplimiento normativo.
          </p>
          <div className="hero-actions">
            <a href="#servicios-inicio" className="btn-primary">Explorar servicios</a>
            <a href="#nosotros" className="btn-ghost">Sobre nosotros</a>
          </div>
        </div>

      </section>

      <section id="servicios-inicio" className="home-services">
        <div className="section-head">
          <div className="tag">Nuestros Servicios</div>
          <h2 className="section-title">Soluciones Especializadas en <span className="accent">Gestión de Talento</span></h2>
        </div>

        <div className="services-grid">
          {homeServices.map((service, i) => (
            <div key={i} className="service-card">
              <div className="service-card-img">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={service.link} className="service-card-btn">Conocer más →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="outsourcing-nomina" className="hero">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="hero-bg-slide"
            style={{ backgroundImage: `url(${img})`, opacity: i === activeSlide ? 1 : 0 }}
          />
        ))}
        <div className="hero-grid-lines" />

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Servicios de Gestión de Talento Humano
          </div>
          <h1 className="hero-title">
            Outsourcing de <span className="highlight">Nómina</span>
          </h1>
          <p className="hero-subtitle">
            Soluciones integrales, seguras y tecnológicas para la administración
            eficiente de la nómina de su empresa.
          </p>
          <div className="hero-actions">
            <a href="#cotizar" className="btn-primary">Cotizar ahora</a>
            <a href="#servicios" className="btn-ghost">Conocer más</a>
          </div>
        </div>

      </section>

      <section className="description-section">
        <div className="section-head">
          <div className="tag">¿Por qué elegirnos?</div>
          <h2 className="section-title">Garantía de calidad y cumplimiento legal</h2>
          <p className="section-desc">
            Garantizamos la calidad, oportunidad y exactitud de la información para cumplir
            con los pagos de los empleados, entidades de seguridad social, cajas de compensación
            y demás instituciones pertinentes dentro de los parámetros exigidos por la ley.
          </p>
        </div>

        <img src={liderazgo} alt="Trabajo en equipo" className="desc-banner-img" />

        <div className="desc-cards">
          <div className="desc-card">
            <div className="desc-card-icon">
              <IconShield />
            </div>
            <h3>Cumplimiento Legal</h3>
            <p>Operamos dentro de todos los parámetros exigidos por la legislación colombiana vigente.</p>
          </div>
          <div className="desc-card">
            <div className="desc-card-icon">
              <IconClock />
            </div>
            <h3>Puntualidad Garantizada</h3>
            <p>Pagos a tiempo para empleados, EPS, cajas de compensación y demás instituciones.</p>
          </div>
          <div className="desc-card">
            <div className="desc-card-icon">
              <IconZap />
            </div>
            <h3>Alta Precisión</h3>
            <p>Exactitud total en la información procesada, minimizando errores y reprocesos.</p>
          </div>
        </div>
      </section>

      <section id="servicios" className="section section-alt">
        <div className="section-head">
          <div className="tag">Beneficios del servicio</div>
          <h2 className="section-title">Nuestro Servicio <span className="accent">Le Permite</span></h2>
        </div>

        <div className="services-layout">
          <div className="img-wrapper">
            <div className="img-block">
              <img src={serviceNomina} alt="Servicios de nómina" className="img-block-inner" />
            </div>
            <div className="img-badge">
              Tecnología<br />de vanguardia
            </div>
          </div>

          <div>
            <ul className="benefits-list">
              {benefits.map((b, i) => (
                <li key={i} className="benefit-item">
                  <div className="benefit-icon">{b.icon}</div>
                  <span className="benefit-text">{b.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <div className="stat-number">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="tag">Metodología</div>
          <h2 className="section-title">¿Cómo Se <span className="accent">Implementa</span>?</h2>
          <p className="section-desc">
            Un proceso estructurado y probado para garantizar una transición exitosa
            y sin interrupciones en su operación.
          </p>
        </div>

        <div className="impl-layout">
          <div className="impl-steps">
            {steps.map((s, i) => (
              <div key={i} className="impl-step">
                <div className="step-badge">{i + 1}</div>
                <div className="step-content">
                  <div className="step-name">{s.title}</div>
                  <div className="step-detail">{s.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="impl-img-block">
            <img src={teamMulticultural} alt="Equipo de expertos" className="impl-img-photo" />
          </div>
        </div>
      </section>

      <section id="noticias" className="news-section">
        <div className="section-head">
          <div className="tag">Centro de Información</div>
          <h2 className="section-title">Nuestras <span className="accent">Noticias</span></h2>
        </div>

        <div className="news-grid">
          {noticias.slice(0, showAllNews ? noticias.length : 4).map((noticia, i) => (
            <div key={i} className="news-card">
              <div className="news-card-tag">
                <span className="news-tag">{noticia.date}</span>
              </div>
              <h3 className="news-card-title">{noticia.title}</h3>
              <p className="news-card-excerpt">{noticia.excerpt}</p>
              <button 
                onClick={() => setExpandedNewsId(noticia.id)}
                className="news-card-link"
                style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer', font: 'inherit' }}
              >
                Leer más →
              </button>
            </div>
          ))}
        </div>

        <div className="news-cta">
          <span className="news-cta-label">Otras Noticias</span>
          <button 
            onClick={() => setShowAllNews(!showAllNews)}
            className="news-cta-btn"
            style={{ border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            {showAllNews ? 'Ver menos' : 'Ver todas'} →
          </button>
        </div>

        {expandedNewsId && (
          <div className="news-modal-overlay" onClick={() => setExpandedNewsId(null)}>
            <div className="news-modal" onClick={(e) => e.stopPropagation()}>
              <button 
                className="news-modal-close"
                onClick={() => setExpandedNewsId(null)}
              >
                ✕
              </button>
              {noticias.map((noticia) => 
                noticia.id === expandedNewsId ? (
                  <div key={noticia.id}>
                    <div className="news-modal-tag">
                      <span className="news-tag">{noticia.date}</span>
                    </div>
                    <h2 className="news-modal-title">{noticia.title}</h2>
                    <p className="news-modal-content">{noticia.content}</p>
                  </div>
                ) : null
              )}
            </div>
          </div>
        )}
      </section>

      <section id="nosotros" className="nosotros-section">

        {/* Hero banner */}
        <div className="nosotros-hero" style={{ backgroundImage: `url(${nosotrosTeam})` }}>
          <div className="nosotros-hero-overlay" />
          <div className="nosotros-hero-content">
            <div className="nosotros-hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Sobre Nosotros
            </div>
            <h2 className="nosotros-hero-title">
              Somos un Equipo Humano<br />
              Especializado en Servicios de<br />
              <em>Outsourcing</em>
            </h2>
          </div>
        </div>

        {/* ¿Quiénes Somos? */}
        <div className="nosotros-quienes">
          <div className="nosotros-quienes-text">
            <div className="tag">Nuestra Historia</div>
            <h3>¿Quienes Somos?</h3>
            <p>
              Somos una firma especializada y calificada en tercerización de procesos de gestión
              de talento humano perteneciente a un grupo empresarial fundado en 1986, con sedes
              en Barranquilla, Bucaramanga, Medellín, Cali y Bogotá.
            </p>
            <p>
              Durante nuestra trayectoria hemos atendido todos los sectores económicos y sus
              empresas más representativas desarrollando procesos de alto impacto en outsourcing
              de nómina, selección y evaluación de ejecutivos.
            </p>
            <div className="nosotros-quienes-stats">
              <div className="nosotros-qs">
                <div className="nosotros-qs-num">+38</div>
                <div className="nosotros-qs-label">Años de experiencia</div>
              </div>
              <div className="nosotros-qs">
                <div className="nosotros-qs-num">5</div>
                <div className="nosotros-qs-label">Ciudades en Colombia</div>
              </div>
              <div className="nosotros-qs">
                <div className="nosotros-qs-num">ISO</div>
                <div className="nosotros-qs-label">9001:2015 Certificados</div>
              </div>
            </div>
          </div>
          <div className="nosotros-quienes-img">
            <img src={nosotrosTeam} alt="Nuestro equipo" />
          </div>
        </div>

        {/* Misión / Visión / Política / ¿Por qué? */}
        <div className="nosotros-dark">
          <div className="nosotros-dark-text">
            <div className="nosotros-mv-grid">
              <div className="nosotros-mv-card">
                <div className="nosotros-mv-icon"><IconTarget /></div>
                <div>
                  <h4>Misión</h4>
                  <p>
                    Somos un equipo especializado en servicios de Outsourcing que da respuesta a las
                    necesidades específicas de nuestros clientes, cumpliendo con la normatividad
                    vigente en salud ocupacional y responsabilidad social.
                  </p>
                </div>
              </div>
              <div className="nosotros-mv-card">
                <div className="nosotros-mv-icon"><IconEye /></div>
                <div>
                  <h4>Visión</h4>
                  <p>
                    Consolidar los servicios del modelo de outsourcing en el mercado nacional,
                    reconocidos por nuestra experiencia, cumplimiento y credibilidad en cada sector.
                  </p>
                </div>
              </div>
              <div className="nosotros-mv-card">
                <div className="nosotros-mv-icon"><IconAward /></div>
                <div>
                  <h4>Política de Calidad</h4>
                  <p>
                    Suministramos con eficacia servicios de Outsourcing cumpliendo con los
                    requerimientos del cliente de manera oportuna, con mejora continua de procesos.
                  </p>
                </div>
              </div>
            </div>

            <div className="nosotros-aliados">
              <div className="nosotros-aliados-title">¿Por qué podemos ser sus mejores aliados?</div>
              <div className="nosotros-aliados-grid">
                {aliadosItems.map((item, i) => (
                  <div key={i} className="nosotros-aliado-item">
                    <div className="nosotros-aliado-icon"><IconCheck /></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="nosotros-dark-img">
            <img src={approach} alt="Trabajo colaborativo" />
          </div>
        </div>

      </section>

      <section id="seleccion-evaluacion" className="hero">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="hero-bg-slide"
            style={{ backgroundImage: `url(${img})`, opacity: i === activeSlide ? 1 : 0 }}
          />
        ))}
        <div className="hero-grid-lines" />

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Servicios de Gestión de Talento Humano
          </div>
          <h1 className="hero-title">
            Selección y <span className="highlight">Evaluación de Ejecutivos</span>
          </h1>
          <p className="hero-subtitle">
            Procesos especializados para identificar y evaluar los mejores talentos
            ejecutivos para fortalecer el liderazgo de su empresa.
          </p>
          <div className="hero-actions">
            <a href="#cotizar" className="btn-primary">Cotizar ahora</a>
            <a href="#servicios-seleccion" className="btn-ghost">Conocer más</a>
          </div>
        </div>

      </section>

      <section className="description-section">
        <div className="section-head">
          <div className="tag">¿Por qué elegirnos?</div>
          <h2 className="section-title">Experiencia en Identificación de Talento Ejecutivo</h2>
          <p className="section-desc">
            Contamos con más de 38 años de experiencia especializados en búsqueda, evaluación
            y selección de ejecutivos para empresas de todos los sectores. Nuestro equipo
            de consultores utiliza metodologías probadas de evaluación de competencias y
            potencial de liderazgo para garantizar los mejores resultados.
          </p>
        </div>

        <img src={teamMulticultural} alt="Evaluación de ejecutivos" className="desc-banner-img" />

        <div className="desc-cards">
          <div className="desc-card">
            <div className="desc-card-icon">
              <IconTarget />
            </div>
            <h3>Valor Agregado</h3>
            <p>Identificamos candidatos que no solo cumplen el perfil técnico, sino que aportan valor estratégico a su organización.</p>
          </div>
          <div className="desc-card">
            <div className="desc-card-icon">
              <IconEye />
            </div>
            <h3>Evaluación Integral</h3>
            <p>Evaluamos competencias técnicas, psicológicas y de liderazgo con metodologías internacionales reconocidas.</p>
          </div>
          <div className="desc-card">
            <div className="desc-card-icon">
              <IconAward />
            </div>
            <h3>Garantía de Calidad</h3>
            <p>Candidatos pre-seleccionados y evaluados a profundidad, listos para contribuir desde el primer día.</p>
          </div>
        </div>
      </section>

      <section id="servicios-seleccion" className="section section-alt">
        <div className="section-head">
          <div className="tag">Beneficios del servicio</div>
          <h2 className="section-title">Selección <span className="accent">de Talento Ejecutivo</span></h2>
        </div>

        <div className="services-layout">
          <div className="img-wrapper">
            <div className="img-block">
              <img src={serviceSeleccion} alt="Selección de ejecutivos" className="img-block-inner" />
            </div>
            <div className="img-badge">
              Consultores<br />Especializados
            </div>
          </div>

          <div>
            <ul className="benefits-list">
              {seleccionEvaluacionBenefits.map((b, i) => (
                <li key={i} className="benefit-item">
                  <div className="benefit-icon">{b.icon}</div>
                  <span className="benefit-text">{b.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="tag">Metodología</div>
          <h2 className="section-title">¿Cómo Se <span className="accent">Realiza</span>?</h2>
          <p className="section-desc">
            Un proceso estructurado, riguroso y efectivo para garantizar la identificación
            del mejor talento ejecutivo para su organización.
          </p>
        </div>

        <div className="impl-layout">
          <div className="impl-steps">
            {seleccionEvaluacionSteps.map((s, i) => (
              <div key={i} className="impl-step">
                <div className="step-badge">{i + 1}</div>
                <div className="step-content">
                  <div className="step-name">{s.title}</div>
                  <div className="step-detail">{s.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="impl-img-block">
            <img src={liderazgo} alt="Proceso de selección" className="impl-img-photo" />
          </div>
        </div>
      </section>

      <section id="outsourcing-procesos" className="hero">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="hero-bg-slide"
            style={{ backgroundImage: `url(${img})`, opacity: i === activeSlide ? 1 : 0 }}
          />
        ))}
        <div className="hero-grid-lines" />

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Servicios de Gestión de Talento Humano
          </div>
          <h1 className="hero-title">
            Outsourcing de <span className="highlight">Procesos</span>
          </h1>
          <p className="hero-subtitle">
            Soluciones integrales de tercerización de procesos que liberan recursos
            y optimizan la eficiencia operacional de su empresa.
          </p>
          <div className="hero-actions">
            <a href="#cotizar" className="btn-primary">Cotizar ahora</a>
            <a href="#servicios-procesos" className="btn-ghost">Conocer más</a>
          </div>
        </div>

      </section>

      <section className="description-section">
        <div className="section-head">
          <div className="tag">¿Por qué elegirnos?</div>
          <h2 className="section-title">Eficiencia Operacional a través de Outsourcing</h2>
          <p className="section-desc">
            Especializados en tercerización de procesos administrativos, operacionales y de
            soporte que permiten a su empresa enfocarse en su core business. Contamos con
            equipos especializados, tecnología de punta e infraestructura robusta para
            garantizar continuidad y calidad en cada operación.
          </p>
        </div>

        <img src={serviceNomina} alt="Outsourcing de procesos" className="desc-banner-img" />

        <div className="desc-cards">
          <div className="desc-card">
            <div className="desc-card-icon">
              <IconZap />
            </div>
            <h3>Reducción de Costos</h3>
            <p>Optimización de gastos operacionales sin comprometer la calidad del servicio.</p>
          </div>
          <div className="desc-card">
            <div className="desc-card-icon">
              <IconRotate />
            </div>
            <h3>Flexibilidad</h3>
            <p>Soluciones adaptables que crecen con su empresa y responden a cambios del mercado.</p>
          </div>
          <div className="desc-card">
            <div className="desc-card-icon">
              <IconShield />
            </div>
            <h3>Seguridad y Cumplimiento</h3>
            <p>Garantía total en el manejo de información y cumplimiento de regulaciones.</p>
          </div>
        </div>
      </section>

      <section id="servicios-procesos" className="section section-alt">
        <div className="section-head">
          <div className="tag">Beneficios del servicio</div>
          <h2 className="section-title">Outsourcing <span className="accent">de Procesos</span></h2>
        </div>

        <div className="services-layout">
          <div className="img-wrapper">
            <div className="img-block">
              <img src={teamMulticultural} alt="Outsourcing de procesos" className="img-block-inner" />
            </div>
            <div className="img-badge">
              Procesos<br />Optimizados
            </div>
          </div>

          <div>
            <ul className="benefits-list">
              {outsourcingProcesosBenefits.map((b, i) => (
                <li key={i} className="benefit-item">
                  <div className="benefit-icon">{b.icon}</div>
                  <span className="benefit-text">{b.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="tag">Metodología</div>
          <h2 className="section-title">¿Cómo Se <span className="accent">Implementa</span>?</h2>
          <p className="section-desc">
            Un proceso estructurado que garantiza una transición ordenada, eficiente
            y sin interrupciones en las operaciones de su empresa.
          </p>
        </div>

        <div className="impl-layout">
          <div className="impl-steps">
            {outsourcingProcesosSteps.map((s, i) => (
              <div key={i} className="impl-step">
                <div className="step-badge">{i + 1}</div>
                <div className="step-content">
                  <div className="step-name">{s.title}</div>
                  <div className="step-detail">{s.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="impl-img-block">
            <img src={liderazgo} alt="Implementación de procesos" className="impl-img-photo" />
          </div>
        </div>
      </section>

      <section id="cotizar" className="quote-section">
        <div className="quote-layout">
          <div>
            <div className="tag">Solicite información</div>
            <h2 className="quote-title">
              <span className="q-accent">¡Cotiza</span> Ya!
            </h2>
            <p className="quote-body">
              People Solutions Colombia forma parte de un Grupo Empresarial fundado en
              el año de 1986, con amplia trayectoria en la gestión de talento humano
              en los diversos sectores económicos.
            </p>
            <div className="quote-perks">
              {[
                'Respuesta en menos de 24 horas',
                'Asesoría personalizada sin costo',
                'Solución adaptada a su empresa',
              ].map((p, i) => (
                <div key={i} className="perk">
                  <div className="perk-check"><IconCheck /></div>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="form-card">
            <div className="form-card-title">Solicite su cotización</div>
            <div className="form-card-sub">Complete el formulario y nos ponemos en contacto</div>

            <div className="form-fields">
              <div className="form-row">
                <input className="f-input" type="text" placeholder="Nombre completo" />
                <input className="f-input" type="email" placeholder="Correo electrónico" />
              </div>
              <div className="form-row">
                <input className="f-input" type="tel" placeholder="Teléfono" />
                <select className="f-input f-select">
                  <option value="">Servicio de interés</option>
                  <option>Outsourcing de Nómina</option>
                  <option>Selección y Evaluación de Ejecutivos</option>
                  <option>Outsourcing de procesos</option>
                  <option>SGSST</option>
                  <option>Portal Colaboradores</option>
                  <option>Otro servicio</option>
                </select>
              </div>
              <textarea
                className="f-input f-textarea"
                placeholder="Cuéntenos sobre su empresa y necesidades..."
              />
            </div>

            <button type="button" className="form-submit">
              Enviar Solicitud →
            </button>
          </div>
        </div>
      </section>

      <section id="informacion-juridica" className="juridica-section">
        <div className="section-head">
          <div className="tag">DOCUMENTACIÓN LEGAL</div>
          <h2 className="section-title">Información <span className="accent">Jurídica</span></h2>
          <p className="section-desc">Accede a nuestros documentos legales y políticas empresariales</p>
        </div>

        <div className="juridica-grid">
          <a href="/Agenda al reglamento interno de trabajo.pdf" target="_blank" rel="noopener noreferrer" className="juridica-card">
            <div className="juridica-card-icon">📋</div>
            <h3 className="juridica-card-title">Agenda al Reglamento Interno de Trabajo</h3>
            <p className="juridica-card-desc">Documentación complementaria del reglamento interno</p>
            <div className="juridica-card-footer">Abrir PDF ↗</div>
          </a>

          <a href="/Política desconexión laboral.pdf" target="_blank" rel="noopener noreferrer" className="juridica-card">
            <div className="juridica-card-icon">🔌</div>
            <h3 className="juridica-card-title">Política Desconexión Laboral</h3>
            <p className="juridica-card-desc">Normativa sobre desconexión y tiempo de descanso</p>
            <div className="juridica-card-footer">Abrir PDF ↗</div>
          </a>

          <a href="/Política De Genero.pdf" target="_blank" rel="noopener noreferrer" className="juridica-card">
            <div className="juridica-card-icon">👥</div>
            <h3 className="juridica-card-title">Política De Género</h3>
            <p className="juridica-card-desc">Política de inclusión y equidad de género</p>
            <div className="juridica-card-footer">Abrir PDF ↗</div>
          </a>

          <a href="/Politica de prevencion acoso laboral.pdf" target="_blank" rel="noopener noreferrer" className="juridica-card">
            <div className="juridica-card-icon">🛡️</div>
            <h3 className="juridica-card-title">Política Prevención Acoso Laboral</h3>
            <p className="juridica-card-desc">Medidas de prevención contra el acoso laboral</p>
            <div className="juridica-card-footer">Abrir PDF ↗</div>
          </a>

          <a href="/Politica hora extras.pdf" target="_blank" rel="noopener noreferrer" className="juridica-card">
            <div className="juridica-card-icon">⏱️</div>
            <h3 className="juridica-card-title">Política Horas Extras</h3>
            <p className="juridica-card-desc">Regulación y compensación de horas extraordinarias</p>
            <div className="juridica-card-footer">Abrir PDF ↗</div>
          </a>

          <a href="/Politica Prevención, Protección y Atención del Acoso Sexual.pdf" target="_blank" rel="noopener noreferrer" className="juridica-card">
            <div className="juridica-card-icon">⚖️</div>
            <h3 className="juridica-card-title">Política Prevención Acoso Sexual</h3>
            <p className="juridica-card-desc">Protección contra acoso sexual en el trabajo</p>
            <div className="juridica-card-footer">Abrir PDF ↗</div>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-body">
          <div>
            <div className="footer-brand-icon">
              <img src={logo} alt="People Solutions" />
            </div>
            <div className="footer-brand-name">People Solutions Colombia</div>
            <p className="footer-about">
              Parte de un Grupo Empresarial con más de 38 años de trayectoria en
              la gestión de talento humano, certificados ISO 9001:2015 por Bureau Veritas.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Datos de Contacto</div>
            <ul className="footer-links">
              <li>Carrera 49D No. 91 - 49</li>
              <li>La Castellana · Bogotá D.C. · Colombia</li>
              <li>
                <a href="mailto:comercial@peoplesolutions.com.co">
                  comercial@peoplesolutions.com.co
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Certificaciones</div>
            <ul className="footer-links">
              <li>
                PEOPLE SOLUTIONS tiene sus procesos certificados por Bureau Veritas
                en el sistema de gestión de calidad ISO 9001:2015.
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <span>© 2025 People Solutions Colombia. Todos los derechos reservados.</span>
          <a href="/Política_De_Tratamientos_Personales.pdf" target="_blank" rel="noopener noreferrer">Política de Tratamientos Personales</a>
        </div>
      </footer>

      <a href="https://wa.me/573165210805?text=Hola%20People%20Solutions" target="_blank" rel="noopener noreferrer" className="whatsapp-floating-btn" title="Contáctanos por WhatsApp">
        <img src={iconwhatsapp} alt="WhatsApp" />
      </a>
    </>
  )
}

export default App
