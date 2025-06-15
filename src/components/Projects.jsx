import React from 'react';
import '../index.css'; // Import global styles

function Projects() {
  const projects = [
    {
      title: 'Task Manager',
      image: './c.webp',
      description:
        'A productivity app with task creation, deadlines, reminders, priorities, and dashboard analytics.',
    },
    {
      title: 'Email Analyzer',
      image: './e.jpg',
      description:
        'A tool to detect email spoofing and analyze headers, with SPF, DKIM, and DMARC record validation.',
    },
    {
      title: 'E-commerce Website',
      image: './b.png',
      description:
        'A dynamic e-commerce site with product listings, search, secure checkout, payment, and order tracking.',
    },
    {
      title: 'Portfolio Website',
      image: './d.jpg',
      description:
        'A personal portfolio showcasing my skills, projects, contact links, and responsive modern design.',
    },
    {
      title: 'IPO Information Platform',
      image: './a.jpg',
      description:
        'A MERN-stack web app displaying real-time IPO listings with smart filters, company insights, and RESTful API integration.',
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
