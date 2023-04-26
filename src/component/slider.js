import styles from '../index.css'
import Image from "../assets/greencard.jpeg"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
function Slider(){
	return(
		<section className='grayS' id='slider'>
			<div className='wd80Sl'>
				<div className='client'><div>Client Speak</div></div>
				<h1 className='whiteS'>What Some of my Clients Say</h1>
				
				<Carousel>
                    <Carousel.Item>
                            <p className="wd50P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam at quam bibendum bibendum. Donec euismod, velit vel lacinia bibendum, sapien nunc faucibus sapien, vel tincidunt nulla velit vel nisi. Sed euismod, nibh eget aliquam lacinia, ipsum lorem malesuada magna, ac malesuada odio nisl at ante. Sed auctor enim sed enim ultrices, vel suscipit sapien luctus. Donec euismod mauris ac velit bibendum, quis vestibulum urna iaculis. </p>
                            <div className="littleImg"> 
                            <img src={Image} />
                            </div>
                            <p>Shahmirze Mammadyarli</p>
                            <p className='ptP'>Freelancer from Baku </p>
                    </Carousel.Item>
                    <Carousel.Item>
                            <p  className="wd50P">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam at quam bibendum bibendum. Donec euismod, velit vel lacinia bibendum, sapien nunc faucibus sapien, vel tincidunt nulla velit vel nisi. Sed euismod, nibh eget aliquam lacinia, ipsum lorem malesuada magna, ac malesuada odio nisl at ante. Sed auctor enim sed enim ultrices, vel suscipit sapien luctus. Donec euismod mauris ac velit bibendum, quis vestibulum urna iaculis. </p>
                            <div className="littleImg"> 
                             <img src={Image} />
                            </div>
                            <p>Shahmirze Mammadyarli</p>
                            <p className='ptP'>Freelancer from Baku </p>
                    </Carousel.Item>
                    <Carousel.Item>
                            <p  className="wd50P">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam at quam bibendum bibendum. Donec euismod, velit vel lacinia bibendum, sapien nunc faucibus sapien, vel tincidunt nulla velit vel nisi. Sed euismod, nibh eget aliquam lacinia, ipsum lorem malesuada magna, ac malesuada odio nisl at ante. Sed auctor enim sed enim ultrices, vel suscipit sapien luctus. Donec euismod mauris ac velit bibendum, quis vestibulum urna iaculis.
                            </p>
                            <div className="littleImg"> 
                                    <img src={Image} />
                            </div>
                            <p>Shahmirze Mammadyarli</p>
                            <p className='ptP'>Freelancer from Baku </p>
                    </Carousel.Item>
                </Carousel>
		</div>

</section>
	)
}

export default Slider