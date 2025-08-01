import '../index.css'; // Ensure CSS styles are imported

function About() {
  return (
    <section id="about" className="about-section">
      {/* Name & Contact */}
      <h2 className="section-title">About Me</h2>

      {/* Profile */}
      <h3>PROFILE</h3>
      <p>
        I am a passionate <strong>Full Stack MERN Developer</strong> focused on building scalable and
        responsive web applications with modern UI/UX. Proficient in
        <strong> React.js, Node.js, Express.js, and MongoDB</strong>, with hands-on experience in
        <strong> REST API development</strong> and state management. Basic familiarity with
        <strong> Docker, Kubernetes, and AWS</strong> for deployment workflows.
      </p>

      {/* Core Skills */}
      <h3>CORE SKILLS</h3>
      <p>
        React.js • Node.js • Express.js • MongoDB • REST APIs • Tailwind CSS • JavaScript (ES6+)
        • Docker (Basic) • AWS (Basic)
      </p>

      {/* Projects */}
      <h3>PROJECT HIGHLIGHTS</h3>

      <div className="project">
        <h4>Bank Information Management System</h4>
        <p>
          <a
            href="https://bank-information-management-system.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/anupampal01/Bank-Information-Management-System"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <p>Secure banking platform with IFSC search and account management built using MERN stack.</p>
      </div>

      <div className="project">
        <h4>Leaderboard System</h4>
        <p>
          <a
            href="https://leaderboardnew.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/anupampal01/leaderboard-system"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <p>Real-time leaderboard using MongoDB aggregation for rankings and live updates.</p>
      </div>

      <div className="project">
        <h4>Topperniti Crash Course Platform</h4>
        <p>
          <a
            href="https://topperniti-crash-course.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/anupampal01/topperniti-crash-course"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <p>Crash course platform with admin dashboard, student progress tracking, and resource downloads.</p>
      </div>

      {/* Education */}
      <h3>EDUCATION</h3>
      <p>
        <strong>B.Tech in Computer Science</strong> – Maharana Pratap Engineering College, Kanpur (2021 – 2025)
      </p>
    </section>
  );
}

export default About;
