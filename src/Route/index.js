import Portfolio from "../Portofilo/Portfolio";
import Header from "../header/header";
import Main from "../main/main";
import Projects from "../project/project";
import Resume from "../resume/resume";



function Routing() {
	return(
		<>
                        <Header/>
                        <Main/>
                        <Projects/>
					<Resume/>
					<Portfolio/>
		</>
	)
}

export default Routing