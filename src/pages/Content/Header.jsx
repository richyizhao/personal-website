import { useEffect } from "react";
import { User, Folder, Tool, MessageCircle, GitHub, Linkedin } from "react-feather";

function Header() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li");

    const observerOptions = {
      root: null,
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const activeLink = document.querySelector(`nav a[href="#${id}"]`).parentElement;
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => { observer.disconnect() };
  }, []);

  return (
    <header>
      <div className="header__container">
        <h1>Richard Zhao</h1>
        <h2>Full Stack Developer</h2>
        <p>
          Forging robust web & mobile applications <br/>
          for seamless user experience.
        </p>
      </div>
      <nav className=".border-left-side">
        <ul>
          <li>
            <a href="#about">
              <User />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#projects">
              <Folder />
              <span>Projects</span>
            </a>        
          </li>
          <li>
            <a href="#skills">
              <Tool />
              <span>Skills</span>
            </a>        
          </li>
          <li>
            <a href="#contact">
              <MessageCircle />
              <span>Contact</span>
            </a>        
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <a href="https://github.com/richyizhao" target="_blank">
              <GitHub />
              <span>Github</span>
            </a>        
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rzha/" target="_blank">
              <Linkedin />
              <span>Linkedin</span>
            </a>        
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;