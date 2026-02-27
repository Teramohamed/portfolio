import './App.css';
import Header from './composant/Header';
import Accueil from './composant/Accueil';
import Profil from './composant/Profil';
import Competence from './composant/Competence';
import Experience from './composant/Experience';
import Formation from './composant/Formation';
import Contact from './composant/Contact';
import Footer from './composant/Footer';


function App() {
  return (
    <div>
      <Header/>

     <Accueil/>

     <Profil/>

     <Competence/>

     <Experience/> 
     
     <Formation/> 

     <Contact/> 

     <Footer/> 

    </div>
  );
}

export default App;