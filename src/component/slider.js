import styles from '../index.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { DataContext } from '../App';
function Slider(){
        const value=useContext(DataContext)
        const slide=value.slide
	return(
		<section className='grayS' id='slider'>
			<div className='wd80Sl'>
				<div className='client'><div>Client Speak</div></div>
				<h1 className='whiteS'>What Some of my Clients Say</h1>
                <Carousel>
                   
                 {
                                        slide.map(item=> 
                                                        <Carousel.Item>
                                                        <p className="wd50P">{item.text}</p> 
                                                        <div className="littleImg"> 
                                                        <img src={"/assets/img/" +item.src } />
                                                        </div>
                                                        <p>{item.fullName}</p>
                                                        <p>{item.workPlace}</p>
                                                        </Carousel.Item>
                                        )
                        }   
                </Carousel>
		</div>

</section>
	)
}

export default Slider