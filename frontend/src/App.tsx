import './App.css';
type ReportKind = 'bug' | 'feature'

type Report = {
  id: string;
  text: string;
  kind: ReportKind;
}

function App() {
  const initialReports: Report[] = [
    { id: '1', text: 'Navigation link is broken', kind: 'bug' },
    { id: '2', text: 'Add dark mode', kind: 'feature' },
  ]


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
            Hi, I'm James. I am a student based in Northern Virginia with a strong background in software engineering. 
            I am particularly interested in leveraging my technical skills for defense contracting work and national security applications.
          </p>
          <div className="tags">
            <span className="tag">Defense Contracting</span>
            <span className="tag">Software Engineering</span>
            <span className="tag">Data & Math</span>
          </div>
        </div>
      </main>
      <section className="report-board">
        <h2>Bugs & Feature Requests</h2>
        <ul>
          {initialReports.map((report) => (
          <li key={report.id}>
          {report.text} ({report.kind})
          </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;