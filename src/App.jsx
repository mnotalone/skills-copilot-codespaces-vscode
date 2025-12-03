import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Inaugural Project</h1>
        <p className="subtitle">A showcase web application built with React and Vite</p>
      </header>

      <section className="tech-stack">
        <h2>Technologies Used</h2>
        <div className="logos">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            <span>Vite</span>
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
            <span>React</span>
          </a>
        </div>
      </section>

      <section className="about">
        <h2>About This Project</h2>
        <div className="card">
          <p>
            Welcome to my inaugural project! This web application demonstrates my skills
            in modern front-end development using React and Vite.
          </p>
          <ul className="features">
            <li>⚡ Lightning-fast development with Vite</li>
            <li>⚛️ Component-based architecture with React</li>
            <li>🎨 Modern, responsive design</li>
            <li>🚀 Optimized for production builds</li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>Built with ❤️ using React + Vite</p>
      </footer>
    </>
  )
}

export default App
