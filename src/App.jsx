import { motion, useScroll, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt,FaBars, FaTimes } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { SiLeetcode, SiCodeforces, SiHackerrank } from "react-icons/si";


export default function App() {
  const { scrollYProgress } = useScroll();
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
    
  useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      threshold: 0.6
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
}, []);

  return (
    <motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:0.8}}
>
    <div
className="bg-gradient-to-b from-[#0a0a0a] via-[#0d1117] to-black text-white min-h-screen w-full overflow-x-hidden scroll-smooth"
onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
>
   <motion.div
  style={{ scaleX: scrollYProgress }}
  className="fixed top-0 left-0 right-0 h-[3px] bg-blue-500 origin-left z-[100]"
/>

<div
className="pointer-events-none fixed w-[500px] h-[500px] rounded-full blur-[120px] bg-blue-500/10 z-0"
style={{
left: cursor.x - 250,
top: cursor.y - 250
}}
/>

<div className="pointer-events-none fixed inset-0 z-0">
  <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full top-[20%] left-[40%]" />
</div>

<div
className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03]"
style={{
backgroundImage:
"linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg,#ffffff 1px, transparent 1px)",
backgroundSize:"40px 40px"
}}
></div>

      {/* FLOATING NAVBAR */}
      <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/60 border-b border-gray-800 z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

    {/* LOGO */}
    <h1 className="flex items-center gap-2 font-bold text-lg">
    <span className="bg-blue-500 text-black px-2 py-1 rounded-md text-xs font-bold">
    NG
    </span>
    <span className="text-blue-500">Naman Goel</span>
    </h1>

    {/* DESKTOP NAV */}
    <div className="hidden md:flex gap-6 text-sm text-gray-400">
      <a href="#about" className={`relative pb-1 ${active === "about"? "text-blue-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300" : "text-gray-400"}
      hover:text-white`}>About</a>  
      <a href="#skills" className={`relative pb-1 ${active==="skills" ? "text-blue-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500  after:transition-all after:duration-300" : "text-gray-400"}
      hover:text-white`}>Skills</a>
      <a href="#projects" className={`relative pb-1 ${active==="projects" ? "text-blue-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300" : "text-gray-400"} hover:text-white`}>Projects</a>
      <a href="#dsa" className={`relative pb-1 ${active==="dsa" ? "text-blue-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300" : "text-gray-400"}
       hover:text-white`}>DSA</a>
      <a href="#contact" className={`relative pb-1 ${active==="contact" ? "text-blue-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300" : "text-gray-400"} hover:text-white`}>Contact</a>
    </div>

    {/* MOBILE HAMBURGER */}
    <button
      className="md:hidden text-xl text-gray-300"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <FaTimes /> : <FaBars />}
    </button>

  </div>

  {/* MOBILE MENU */}
    {menuOpen && (
  <div className="md:hidden border-t border-gray-800 bg-black/90 backdrop-blur-lg">
    
    <div className="flex justify-center gap-6 py-4 text-sm text-gray-300">

      <a onClick={()=>setMenuOpen(false)} href="#about" className="hover:text-blue-400">
        About
      </a>

      <a onClick={()=>setMenuOpen(false)} href="#skills" className="hover:text-blue-400">
        Skills
      </a>

      <a onClick={()=>setMenuOpen(false)} href="#projects" className="hover:text-blue-400">
        Projects
      </a>

      <a onClick={()=>setMenuOpen(false)} href="#dsa" className="hover:text-blue-400">
        DSA
      </a>

      <a onClick={()=>setMenuOpen(false)} href="#contact" className="hover:text-blue-400">
        Contact
      </a>

    </div>

  </div>
)}
</nav>

      {/* HERO */}
      <section className="min-h-[85vh] flex flex-col md:flex-row items-center justify-center gap-12 px-6 max-w-6xl mx-auto pt-32 relative">

        <motion.div
      className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10"
      animate={{
      x: [0, 80, -80, 0],
      y: [0, -50, 50, 0]
      }}
      transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut"
      }}
      style={{
      top: "10%",
      right: "10%"
      }}
      />

      <motion.div
       className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] -z-10"
       animate={{
       x: [0, -60, 60, 0],
       y: [0, 40, -40, 0]
       }}
       transition={{
       duration: 14,
       repeat: Infinity,
       ease: "easeInOut"
       }}
       style={{
       bottom: "10%",
       left: "10%"
       }}
       />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide bg-gradient-to-r from-white via-blue-400 to-blue-600 bg-clip-text text-transparent">
            Naman Goel
          </h1>

          <TypeAnimation
          sequence={[
          "Full Stack Developer",
          2000,
          "MERN Stack Developer",
          2000,
          "React & Node.js Developer",
          2000,
          "Building Modern Web Applications",
          2000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-blue-400 text-lg mb-3"
          />

          <p className="text-gray-400 mb-6 leading-relaxed">
             Aspiring Full Stack Developer focused on building modern web applications and improving problem-solving skills through Data Structures & Algorithms.
          </p>

            <div className="flex flex-wrap gap-3 mt-3 text-sm">

              <span className="px-3 py-1 border border-gray-700 bg-black/30 rounded-full">
React.js
</span>

<span className="px-3 py-1 border border-gray-700 bg-black/30 rounded-full">
Node.js
</span>

<span className="px-3 py-1 border border-gray-700 bg-black/30 rounded-full">
MongoDB
</span>

<span className="px-3 py-1 border border-gray-700 bg-black/30 rounded-full">
Tailwind
</span>

<span className="px-3 py-1 border border-gray-700 bg-black/30 rounded-full">
DSA
</span>

</div>
           
  </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src="/profile.jpg"
          alt="Naman"
          className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover 
                     border-4 border-blue-500 
                     shadow-[0_0_50px_#3b82f6] hover:shadow-[0_0_120px_#3b82f6] transition duration-300"
        />
      </section>


      {/* ABOUT */}
         <motion.section
    id="about"
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.6}}
    viewport={{once:true}}
    className="py-16 px-6 max-w-5xl mx-auto"
    >
    
    <h2 className="text-3xl font-bold text-blue-500 mb-2">About Me</h2>
    
    <motion.div
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 1.1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="origin-left h-[2px] w-32 bg-blue-500 mb-6"
/>
    
    <p className="text-gray-400 leading-relaxed max-w-3xl">
    I focus on building real-world applications using the MERN stack and
    continuously improving my logical reasoning through DSA in C++.
    My goal is to contribute to impactful software systems and grow
    through hands-on development experiences.
    </p>
    
    </motion.section>
    <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-16"></div>


      {/* SKILLS */}
      <motion.section
          id="skills"
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="py-24 px-6 bg-[#111] relative overflow-hidden"
          >
        <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl font-bold text-blue-500 mb-2">
        Skills
        </h2>

       <motion.div
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 0.7 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="origin-left h-[2px] w-32 bg-blue-500 mb-6"
/>



          <div className="grid md:grid-cols-5 gap-8">

            <Card title="Frontend" text="HTML, CSS, JavaScript, React, Tailwind" />
            <Card title="Backend" text="Node.js, Express.js, REST APIs, MongoDB, SQL" />
            <Card title="Programming" text="C++, Python" />
            <Card title="Concepts" text="Data Structures & Algorithms" />
            <Card title="Tools" text="Git, GitHub, VS Code" />

          </div>
        </div>
      </motion.section>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-16"></div>

     {/* PROJECTS */}
<motion.section
  id="projects"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="py-24 px-6 max-w-6xl mx-auto"
>

<h2 className="text-3xl font-bold text-blue-500 mb-2">
Featured Projects
</h2>

<motion.div
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 1.91 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="origin-left h-[2px] w-32 bg-blue-500 mb-6"
/>

<div className="grid md:grid-cols-2 gap-10">

  <Project
    title="Jarvis Voice Assistant"
    desc="Voice-controlled AI assistant built using Python that performs system automation and command execution."
    tech="Python, NLP"
    github="https://github.com/Naman105/Jarvis-Voice-Assistant"
  />

  <Project
    title="Dummy Company Website"
    desc="Multi-section responsive website demonstrating UI structure and layout consistency."
    tech="HTML, CSS, JavaScript"
    github="https://github.com/Naman105/Dummy-Company-Website-"
  />

</div>

</motion.section>
<div className="h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-16"></div>


      {/* DSA */}
      <motion.section
        id="dsa"
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        viewport={{once:true}}
        className="py-24 px-6 bg-[#111] relative overflow-hidden"
        >
        <div className="max-w-6xl mx-auto">
<motion.h2
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="text-3xl font-bold tracking-wide text-blue-500 mb-3"
>
  DSA & Coding Profiles
</motion.h2>

<motion.div
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 2.6 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="origin-left h-[2px] w-32 bg-blue-500 mb-6"
/>
      <div className="grid md:grid-cols-3 gap-8">

<a
href="https://leetcode.com/u/NamanGoel123/"
target="_blank"
className="bg-black/40 border border-gray-800 rounded-xl p-6 flex flex-col items-center gap-4 hover:border-blue-500 hover:shadow-[0_0_20px_#3b82f6] transition"
>
<SiLeetcode className="text-4xl text-yellow-400"/>
<h3 className="font-semibold">LeetCode</h3>
<p className="text-gray-400 text-sm">50+ Problems Solved</p>
</a>

<a
href="https://codeforces.com/profile/Namangoel789"
target="_blank"
className="bg-black/40 border border-gray-800 rounded-xl p-6 flex flex-col items-center gap-4 hover:border-blue-500 hover:shadow-[0_0_20px_#3b82f6] transition"
>
<SiCodeforces className="text-4xl text-blue-400"/>
<h3 className="font-semibold">Codeforces</h3>
<p className="text-gray-400 text-sm">Rating: 439</p>
</a>

<a
href="https://www.hackerrank.com/profile/goelnaman366"
target="_blank"
className="bg-black/40 border border-gray-800 rounded-xl p-6 flex flex-col items-center gap-4 hover:border-blue-500 hover:shadow-[0_0_20px_#3b82f6] transition"
>
<SiHackerrank className="text-4xl text-green-400"/>
<h3 className="font-semibold">HackerRank</h3>
<p className="text-gray-400 text-sm">5⭐ C++ Badge</p>
</a>

</div>
        </div>
  </motion.section>
  <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-16"></div>

<section className="py-24 text-center">
  <h2 className="text-4xl font-bold mb-4 text-blue-600">
    Let’s Build Something Amazing Together
  </h2>

  <p className="text-gray-400 mb-8">
    I'm currently open to internship opportunities and exciting projects.
  </p>

  <a
    href="mailto:goelnaman366@gmail.com"
    className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition"
  >
    Get In Touch
  </a>
</section>

<motion.a
href="#"
whileHover={{ scale: 1.2 }}
className="fixed bottom-8 right-8 bg-blue-600 p-3 rounded-full shadow-[0_0_15px_#3b82f6] hover:bg-blue-700 transition"
>
↑
</motion.a>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#0f0f0f] border-t border-gray-800 py-20 px-6">

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

    {/* LEFT - Branding */}
    <div>
      <h3 className="text-xl font-bold text-blue-400 mb-4">
        Naman Goel
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        Full Stack Developer focused on building scalable web applications 
        and solving real-world problems using MERN stack.
      </p>

      <p className="text-gray-500 text-sm">
        📍 India <br />
        🟢 Open to Internship Opportunities
      </p>
    </div>

    {/* CENTER - Quick Links */}
    <div>
      <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
      <div className="flex flex-col gap-2 text-gray-400 text-sm">
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#skills" className="hover:text-blue-400">Skills</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#dsa" className="hover:text-blue-400">DSA</a>
      </div>
    </div>

    {/* RIGHT - Contact */}
    <div>
      <h4 className="font-semibold mb-4 text-white">Get In Touch</h4>

      <div className="flex flex-col gap-4 text-gray-400 text-sm">

        <a href="mailto:goelnaman366@gmail.com" className="flex items-center gap-3 hover:text-blue-400">
          <FaEnvelope /> goelnaman366@gmail.com
        </a>

        <a href="https://github.com/Naman105" target="_blank" className="flex items-center gap-3 hover:text-blue-400">
          <FaGithub /> GitHub
        </a>

        <a href="https://www.linkedin.com/in/naman-goel-378417275/" target="_blank" className="flex items-center gap-3 hover:text-blue-400">
          <FaLinkedin /> LinkedIn
        </a>

        <a href="/resume.pdf" className="flex items-center gap-3   hover:text-blue-400">
          <FaExternalLinkAlt /> Resume
        </a>

      </div>
    </div>

  </div>

  {/* Bottom Line */}
  <div className="mt-16 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
    <p>Designed & Developed by Naman Goel</p>
    © {new Date().getFullYear()} Naman Goel — Built with React & Tailwind
  </div>

</footer>

    </div>
    </motion.div>
  );
}


