import classes from "./App.module.css";
import NavBar from "./containers/NavBar/NavBar";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Skills from "./containers/Skills/Skills";
import Work from "./containers/Work/Work";
import Contact from "./containers/Contact/Contact";
import Footer from "./containers/Footer/Footer";

function App() {
  return (
    <div className={classes.App}>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
