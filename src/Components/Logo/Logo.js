import React from 'react';
import Tilt from 'react-parallax-tilt';
import Brain from './Brain.png';
import './Logo.css';

const Logo = () => {
	return(
		<div className='ma4 mt'>
			<Tilt className="Tilt br4 shadow-3" style={{ height: 150, width: 150, backgroundColor: 'darkgreen' }}>
		      <div className="pa3">
		        <img style={{padding: '2px'}} alt='logo' src={Brain}/>
		      </div>
		    </Tilt>
		</div>
	);
}

export default Logo;