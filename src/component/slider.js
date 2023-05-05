import styles from '../index.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { DataContext } from '../App';
function Slider(){
        const value=useContext(DataContext)
        const slide=value.slide
        const sliderTarget=value.sliderTarget
	return(
		<section className='grayS' id='slider'>
			<div className='wd80Sl'>
                                {
                                        sliderTarget.map((item,i)=><>               
				                <div className='client' key={i}><div>{item.target}</div></div>
				                <h1 className='whiteS'  key={i}>{item.text}</h1> 
                                        </>)
                                }
                <Carousel>
                   
                 {
                                        slide.map((item,i)=> 
                                                        <Carousel.Item key={i}>
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