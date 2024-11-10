'use client'; // Ensure this page is treated as a Client Component

import NavBar from '../components/NavBar';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div>
      <NavBar />
      
      {/* Sections */}

      <section id="home" className="section home">
      <div className="background1">
      <div className="container">
      <div className="profileContainer">
      <h1>HELLO, I'm</h1>
      <br></br>
      <h1 className='color1'> HAFIZ M.ALI RAZA</h1>
      <br></br>
      <h3>Front-end Developer specialized in building fast, <br>
      </br>responsive and modern websites with Next.js & react</h3>
      <br></br>
        <img 
          src="/images/profile.jpeg" 
          alt="Profile Picture" 
          className="profileImage"
        />
        <br></br>
        <br></br>
        <div className="social-links">
        <a href="https://github.com/Ali-Raza-dev76" target="_blank" rel="noopener noreferrer">
        <FaGithub size={50} />
      </a>
      <a href="https://www.linkedin.com/in" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={50} />
      </a>
      </div>
      </div>
    </div>
</div>
      </section>
      <section id="about" className="section about">
      <div className="background2">
      <div className="container">
      <br></br>
      <br></br>
      <h1>Hi,  I'm ALI RAZA from Karachi-Pakistan, a Passionate and innovative web developer
with a strong foundation in Front-end Development, I've crafted responsive,
user-centric interfaces that delight and inspire.
<br></br>
<br></br>
I embarked on my IT journey in 2024, and I'm thrilled to be part of an industry that's
constantly evolving. With AI reshaping our world daily, I'm driven to stay ahead of the
curve and leverage technology to create innovative solutions that make a lasting impact.
<br></br>
<br></br>
- HTML | CSS
<br></br>
- Javascript
<br></br>
- Typescript
<br></br>
- Tailwind CSS
<br></br>
- Next.js
<br></br>
- React.js
<br></br>
<br></br>
Current Obsessions :
- Next.js is my current focus, but my curiosity extends far beyond 
<br></br>
<br></br>
I'm expanding my skill set to include 'Next.js' & 'Artificial intelligence', and I'm excited to
apply my knowledge to build intelligent, and efficient web applications.</h1>
      <br></br>
      </div>
      </div>
      </section>
      
      <section id="skills" className="section skills">
      <div className="background3">
      <div className="container">
      <br></br>
      <h1 className='color2'> SKILLS </h1>
      <br></br>
      <br></br>
      <br></br>   
      <img 
          src="/images/github.png" 
          alt="css Picture" 
          className="skillImage"
        />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="image-container">
      <img 
          src="/images/css.png" 
          alt="css Picture" 
          className="skillImage"
        />
      <img 
          src="/images/html.png" 
          alt="css Picture" 
          className="skillImage"
        />
      <img 
          src="/images/js.png" 
          alt="css Picture" 
          className="skillImage"
        />
      <img 
          src="/images/nextjs.png" 
          alt="css Picture" 
          className="skillImage"
        />  
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>   
      <div className="image-container">
        <img 
            src="/images/react.png" 
            alt="css Picture" 
            className="skillImage"
          />
      <img 
          src="/images/vscode.jpeg" 
          alt="css Picture" 
          className="skillImage"
        />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
        </div>
      </section>
      
      <section id="contact" className="section contact">
      <div className="background4">
      <div className="container">
      <br></br>
      <h1 className='color3'> <u> GET IN TOUCH </u></h1>
      <h1> +92-3148890958 | Ali.raza@gmail.com</h1>
      <br></br>
      <br></br>
      <br></br>
      <label htmlFor="name"></label>
      <input type="text" id="name" name="name" placeholder="First name" />
      <br></br>
      <br></br>
      <label htmlFor="name"></label>
      <input type="text" id="name" name="name" placeholder="Last name" />
      <br></br>
      <br></br>
      <label htmlFor="name"></label>
      <input type="text" id="name" name="name" placeholder="Email" />
      <br></br>
      <br></br>
      <label htmlFor="name"></label>
      <input type="text" id="name" name="name" placeholder="Message" />
      <br></br>
      <br></br>
      <button type="submit"> <h1> Send Message </h1></button>
      <br></br>
      <br></br>
      <div className="social-links">
        <a href="https://github.com/Ali-Raza-dev76" target="_blank" rel="noopener noreferrer">
        <FaGithub size={50} />
      </a>
      <a href="https://www.linkedin.com/in" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={50} />
      </a>
      </div>
        </div>
        </div>
      </section>

      <style jsx>{`
        .section {
          padding: 100px 20px;
          min-height: 100vh;
          background-color: #f4f4f4;
          margin-bottom: 20px;
        }
        .home {
          background-color: black;
          color: white;
        }
        .about {
          background-color: #40E0D0;
          color: white;
        }
        .skills {
          background-color: #2A3439;
          color: white;
        }
        .contact {
          background-color: #98FF98;
          color: white;
        }
      `}</style>
    </div>
  );
}
