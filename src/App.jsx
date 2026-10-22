import { useEffect, useRef, useState } from 'react'
import { me, spec, hobbies, experience, education, achievements, projects, concept, skills } from './data.js'

function Reveal({ children, as: Tag = 'div', className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { el && el.classList.add('in'); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); io.disconnect() }
    }, { threshold: 0.05 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>
}

function Head({ label, children }) {
  return (
    <header className="head">
      <span className="mono idx">{label}</span>
      {children && <h2>{children}</h2>}
    </header>
  )
}

function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="mark" aria-label="Back to top">T<span>.</span>RB</a>
      <div className="navlinks">
        <a href="#about" className="hide-sm">About</a>
        <a href="#experience" className="hide-sm">Experience</a>
        <a href="#work" className="hide-sm">Projects</a>
        <a href="#skills" className="hide-sm">Skills</a>
        <a href="#contact" className="pill">Contact</a>
      </div>
    </nav>
  )
}

function Portrait() {
  const [ok, setOk] = useState(true)
  return (
    <div className="portrait">
      {ok
        ? <img src="/photo.png" alt={`Portrait of ${me.name}`} onError={() => setOk(false)} />
        : <span className="mono fallback" aria-hidden="true">T.RB</span>}
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="hero wrap">
      <div className="hero-copy">
        <p className="mono eyebrow">Computer science · Chennai</p>
        <h1>
          I build practical software around <em>data, search and AI</em>.
        </h1>
        <p className="lede">
          I'm {me.name}, a computer science undergraduate. I've built a question-answering app for
          PDFs, a data-cleaning API, a booking platform and a face-recognition voting prototype, and
          I'm currently working with data at an NGO.
        </p>
        <div className="actions">
          <a className="btn solid" href="#work">View projects</a>
          <a className="btn" href={me.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="btn" href={me.resume} target="_blank" rel="noreferrer">Resume ↗</a>
        </div>
      </div>
      <aside className="spec" aria-label="At a glance">
        <Portrait />
        <p className="mono spec-title">{me.name}</p>
        <dl>
          {spec.map(([k, v]) => (
            <div key={k}><dt className="mono">{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </aside>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="wrap section">
      <Head label="About">A little about me</Head>
      <div className="two">
        <Reveal className="prose">
          <p>
            I'm a B.Tech student in Computer Science and Engineering at SRM Institute of Science and
            Technology, graduating in 2027. I'm still learning, and I enjoy building small projects
            around a concrete problem, whether that's searching a document, cleaning messy data or
            making an app more reliable.
          </p>
          <p>
            I like projects that I can finish, run and explain, and I try to write them up so
            someone else can follow along.
          </p>
        </Reveal>
        <Reveal className="fit">
          <p className="mono small">Outside of code</p>
          <ul>
            {hobbies.map((h) => (
              <li key={h}><strong>{h}</strong></li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="wrap section">
      <Head label="Experience & education">Where I've worked and studied</Head>
      <div className="two xp">
        <Reveal>
          <h3 className="mono sub">Experience</h3>
          {experience.map((e) => (
            <article key={e.role} className="entry">
              <p className="mono when">{e.when}</p>
              <h4>{e.role}</h4>
              <p className="org">{e.org} <span>· {e.where}</span></p>
              <ul className="plain">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </article>
          ))}
        </Reveal>
        <Reveal>
          <h3 className="mono sub">Education</h3>
          {education.map((e) => (
            <article key={e.name} className="entry">
              <p className="mono when">{e.when}</p>
              <h4>{e.name}</h4>
              <p className="org">{e.what}</p>
            </article>
          ))}
          <h3 className="mono sub gap">Achievements & certifications</h3>
          <ul className="plain">{achievements.map((a) => <li key={a}>{a}</li>)}</ul>
        </Reveal>
      </div>
    </section>
  )
}

function Chips({ items }) {
  return <ul className="chips">{items.map((s) => <li key={s} className="mono">{s}</li>)}</ul>
}

function Project({ p, open, onToggle }) {
  return (
    <details className="case" id={p.id} open={open} onToggle={(e) => onToggle(p.id, e.currentTarget.open)}>
      <summary>
        <div className="sum-main">
          <p className="mono tag">{p.flag} · {p.when}</p>
          <h3>{p.title}</h3>
          <p className="case-line">{p.line}</p>
        </div>
        <span className="toggle mono" aria-hidden="true"><b className="plus">+</b></span>
      </summary>

      <div className="case-body">
        <div className="case-grid">
          <div><h4 className="mono">The problem</h4><p>{p.problem}</p></div>
          <div><h4 className="mono">The solution</h4><p>{p.solution}</p></div>
        </div>

        <h4 className="mono">How it works</h4>
        <ol className="steps">
          {p.steps.map(([t, d], i) => (
            <li key={t}><span className="mono n">{String(i + 1).padStart(2, '0')}</span><strong>{t}</strong><span>{d}</span></li>
          ))}
        </ol>

        <h4 className="mono">Built with</h4>
        <Chips items={p.stack} />

        <div className="case-grid status">
          <div>
            <h4 className="mono">Implemented</h4>
            <ul className="marks yes">{p.done.map((d) => <li key={d}>{d}</li>)}</ul>
          </div>
          <div>
            <h4 className="mono">Limits and next steps</h4>
            <ul className="marks no">{p.notYet.map((d) => <li key={d}>{d}</li>)}</ul>
          </div>
        </div>

        <div className="role">
          <h4 className="mono">My role</h4>
          <p>{p.role}</p>
        </div>

        {(p.links.length > 0 || p.note) && (
          <div className="evidence">
            <div className="links">
              {p.links.map(([label, href]) => (
                <a key={href} className="btn" href={href} target="_blank" rel="noreferrer">{label} ↗</a>
              ))}
            </div>
            {p.note && <p className="small">{p.note}</p>}
          </div>
        )}
      </div>
    </details>
  )
}

function Work() {
  const [openIds, setOpenIds] = useState(() => new Set(['rag']))
  const all = openIds.size === projects.length
  const onToggle = (id, isOpen) =>
    setOpenIds((prev) => {
      if (prev.has(id) === isOpen) return prev
      const next = new Set(prev)
      isOpen ? next.add(id) : next.delete(id)
      return next
    })
  const jump = (id) => {
    onToggle(id, true)
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }
  return (
    <section id="work" className="wrap section">
      <Head label="Projects">Selected projects</Head>
      <div className="work-bar">
        <ul className="index" aria-label="Jump to project">
          {projects.map((p) => (
            <li key={p.id}><button type="button" onClick={() => jump(p.id)}>{p.title.split(',')[0]}</button></li>
          ))}
        </ul>
        <button
          type="button"
          className="btn small-btn"
          onClick={() => setOpenIds(all ? new Set() : new Set(projects.map((p) => p.id)))}
        >
          {all ? 'Collapse all' : 'Expand all'}
        </button>
      </div>
      <div className="cases">
        {projects.map((p) => <Project key={p.id} p={p} open={openIds.has(p.id)} onToggle={onToggle} />)}
      </div>
    </section>
  )
}

function Concept() {
  const c = concept
  return (
    <section id="concept" className="wrap section">
      <Head label="Side concept" />
      <Reveal className="concept">
        <p className="stamp mono">Proposed concept · not a completed project</p>
        <h2>{c.title}</h2>
        <p className="intro">{c.problem}</p>

        <h4 className="mono">A simple user journey</h4>
        <ol className="steps four">
          {c.journey.map(([t, d], i) => (
            <li key={t}><span className="mono n">{String(i + 1).padStart(2, '0')}</span><strong>{t}</strong><span>{d}</span></li>
          ))}
        </ol>

        <h4 className="mono">Proposed architecture</h4>
        <div className="flow" role="list">
          {c.architecture.map(([t, d], i) => (
            <div key={t} className="node" role="listitem">
              <strong>{t}</strong><span>{d}</span>
              {i < c.architecture.length - 1 && <i aria-hidden="true" />}
            </div>
          ))}
        </div>

        <div className="case-grid">
          <div>
            <h4 className="mono">How it could be prototyped</h4>
            <ul className="plain">{c.prototype.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <h4 className="mono">How usefulness could be measured</h4>
            <dl className="evals">
              {c.evaluation.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
            </dl>
          </div>
        </div>
        <p className="small note">{c.disclaimer}</p>
      </Reveal>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="wrap section">
      <Head label="Skills">What I use</Head>
      <Reveal className="skills">
        {skills.map(([g, items]) => (
          <div key={g}><h4 className="mono">{g}</h4><Chips items={items} /></div>
        ))}
      </Reveal>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(me.email); setCopied(true); setTimeout(() => setCopied(false), 1800) }
    catch { setCopied(false) }
  }
  return (
    <section id="contact" className="wrap section contact">
      <Head label="Contact" />
      <Reveal>
        <h2 className="big">Have a problem that needs a small, well-built tool? Get in touch.</h2>
        <ul className="contact-list">
          <li>
            <span className="mono">Email</span>
            <span className="email-row">
              <a href={`mailto:${me.email}`}>{me.email}</a>
              <button type="button" className="copy mono" onClick={copy}>{copied ? 'Copied' : 'Copy'}</button>
            </span>
          </li>
          <li><span className="mono">LinkedIn</span><a href={me.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/triambakk-rb ↗</a></li>
          <li><span className="mono">GitHub</span><a href={me.github} target="_blank" rel="noreferrer">github.com/Triambakk ↗</a></li>
          <li><span className="mono">Resume</span><a href={me.resume} target="_blank" rel="noreferrer">Open the PDF ↗</a></li>
          <li><span className="mono">Location</span><span>{me.location}</span></li>
        </ul>
      </Reveal>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Concept />
        <Skills />
        <Contact />
      </main>
      <footer className="wrap foot mono">
        <span>© {new Date().getFullYear()} {me.name}</span>
        <span>{me.location} · Built with React and Vite</span>
      </footer>
    </>
  )
}
