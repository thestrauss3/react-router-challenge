import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton';

const NavigationBar = (props) => {
 return(
   <div>
     <Link to="/resume">Resume</Link>  <Link to='/projects'>Projects</Link><BackButton />
   </div>
 )
}

export default NavigationBar;
