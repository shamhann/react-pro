import React from 'react';
import {Route,Switch} from "react-router-dom";
import HomePage from "./HomePage";
import FeaturesPage from "./FeaturesPage";
import ContactPage from "./ContactPage";
import NotFound from "./NotFound";
import CustomLink from "./CustomLink";
import MoscowContact from "./MoscowContact";
import GroznyContact from "./GroznyContact";

function Main(props) {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route path='/features'>
                    <FeaturesPage/>
                </Route>
                <Route path='/contacts'>
                    <ContactPage/>
                </Route>
                <Route path='/my-link'>
                    <CustomLink/>
                </Route>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </div>
    );
}

export default Main;