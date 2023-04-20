import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faChevronDown,faChevronUp} from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from "react"

 function Accordion({title,children}){
	const[open,setOpen]=useState(false)
	return(
		<div className="accordion-wrapper">
      
		<div
		  className={`accordion-title ${open ? "open" : ""}`}
		  onClick={() => setOpen(!open)}
		  >
			<span className="span" >
				{
				open ?<FontAwesomeIcon icon={faChevronUp}  />  : <FontAwesomeIcon icon={faChevronDown}  />
				}
			</span>
			
		 {title}
		</div>
		<div className={`accordion-item ${!open ? "collapsed" : ""}`}>
		  <div className="accordion-content">{children}</div>
		</div>
	   </div>
	)
}

export default Accordion