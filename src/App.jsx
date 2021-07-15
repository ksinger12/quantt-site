import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
// import Services from './Components/Services.jsx';
// import Contact from './Components/Contact.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Team from './Components/Team.jsx';
import Blog from './Components/Blog.jsx';
import Post from './Components/Post.jsx';
import Partners from './Components/Partners.jsx';
import Education from './Components/Education.jsx';

//original repo: https://github.com/Aqveduktis/react-business-site

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/education" component={Education} />
                <Route exact path="/team" component={Team} />
                <Route path="/partners" render={Partners} />
                <Route exact path="/blog" component={Blog} />
                <Route path="/blog/:slug" render={Post} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    );
};
export default App;


