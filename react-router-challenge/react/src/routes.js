import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import Resume from './components/Resume';
import SkillsContainer from './containers/SkillsContainer'
import EducationExperienceContainer from './containers/EducationExperienceContainer';
import ProjectsIndexContainer from './containers/ProjectsIndexContainer';
import ProjectShowContainer from './containers/ProjectShowContainer';
import About from './components/About';

let routes = (
  <Route path="/" component={Layout} >
    <IndexRoute component={About}/>
    <Route path="/resume" component={Resume}/>
    <Route path='/projects' component={ProjectsIndexContainer}/>
    <Route path='/projects/:id' component={ProjectShowContainer}/>


  </Route>
);

export default routes;
