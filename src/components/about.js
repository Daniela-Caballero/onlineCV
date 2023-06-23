import profile from '../profile-pic.jpg';
import techCV from '../techCV.pdf';
import './about.css'

export default function About({about}) {


    return <section className="hero" ref={about}>
      <div>
        <div className="hero-row">
          <div className='hero-name'>
            <h2><br/>Hi, nice to meet you! I'm...</h2>
            <h1>Daniela <br/>Caballero</h1>
            <h2 className='role-name'>A Web Developer</h2>
          </div>
          <div className="profile-pic-container">
            <img src={profile}/>
          </div>
        </div>
        <p className='herocontent'> 
        I'm an aspiring web developer dedicated to creating seamless online experiences. 
        Proficient in HTML, CSS, and JavaScript, I merge functionality with aesthetics to craft captivating websites. 
        With strong problem-solving skills and a collaborative mindset, I'm eager to transform ideas into impactful 
        digital solutions.</p>
        <div>
          <a href={techCV}
          download="techCV"
          target="_blank"
          rel="noreferrer"
          >
          <button className='resume'>Resume</button>
          </a>
        </div>
      </div>
    </section>
  }
  