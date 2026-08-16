import {
  Mail,
  Phone,
  MapPin,
  ArrowDown,
  Download,
  ExternalLink,
  Code2,
  BriefcaseBusiness,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const personalInfo = {
  name: "Gowrinath S",
  role: "Java Developer | Full Stack Developer",
  email: "gowrinath508@gmail.com",
  phone: "+91 6385277768",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  location: "Tamil Nadu, India",
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Certifications", "#certifications"],
    ["Contact", "#contact"],
  ];
  return (
    <div className="min-h-screen bg-[#050505] text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a
            href="#home"
            className="text-xl font-bold tracking-widest"
          >
            GOWRINATH<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="text-sm text-gray-400 transition hover:text-cyan-400"
              >
                {name}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full border border-cyan-400/40 px-5 py-2 text-sm text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
            >
              Let's Connect
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-black px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              {navItems.map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 transition hover:text-cyan-400"
                >
                  {name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="w-fit rounded-full border border-cyan-400 px-5 py-2 text-cyan-400"
              >
                Let's Connect
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
      >
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-400">
              Final Year Computer Science Student
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Gowrinath.S
              </span>
            </h1>

            <p className="mt-6 text-2xl font-semibold text-gray-300">
              {personalInfo.role}
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 md:text-lg">
              Passionate about building practical software solutions using
              Java, Spring Boot, React and modern web technologies. Currently
              focused on improving my Data Structures and Algorithms skills
              and becoming a strong software engineer.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
              >
                View My Work
                <ArrowDown size={18} />
              </a>

              <a
                href="/Gowrinath-Resume.pdf"
                download
                className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Download Resume
                <Download size={18} />
              </a>

            </div>

            <div className="mt-8 flex gap-4">

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
                aria-label="GitHub"
              >
                <Code2 size={20} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
                aria-label="LinkedIn"
              >
                <BriefcaseBusiness size={20} />
              </a>

              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=gowrinath508@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
  aria-label="Email"
>
  <Mail size={20} />
</a>
            </div>
          </div>

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute -inset-8 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative h-72 w-72 overflow-hidden rounded-full border border-cyan-400/40 bg-white/5 shadow-2xl shadow-cyan-500/10 md:h-96 md:w-96">

                <img
                  src="/profile.jpg"
                  alt="Gowrinath"
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Building. Learning. Growing.
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-gray-400">
            I'm a final-year Computer Science student interested in Java
            backend development, full-stack development and problem solving.
            I enjoy creating practical projects and continuously improving my
            programming and software engineering skills.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <InfoCard
              title="Final Year Student"
              text="Computer Science"
            />

            <InfoCard
              title="Backend Focus"
              text="Java & Spring Boot"
            />

            <InfoCard
              title="Problem Solving"
              text="DSA & LeetCode"
            />

          </div>

        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="border-y border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            My Technical Skills
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            Technologies and concepts I'm currently learning and using
            to build software projects.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <SkillCategory
              title="Programming"
              skills={[
                "Java",
                "JavaScript",
                "Python",
              ]}
            />

            <SkillCategory
              title="Backend Development"
              skills={[
                "Spring",
                "Spring Boot",
                "REST APIs",
              ]}
            />

            <SkillCategory
              title="Frontend Development"
              skills={[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
              ]}
            />

            <SkillCategory
              title="Database"
              skills={[
                "SQL",
                "MySQL",
              ]}
            />

            <SkillCategory
              title="Computer Science"
              skills={[
                "Data Structures",
                "Algorithms",
                "OOP",
                "DBMS",
              ]}
            />

            <SkillCategory
              title="Tools"
              skills={[
                "Git",
                "GitHub",
                "VS Code",
              ]}
            />

          </div>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            What I've Built
          </h2>

          <p className="mt-5 max-w-2xl text-gray-400">
            A selection of projects where I applied programming,
            problem-solving and modern development technologies.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {/* PROJECT 1 */}
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">

              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-cyan-950 to-blue-950">

                <img
                  src="/project1.png"
                  alt="Tamil Sign Language project"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 rounded-full border border-cyan-400/30 bg-black/60 px-4 py-1 text-xs text-cyan-400 backdrop-blur">
                  PROJECT 01
                </div>

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold">
                  Tamil Sign Language to Text & Speech
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  A computer vision project that recognizes sign language
                  gestures and converts the recognized signs into text and
                  speech, helping improve communication accessibility.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {[
                    "Python",
                    "PyTorch",
                    "Vision Transformer",
                    "OpenCV",
                    "Computer Vision",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="mt-7 flex gap-3">

                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-105"
                  >
                    GitHub
                  </a>

                  <button
                    onClick={() =>
                      alert("Add your live project URL here.")
                    }
                    className="rounded-full border border-white/20 px-5 py-2.5 text-sm transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    Live Demo
                  </button>

                </div>

              </div>

            </div>

            {/* PROJECT 2 */}
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">

              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-purple-950 to-indigo-950">

                <img
                  src="/project2.png"
                  alt="Online Library Management System"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 rounded-full border border-purple-400/30 bg-black/60 px-4 py-1 text-xs text-purple-400 backdrop-blur">
                  PROJECT 02
                </div>

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold">
                  Online Library Management System
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  A web-based library management application designed
                  to manage books, users and library operations through
                  a simple and efficient interface.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "SQL",
                    "MySQL",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="mt-7 flex gap-3">

                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-105"
                  >
                    GitHub
                  </a>

                  <button
                    onClick={() =>
                      alert("Add your live project URL here.")
                    }
                    className="rounded-full border border-white/20 px-5 py-2.5 text-sm transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    Live Demo
                  </button>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section
        id="education"
        className="border-y border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Education
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Academic Journey
          </h2>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">

            <div className="flex flex-col justify-between gap-5 md:flex-row">

              <div>

                <p className="text-sm text-cyan-400">
                  Bachelor's Degree
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  B.E. Computer Science and Engineering
                </h3>

                <p className="mt-2 text-gray-400">
                  Final Year Student
                </p>

              </div>

              <div className="md:text-right">

                <p className="text-gray-400">
                  Current CGPA
                </p>

                <p className="mt-1 text-4xl font-bold text-cyan-400">
                  7.56
                </p>

              </div>

            </div>

            <div className="mt-8 border-t border-white/10 pt-6">

              <p className="text-lg font-semibold text-gray-200">
                P.A. College of Engineering and Technology
              </p>

              <p className="mt-2 text-gray-400">
                Pollachi
              </p>

              <p className="mt-2 text-gray-500">
                B.E. Computer Science and Engineering • Graduation: 2027
              </p>

            </div>

          </div>

        </div>
      </section>
{/* ================= CERTIFICATIONS & WORKSHOPS ================= */}

<section id="certifications" className="px-6 py-24">

  <div className="mx-auto max-w-6xl">

    <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
      Certifications & Workshops
    </p>

    <h2 className="mt-3 text-4xl font-bold md:text-5xl">
      Learning & Recognition
    </h2>

    <p className="mt-5 max-w-2xl leading-7 text-gray-400">
      Certifications and technical workshops that have helped me
      develop my programming and technology skills.
    </p>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* HTML & CSS */}
      <CertificateCard
        title="HTML & CSS Web Development"
        organization="Udemy"
        certificate="/html-css-certificate.pdf"
      />

      {/* AI/ML Workshop */}
      <CertificateCard
        title="Artificial Intelligence & Machine Learning Workshop"
        organization="Bannari Amman Institute of Technology"
        certificate="/aiml-workshop.pdf"
      />

      {/* Cyber Security Workshop */}
      <CertificateCard
        title="Cyber Security Workshop"
        organization="Bannari Amman Institute of Technology"
        certificate="/cyber-security-workshop.pdf"
      />

    </div>

  </div>

</section>
      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Let's Connect
          </h2>

          <p className="mt-5 max-w-2xl text-gray-400">
            I'm interested in software development opportunities,
            internships and interesting projects.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">

            <ContactItem
              icon={<Mail size={22} />}
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
            />

            <ContactItem
              icon={<Phone size={22} />}
              label="Phone"
              value={personalInfo.phone}
              href={`tel:${personalInfo.phone}`}
            />

            <ContactItem
              icon={<Code2 size={22} />}
              label="GitHub"
              value="View GitHub Profile"
              href={personalInfo.github}
            />

            <ContactItem
              icon={<BriefcaseBusiness size={22} />}
              label="LinkedIn"
              value="View LinkedIn Profile"
              href={personalInfo.linkedin}
            />

            <ContactItem
              icon={<MapPin size={22} />}
              label="Location"
              value={personalInfo.location}
              href="#home"
            />

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 px-6 py-8">

        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-center text-sm text-gray-500 md:flex-row md:text-left">

          <p>
            © 2026 {personalInfo.name}. All rights reserved.
          </p>

          <p>
            Built with React + Tailwind CSS
          </p>

        </div>

      </footer>

    </div>
  );
}


/* ================= INFO CARD ================= */

function InfoCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40">

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {text}
      </p>

    </div>
  );
}


/* ================= SKILL CATEGORY ================= */

function SkillCategory({ title, skills }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]">

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <div className="mt-6 flex flex-wrap gap-2">

        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-400/50 hover:text-cyan-400"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}


/* ================= CERTIFICATE CARD ================= */

function CertificateCard({
  title,
  organization,
  certificate,
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">

      <p className="text-sm text-cyan-400">
        CERTIFICATE
      </p>

      <h3 className="mt-4 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {organization}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">

        {/* VIEW CERTIFICATE */}
        <a
          href={certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
        >
          View
          <ExternalLink size={15} />
        </a>

        {/* DOWNLOAD CERTIFICATE */}
        <a
          href={certificate}
          download
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-105"
        >
          Download
          <Download size={15} />
        </a>

      </div>

    </div>
  );
}
/* ================= CONTACT ITEM ================= */

function ContactItem({
  icon,
  label,
  value,
  href,
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
    >

      <div className="text-cyan-400">
        {icon}
      </div>

      <div>

        <p className="text-sm text-gray-500">
          {label}
        </p>

        <p className="mt-1 break-all">
          {value}
        </p>

      </div>

    </a>
  );
}


export default App;