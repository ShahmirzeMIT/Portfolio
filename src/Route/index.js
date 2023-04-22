

import Portfolio from "../portofilo/portfolio";
import Header from "../header/header";
import Main from "../main/main";
import Projects from "../project/project";
import Resume from "../resume/resume";
import Questions from "../question/question";
import Laptop from "../laptop/laptop";
import Contact from "../contact/contact";
import Footer from "../footer/footer"
import Slider from "../slider/slider";


function Routing() {
	return(
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
					
		</>
	)
}

export default Routing