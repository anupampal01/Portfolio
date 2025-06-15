import React from 'react';
import '../index.css'; // global styles (formerly App.css)

function Skills() {
  const skills = {
    Frontend: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    ],
    Backend: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'RESTful APIs', icon: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-api-web-development-flatart-icons-outline-flatarticons.png' },
    ],
    Authentication: [
      { name: 'JWT', icon: 'https://img.icons8.com/ios-filled/50/json-web-token.png' },
      { name: 'OAuth', icon: 'https://img.icons8.com/color/48/oauth.png' },
    ],
    Tools: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'NPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
    ],
    Other: [
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Cloud Computing', icon: 'https://img.icons8.com/fluency/48/cloud.png' },
      { name: 'Razorpay', icon: 'https://avatars.githubusercontent.com/u/77132096?s=280&v=4' },
      { name: 'Web Hosting', icon: 'https://img.icons8.com/color/48/domain.png' },
    ],
    'Soft Skills': [
      { name: 'Problem Solving', icon: 'https://img.icons8.com/ios-filled/50/brain.png' },
      { name: 'Teamwork', icon: 'https://img.icons8.com/ios-filled/50/conference-call.png' },
      { name: 'Communication', icon: 'https://img.icons8.com/ios-filled/50/chat.png' },
      { name: 'Adaptability', icon: 'https://img.icons8.com/color/48/adaptability.png' },
      { name: 'Time Management', icon: 'https://img.icons8.com/fluency-systems-filled/48/clock.png' },
    ],
  };

  return (
    <section id="skills">
      <h2>Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skills-category">
          <h3>{category}</h3>
          <div className="skills-grid">
            {items.map((skill, idx) => (
              <div className="skill-card" key={idx}>
                <img src={skill.icon} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
