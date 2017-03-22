import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton';
import NavigationBar from './NavigationBar';

const Layout = (props) => {
 return(
   <div>
    <div className ="header">
       <NavigationBar/>
       <h1 className="page-title text-center"> Jane Jupiter, Developer </h1>
     </div>
     {props.children}
   </div>
 )
}

export default Layout;
