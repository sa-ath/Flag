import './App.css'

function App() {
  return (
    <main className="page-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Flag home">
          <span className="brand-mark" aria-hidden="true">F</span>
          <span>flag<span className="brand-period">.</span></span>
        </a>
        <a className="nav-link" href="#about">About</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow"><span className="status-dot" /> YOUR NEXT IDEA STARTS HERE</span>
          <h1>Make room for<br /><span>what’s next.</span></h1>
          <p className="hero-description">
            A fresh starting point for thoughtful ideas, useful tools, and things worth building.
          </p>
          <a className="primary-button" href="#about">
            Explore the page <span aria-hidden="true">↗</span>
          </a>
          <p className="small-note">Made for your next big thing.</p>
        </div>

        <div className="visual" aria-label="Abstract layered cards illustration">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-card card-back"><span className="card-sparkle">✳</span></div>
          <div className="visual-card card-front">
            <span className="card-label">A NOTE TO SELF</span>
            <span className="card-title">Start<br />somewhere.</span>
            <span className="card-footer"><span className="mini-mark">F</span> ONE STEP AT A TIME</span>
          </div>
          <span className="float-dot dot-one" />
          <span className="float-dot dot-two" />
          <span className="float-star">✳</span>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-heading">
          <span className="eyebrow">A SIMPLE BEGINNING</span>
          <h2>Good things grow<br />from a first step.</h2>
        </div>
        <p>This little corner of the web is ready to become whatever you have in mind. Take a look around, then make it yours.</p>
        <span className="about-index">01 — 01</span>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark" aria-hidden="true">F</span><span>flag<span className="brand-period">.</span></span></a>
        <span>A little space to begin.</span>
        <span>© 2026 FLAG</span>
      </footer>
    </main>
  )
}

export default App
