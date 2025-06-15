import '../index.css'; // Make sure to import the stylesheet

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        Hello! I’m <strong>Anupam</strong>, a dedicated and self-motivated full-stack developer with a strong passion for technology, clean code, and building impactful solutions.
      </p>

      <h3>🎓 Qualification</h3>
      <p>
        I graduated with a <strong>Bachelor of Technology (B.Tech)</strong> in Computer Science and Engineering from <strong>Maharana Pratap Engineering College, Kanpur</strong>. During my academic journey, I built a strong foundation in data structures, algorithms, and core software engineering principles.
      </p>

      <h3>💼 Skills</h3>
      <ul>
        <li>Frontend: HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS</li>
        <li>Backend: Node.js, Express.js, MongoDB, RESTful APIs</li>
        <li>Authentication: JWT, OAuth (Google, GitHub, Facebook, LinkedIn)</li>
        <li>Dev Tools: Git, GitHub, Postman, VS Code, NPM</li>
        <li>Other: Razorpay Integration, LogRocket, Cloudinary, Web Hosting</li>
      </ul>

      <h3>📂 Projects</h3>
      <p>I have worked on multiple real-world projects including:</p>
      <ul>
        <li>eCommerce Website – Full-featured online store with user authentication, product catalog, and Razorpay payment integration</li>
        <li>TaskFlowPro – a task management dashboard with analytics and role-based auth</li>
        <li>Email Header Analyzer – built using Django, performs spoof detection and DNS checks</li>
        <li>IPO Information App – Real-time IPO listings with company data and smart filters</li>
        <li>BookStore App – full CRUD app with admin dashboard and JWT auth</li>
      </ul>

      <h3>👨‍💻 Experience & Contributions</h3>
      <p>
        <strong>Software Development Intern (Team Lead) — Bluestock Fintech</strong><br />
        <em>Remote | April 2025 – May 2025</em><br />
        • Led a team of 4 in building a full-stack IPO information platform using the MERN stack.<br />
        • Developed a secure, scalable backend with Node.js, Express.js, and MongoDB to handle real-time IPO data and RESTful CRUD operations.<br />
        • Collaborated on frontend design with React to build a responsive UI with advanced filters and live IPO listings.<br />
        • Managed task delegation, code reviews, and GitHub collaboration, ensuring clean architecture and timely delivery.
      </p>

      <h3>🌱 Interests</h3>
      <p>
        Besides coding, I love exploring AI, ethical hacking, blockchain tech, and cybersecurity. I believe in continuous learning and am currently diving into machine learning with Python and real-world deployment.
      </p>

      <h3>📬 Let’s Connect!</h3>
      <p>
        I’m open to freelance opportunities, collaborations, and tech discussions. Let’s build something amazing together!
      </p>
    </section>
  );
}

export default About;
