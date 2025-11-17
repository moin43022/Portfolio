import { useState, useEffect , useLayoutEffect} from "react";
import { motion } from "framer-motion";
import "./Profile.css";
import Typewriter from "typewriter-effect";
import dp from "./mydp.jpg"
import cal from "./calculator.jpeg"
import "@fortawesome/fontawesome-free/css/all.min.css";
import SkillsSlider from "./SkillsSlider";
import ecom from "./e-com.png"

export default function PortfolioPage() {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState("home");
const handleSubmit = (e) => {
    e.preventDefault(); // stops page reload
    alert("Thank you for getting in touch! I will get back to you soon.");
    let i = document.querySelectorAll("input");
    i.forEach((e)=>{
      e.value="";
    });
     let t = document.querySelector("textarea");
     t.value="";
  };


  useLayoutEffect(() => {
  // Prevent browser automatic scroll restoration and force top-of-page
  if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  // Synchronous scroll before paint
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  // small fallback in case the browser tries to restore after scripts run
  const fallback = setTimeout(() => window.scrollTo(0, 0), 50);

  return () => {
    clearTimeout(fallback);
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      // restore default behavior when component unmounts
      window.history.scrollRestoration = "auto";
    }
  };
}, []);


useEffect(() => {
  const sections = document.querySelectorAll("#home, #skills, #about, #contact");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "-20% 0px -20% 0px",
    }
  );

  sections.forEach((sec) => observer.observe(sec));

  return () => observer.disconnect();
}, []);





const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};


const skillsRow = [
  "HTML", "CSS", "JavaScript", "React", "C", "C++", "Java",
  "Python", "MongoDB", "NodeJS", "Express"
];
  
const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <motion.nav
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    >
      <h1 className="logo">Moin Khan</h1>

      {/* Hamburger Icon */}
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li
          className={active === "home" ? "active" : ""}
          onClick={() => {
            scrollTo("home");
            setMenuOpen(false);
          }}
        >
          Home
        </li>
        <li
          className={active === "skills" ? "active" : ""}
          onClick={() => {
            scrollTo("skills");
            setMenuOpen(false);
          }}
        >
          About
        </li>
        <li
          className={active === "about" ? "active" : ""}
          onClick={() => {
            scrollTo("about");
            setMenuOpen(false);
          }}
        >
          Projects
        </li>
        <li
          className={active === "contact" ? "active" : ""}
          onClick={() => {
            scrollTo("contact");
            setMenuOpen(false);
          }}
        >
          Contact
        </li>
      </ul>
    </motion.nav>

    
      {/* Hero Section */}
<section className="hero" id="home" 

>
  <div className="hero-div">
    <motion.div className="hero-text"
    initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    >
    <h2 className="hello">
      Hello<span className="dot">.</span>
    </h2>
    <h3><span className="underline">___</span> I'm Moin</h3>

    {/* Typewriter Effect */}
    <h2 className="highlight typewriter">
      <Typewriter
        options={{
          strings: [
            "Web Developer 🚀",
            "Frontend Creator 🎨",
            "Backend Explorer ⚙️",
            "Full Stack Learner 📚"
          ],
          autoStart: true,
          loop: true,
          delay: 60,
          deleteSpeed: 40
        }}
      />
    </h2>

    <div className="buttons">
      <button className="btn-primary" onClick={() => scrollTo("about")}>
        Get Projects
      </button>
      <button className="btn-secondary">My resume</button>
    </div>


  </motion.div>

  {/* Right Image */}
  <motion.div
    className="hero-image"
    initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    whileHover={{ scale: 1.05 }}
    onHoverStart={() => setHover(true)}
    onHoverEnd={() => setHover(false)}
  >
    <div className="image-wrapper">
      <div className="image-glow"></div>
      <img src={dp} alt="Profile" />
    </div>
  </motion.div>
  </div>

<motion.div className="hero-box"

initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
>
  <div className="hero-box-div">
   <h3> <i class="fa-solid fa-user-graduate"></i> Education</h3>
   <h5> Bachelor of Computer Applications</h5>
   <p>Abhyuday University Khargone</p>
   <p>2023 - Present</p>
  </div>
  <div className="hero-box-div">
   <h3> <i class="fa-solid fa-briefcase"></i> Experience</h3>
   <h5> Mern Stack Developer Intern</h5>
   <p>Digital Savers</p>
   <p>Since July 2025</p>
  </div>

    <div className="hero-box-div">
   <h3> <i class="fa-solid fa-code"></i> Skills</h3>
   <h5> MERN Stack & Programming</h5>
   <p>Frontend ✦ Backend ✦ Database</p>
   <p>C, C++, Java, Python</p>
  </div>

    <div className="hero-box-div">
   <h3> <i class="fa-brands fa-figma"></i> UI/UX Design</h3>
   <h5> Designed Interfaces & Prototypes</h5>
   <p>Figma | Wireframing & Prototyping</p>
   <p>Since - 2024</p>
  </div>


  
</motion.div>

</section>


  <section id="skills">
         <div className="about-text">

          <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          >About me</motion.h3>

          <motion.p
          initial={{ opacity: 0, x: -50 ,y:10}}
          whileInView={{ opacity: 1, x: 0,y:0 }}
          transition={{ duration: 1, delay:0.3 }}
            viewport={{ once: true }}
          >
I’ve always had a deep passion for creating things from the ground up, whether it was small projects or experimenting with new ideas. That curiosity and love for building gradually pushed me toward the world of software development, where I discovered how exciting it is to bring ideas to life through code. Over time, this passion shaped me into a MERN stack developer, and now I truly enjoy every part of the process—from brainstorming and problem-solving to designing and building applications that people can actually use.     </motion.p>
          <motion.div className="stats"
  initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}  
              transition={{ duration: 1,delay:0.3   }}
                viewport={{ once: true }}
          >
            <div
          
            >
              <h4>5<span className="statsicon">+</span> </h4>
              <p>Completed Projects</p>
            </div>

            <div >
              <h4>75<span  className="statsicon">%</span></h4>
              <p>Client Satisfaction</p>
            </div>

            <div 
          
            >
              <h4>1<span className="statsicon">+</span></h4>
              <p>Year of Experience</p>
            </div>
          </motion.div>
        </div>
          </section>
      <section className="about" >