function Card({ title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="cursor-pointer bg-black/40 p-6 rounded-xl border border-gray-800 
      hover:border-blue-500 hover:shadow-[0_0_30px_#3b82f6] transition duration-300"
    >
      <h3 className="font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm">{text}</p>
    </motion.div>
  );
}

function Project({ title, desc, tech, github }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06, rotateX: 10, rotateY: -10, boxShadow:"0 30px 80px rgba(59,130,246,0.35)"}}
      transition={{ type: "spring", stiffness: 200 }}
      whileTap={{ scale: 0.96 }}
      className="cursor-pointer bg-black/40 p-6 rounded-xl border border-gray-800 
      hover:border-blue-500 hover:shadow-[0_0_30px_#3b82f6] transition duration-300"
    >
      <h3 className="font-semibold mb-3 text-lg">{title}</h3>

      <p className="text-gray-400 mb-4">{desc}</p>

        <div className="flex flex-wrap gap-2 mb-4 text-xs">

{tech.split(",").map((t,i)=>(
<span
key={i}
className="px-2 py-1 border border-gray-700 rounded-full text-blue-400"
>
{t}
</span>
))}

</div>

      <div className="flex gap-4 items-center">
        <a
          href={github}
          target="_blank"
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </motion.div>
  );
}

function DSA({ title, text, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      whileHover={{ scale: 1.05 }}
      className="block bg-black/40 p-6 rounded-xl border border-gray-800 
      hover:shadow-[0_0_25px_#3b82f6] transition duration-300"
    >
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{text}</p>
    </motion.a>
  );
}