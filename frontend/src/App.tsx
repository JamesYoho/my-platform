import './App.css';

function App() {
  return (
    <div className="landing-container">
      <header className="header">
        <h1>James Yoho</h1>
        <h2>Computer Science, Mathematics, and Applied Statistics</h2>
        <span className="location-badge">Northern Virginia • Defense Contracting Interest</span>
      </header>
      
      <main className="card">
        <div className="visual-element">
          {/* Points to the image in your public folder */}
          <img 
            src="/headshot.jpg" 
            alt="James Yoho" 
            className="headshot-img" 
            onError={(e) => {
              // This must be a different, guaranteed-to-load URL
              e.currentTarget.src = "https://via.placeholder.com/130";
            }}
          />
        </div>
        <div className="bio">
          <p>
            Hi, I'm James. I am a student based in Northern Virginia with a strong background in software engineering and quantitative analysis. 
            I am particularly interested in leveraging my technical skills for defense contracting work and national security applications.
          </p>
          <div className="tags">
            <span className="tag">Defense Contracting</span>
            <span className="tag">Software Engineering</span>
            <span className="tag">Data & Math</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;