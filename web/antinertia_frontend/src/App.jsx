import FloatingLines from './components/FloatingLines/FloatingLines';
import './App.css';

function App() {
  return (
    <div className="landing-v2">
      <div className="lines-bg" aria-hidden="true">
        <FloatingLines
          linesGradient={['#88B3FF', '#5D63FF', '#BA7BFF']}
          animationSpeed={1.35}
          interactive
          bendRadius={5}
          bendStrength={-0.5}
          mouseDamping={0.05}
          parallax
          parallaxStrength={0.2}
          lineCount={[8, 9, 8]}
          lineDistance={[4.2, 4, 4.5]}
          mixBlendMode="screen"
        />
      </div>
      <div className="ambient ambient-a" aria-hidden="true"></div>
      <div className="ambient ambient-b" aria-hidden="true"></div>

      <header className="nav-shell">
        <a className="brand" href="#">
          <span className="mark" aria-hidden="true">◌</span>
          <span>AlphaNexus</span>
        </a>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/console">Console</a>
        </nav>
      </header>

      <main className="hero-shell">
        <h1>Multi-Agent Research Engine</h1>
        <div className="cta-row">
          <a className="btn btn-primary" href="/console">Get Started</a>
        </div>
      </main>
    </div>
  );
}

export default App;
