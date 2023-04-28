import Portfolio from "./component/portfolio";
import Projects from "./component/project";
import Resume from "./component/resume";
import Questions from "./component/question";
import Laptop from "./component/laptop";
import Contact from "./component/contact";
import Footer from "./component/footer"
import Slider from "./component/slider";
import Header from "./component/header";
import Main from "./component/main";
import Check from "./component/check";

function App() {
    return (
      <>
          <Header/>
          <Main/>
          <Projects/>
          <Resume/>
          <Portfolio/>
          <Laptop/>
          <Questions/>
          <Slider/>
          <Contact/>
          <Footer/>
          <Check/>
      </>
    );
    }

    export default App;     