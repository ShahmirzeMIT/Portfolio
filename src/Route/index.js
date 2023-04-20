

import Portfolio from "../portofilo/portfolio";
import Header from "../header/header";
import Main from "../main/main";
import Projects from "../project/project";
import Resume from "../resume/resume";
import Questions from "../question/question";



function Routing() {
	return(
		<>
                        <Header/>
                        <Main/>
                        <Projects/>
					<Resume/>
					<Portfolio/>
					<Questions/>
		</>
	)
}

export default Routing