<SkillsSlider skills={skillsRow} speed={1} direction="left" />
      </section>
      
 






      <section id="about" className="about-div"> 
        
        <motion.h1
         initial={{ opacity: 0, y:50 }}       
      whileInView={{ opacity: 1,y:0 }}  
      transition={{ duration: 1 }}
        viewport={{ once: true }}
        >Projects</motion.h1>
        
       <div className="projects-div">

     <motion.div className="project-box"
           initial={{ opacity: 0, x:-50, y:50 }}       
      whileInView={{ opacity: 1, x:0 ,y:0}}  
      transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
          >
      {/* Project Title */}
         <div className="project-img">
    <img src={ecom} alt="calculator" />
      </div>
      <h2 className="project-title">E-Commerce Website</h2>

      {/* Description */}
      <p className="project-description">
       A simple and elegant e-commerce platform designed with React and JSON-based product data. It includes features like product display, shopping cart updates, and a demo payment flow, wrapped in a clean and intuitive UI.
         </p>

      

      {/* Links */}
      <div className="project-links">
        <a href="https://github.com/moin43022/E-com" target="_blank" rel="noopener noreferrer" className="btn btn-code">
          Code
        </a>
        <a href="https://e-com-j9j9.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-demo">
          Demo
        </a>
      </div>
    </motion.div>



     <motion.div className="project-box"
           initial={{ opacity: 0, y:50 }}       
      whileInView={{ opacity: 1, y:0 }}  
      transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
          >
      {/* Project Title */}
      <div className="project-img">
    <img src={ecom} alt="calculator" />
      </div>
      <h2 className="project-title">E-Commerce Website</h2>

      {/* Description */}
      <p className="project-description">
       A simple and elegant e-commerce platform designed with React and JSON-based product data. It includes features like product display, shopping cart updates, and a demo payment flow, wrapped in a clean and intuitive UI.
         </p>

      

      {/* Links */}
      <div className="project-links">
        <a href="https://github.com/moin43022/E-com" target="_blank" rel="noopener noreferrer" className="btn btn-code">
          Code
        </a>
        <a href="https://e-com-j9j9.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-demo">
          Demo
        </a>
      </div>
    </motion.div>



     <motion.div className="project-box"
           initial={{ opacity: 0, x:50,y:50 }}       
      whileInView={{ opacity: 1, x:0,y:0 }}  
      transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
          >
      {/* Project Title */}
      <div className="project-img">
    <img src={ecom} alt="calculator" />
      </div>
      <h2 className="project-title">E-Commerce Website</h2>

      {/* Description */}
      <p className="project-description">
       A simple and elegant e-commerce platform designed with React and JSON-based product data. It includes features like product display, shopping cart updates, and a demo payment flow, wrapped in a clean and intuitive UI.
         </p>

      

      {/* Links */}
      <div className="project-links">
        <a href="https://github.com/moin43022/E-com" target="_blank" rel="noopener noreferrer" className="btn btn-code">
          Code
        </a>
        <a href="https://e-com-j9j9.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-demo">
          Demo
        </a>
      </div>
    </motion.div>
   


        </div>

        </section>
     
        
      
   
      
        <section id="contact"></section>
        <div className="Contact-div"
        
        >
          <motion.h1
           initial={{ opacity: 0}}       
      whileInView={{ opacity: 1 }}  
      transition={{ duration: 1 }}
        viewport={{ once: true }}
          >Get In Touch</motion.h1>
          <motion.p
           initial={{ opacity: 0 }}       
      whileInView={{ opacity: 1}}  
      transition={{ duration: 1}}
        viewport={{ once: true }}
          >Please contact me directly at moin43022@gmail.com or through this form.</motion.p>
          <form onSubmit={handleSubmit}>
            <motion.label
             initial={{ opacity: 0 }}       
      whileInView={{ opacity: 1}}  
      transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
            >

              Name
            </motion.label>
            <motion.input placeholder="Your Name" type="text" required   initial={{ opacity: 0 }}       
      whileInView={{ opacity: 1 }}  
      transition={{ duration: 1, delay: 0.2 }} 
        viewport={{ once: true }}
      />

            <motion.label
              initial={{ opacity: 0}}       
      whileInView={{ opacity: 1 }}  
      transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
            >
              Email
            </motion.label>
            <motion.input placeholder="Hello@gmail.com" type="email" required    initial={{ opacity: 0 }}       
      whileInView={{ opacity: 1 }}  
      transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      />
            
            
            <motion.label 
              initial={{ opacity: 0 }}       
      whileInView={{ opacity: 1}}  
      transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
            >
              Massage
            </motion.label>
            <motion.textarea  placeholder="Hello! What's up?" required 
              initial={{ opacity: 0 }}       
      whileInView={{ opacity: 1}}  
      transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
            />
            
           <motion.button type="submit"
             initial={{ opacity: 0 }}       
      whileInView={{ opacity: 1}}  
      transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
           >Submit <i class="fa-solid fa-arrow-right"></i> </motion.button>
          </form>

        </div>
        <footer>
          <div className="copyrigth">
            <p
            
      
            >© 2025 Moin Khan. All rights reserved</p>
          </div>

          <div className="socialmedia">
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-facebook"></i>
          </div>
        </footer>
    </div>
  );
}
