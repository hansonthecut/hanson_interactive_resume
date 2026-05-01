import { useState, useEffect } from 'react';
import { resumeData } from './data/resumeData';
import './index.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (item) => setActiveModal(item);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-brand">FRANKFLIX</div>
        <div className="navbar-nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Experience</a>
          <a href="#" className="nav-link">Education</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{resumeData.hero.title}</h1>
          <h2 className="hero-subtitle">{resumeData.hero.subtitle}</h2>
          <p className="hero-description">{resumeData.hero.description}</p>
          <div className="hero-buttons">
            <button className="btn btn-play" onClick={() => window.open('/resume.pdf')}>
              <span style={{ marginRight: '8px' }}>▶</span> Play (Download)
            </button>
            <button className="btn btn-info" onClick={() => alert('Contact: fiifi93@gmail.com')}>
              <span style={{ marginRight: '8px' }}>ⓘ</span> More Info
            </button>
          </div>
        </div>
      </header>

      {/* Rows */}
      <main style={{ marginTop: '-100px', position: 'relative', zIndex: 10 }}>
        {/* Experience Row */}
        <div className="row">
          <h2 className="row-title">Trending Now (Experience)</h2>
          <div className="row-posters">
            {resumeData.roles.map(role => (
              <div key={role.id} className="poster" onClick={() => openModal(role)}>
                <div style={{ zIndex: 1, position: 'absolute', width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))' }}></div>
                <div style={{ zIndex: 2 }}>
                  <div className="poster-title">{role.title}</div>
                  <div className="poster-company">{role.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Row */}
        <div className="row">
          <h2 className="row-title">Critically Acclaimed (Education & Skills)</h2>
          <div className="row-posters">
            {resumeData.education.map(edu => (
              <div key={edu.id} className="poster" onClick={() => openModal(edu)}>
                <div style={{ zIndex: 1, position: 'absolute', width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))' }}></div>
                <div style={{ zIndex: 2 }}>
                  <div className="poster-title">{edu.title}</div>
                  <div className="poster-company">{edu.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            
            <div className="modal-header">
              <div className="modal-header-content">
                <h1 className="modal-title">{activeModal.title}</h1>
                <div className="modal-meta">
                  <span className="match-score">{activeModal.match}</span>
                  <span>{activeModal.date}</span>
                  <span style={{ border: '1px solid white', padding: '0 5px', fontSize: '0.8rem' }}>HD</span>
                </div>
                <div className="hero-buttons">
                  <button className="btn btn-play" style={{ padding: '0.5rem 1.5rem', fontSize: '1rem' }}>
                    ▶ Play
                  </button>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-desc">
                {activeModal.description}
              </div>
              <div className="modal-tags">
                <div className="tag-group">
                  <span>Cast (Company): </span>
                  <span className="tag-values">{activeModal.company}</span>
                </div>
                <div className="tag-group">
                  <span>Genres (Skills): </span>
                  <span className="tag-values">{activeModal.skills.join(', ')}</span>
                </div>
                <div className="tag-group">
                  <span>This show is: </span>
                  <span className="tag-values">{activeModal.type}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
