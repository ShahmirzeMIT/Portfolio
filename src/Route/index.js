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
		</>
	)
}

export default Routing