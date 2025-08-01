import React from 'react';
import '../index.css'; // Import global styles

function Projects() {
  const projects = [
    {
      title: 'Bank Information Management System',
      image: './c.jpg',
      description:
        'Secure banking platform with account management and IFSC search, built using MERN stack.',
      liveLink: 'https://bank-information-management-system.netlify.app',
      githubLink: 'https://github.com/anupampal01/Bank-Information-Management-System',
    },
    {
      title: 'Leaderboard System',
      image: './b.jpg',
      description:
        'Real-time leaderboard using MongoDB aggregation for dynamic ranking with user registration and history logs.',
      liveLink: 'https://leaderboardnew.netlify.app',
      githubLink: 'https://github.com/anupampal01/leaderboard-system',
    },
    {
      title: 'Topperniti Crash Course Platform',
      image: './a.jpg',
      description:
        'Online crash course platform with admin dashboard, student enrollment, progress tracking, and resource downloads.',
      liveLink: 'https://learnvantage.netlify.app',
      githubLink: 'https://github.com/anupampal01/topperniti-crash-course',
    },
    {
      title: 'Email Analyzer Tool',
      image: './e.jpg',
      description:
        'Parses .eml files to analyze email headers for SPF, DKIM, DMARC spoofing detection and generates detailed reports.',
      liveLink: 'https://email-analyzer.netlify.app',
      githubLink: 'https://github.com/anupampal01/Email_Analyzer',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>🚀 Projects</h2>
      <div className="projects">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>{' '}
                |{' '}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
