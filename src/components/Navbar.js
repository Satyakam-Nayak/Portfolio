import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

var navbar = {
    height: '10vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#40513B'
}

var icons={
    margin: "1vh",
    height: "5vh"
}

var list={
    display: "flex",
    margin: "1vh",
    listStyle: "none"
}

var anch={
    margin: "2vh",
    fontSize: '25px',
    textDecoration: "none",
    color: 'white',
}

export default function Navbar() {

    const handleClick = (anchor) => () => {
        const id = `${anchor}`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

    return (
        <div style={navbar}>
                <h1 style={{color: 'white'}}>Welcome</h1>
            <div>
                <a href='https://github.com/Satyakam-Nayak' style={{color: 'white'}}><FontAwesomeIcon icon={faGithub} style={icons}/></a>
                <a href='https://www.linkedin.com/in/satyakam-nayak/' style={{color: 'white'}}><FontAwesomeIcon icon={faLinkedin} style={icons}/></a>
                <a href='https://www.instagram.com/wrench.ie/' style={{color: 'white'}}><FontAwesomeIcon icon={faInstagram} style={icons}/></a>
                <a href='https://www.facebook.com/satyakamnayak2002' style={{color: 'white'}}><FontAwesomeIcon icon={faFacebook} style={icons}/></a>
            </div>
            <div style={list}>
                <a href="/#projects" onClick={handleClick('projects')} style={anch}>Projects</a>
                <a href="/#skills" onClick={handleClick('skills')} style={anch} >Skills</a>
                <a href="/#certificates" onClick={handleClick('certificates')} style={anch} >Certificates</a>
                <a href="/#contactme" onClick={handleClick('contactme')} style={anch} >Contact Me</a>
            </div>
        </div>
    )
}