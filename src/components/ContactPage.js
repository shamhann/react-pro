import React from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import MoscowContact from "./MoscowContact";
import GroznyContact from "./GroznyContact";

function ContactPage(props) {
    return (
        <div className='contact'>
            <div className='contactNom'>
                наши контакты:
                <NavLink to='/contacts/grozny'>
                    Grozny
                </NavLink>
                ||
                <NavLink to='/contacts/moscow'>
                    Moscow
                </NavLink>

                <Route path='/contacts/moscow'>
                    <MoscowContact/>
                </Route>
                <Route path='/contacts/grozny'>
                    <GroznyContact/>
                </Route>

            </div>
           <div className='contactTitle'>
              Мы находимся здесь
           </div>
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad042aaa579677da4c2e573d49ac1f1e792092b75a73274e77660340449cb1044&amp;source=constructor"
                width="100%" height="400" frameBorder="0"></iframe>
        </div>
    );
}

export default ContactPage;