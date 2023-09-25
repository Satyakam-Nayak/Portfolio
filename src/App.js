import './App.css';
import Certificates from './components/Certificates';
import Contactme from './components/Contactme';
import Footer from './components/Footer';
import Frontpage from './components/Frontpage';
import Project from './components/Project';
import Skill from './components/Skill';
import Navbar from './components/Navbar';
import ScrollButton from './components/ScrollButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Frontpage />
      <Project />
      <Skill/>
      <Certificates />
      <Contactme />
      <Footer />
      <ScrollButton/>
      
    </div>

  );
}

export default App;
